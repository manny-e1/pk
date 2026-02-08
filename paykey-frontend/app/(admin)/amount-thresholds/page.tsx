'use client';

import { useState, useEffect } from 'react';
import { SegmentSelector } from '@/components/amount/SegmentSelector';
import { ThresholdTable, Threshold } from '@/components/amount/ThresholdTable';
import { ThresholdModal } from '@/components/amount/ThresholdModal';
import { adminService } from '@/services/adminService'; // Pastikan file ini ada

export default function AmountThresholdsPage() {
  const [segment, setSegment] = useState<'consumer' | 'corporate'>('consumer');
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Threshold | null>(null);
  const [loading, setLoading] = useState(true);
  
  // State data sekarang kosong saat awal, menunggu fetch dari API
  const [data, setData] = useState<Record<string, Threshold[]>>({
    consumer: [],
    corporate: []
  });

  const currentData = data[segment] || [];

  // --- 1. FETCH DATA DARI API ---
  const fetchData = async () => {
    try {
      setLoading(true);
      const apiData = await adminService.getAmountLimits();
      
      const grouped: Record<string, Threshold[]> = {
        consumer: [],
        corporate: []
      };

      // Mapping Data Backend -> Frontend
      apiData.forEach((item: any) => {
        const segKey = item.segment.toLowerCase() as 'consumer' | 'corporate';
        
        if (grouped[segKey]) {
          grouped[segKey].push({
            id: item.id, // ID dari DB (UUID String)
            min: item.minAmount,
            max: item.maxAmount,
            weight: item.weight,
            label: item.label,
            stepUp: item.stepUp,
            methods: item.methods || [] // Pastikan array
          } as unknown as Threshold); // Casting jika ThresholdTable memaksa ID number
        }
      });

      // Sort agar rapi (low to high)
      grouped.consumer.sort((a, b) => a.min - b.min);
      grouped.corporate.sort((a, b) => a.min - b.min);

      setData(grouped);
    } catch (err) {
      console.error("Gagal mengambil data:", err);
      // alert("Gagal koneksi ke server");
    } finally {
      setLoading(false);
    }
  };

  // Load data saat halaman dibuka
  useEffect(() => {
    fetchData();
  }, []);

  // --- 2. HANDLE UPDATE (INLINE EDIT) ---
  const handleUpdate = async (id: number | string, field: keyof Threshold, val: any) => {
    // Optimistic Update (Ubah UI dulu biar cepat)
    const prevData = { ...data };
    const updatedList = currentData.map(t => {
        if (t.id === id) {
            const newItem = { ...t, [field]: val } as Threshold;
            // Auto-update label logic
            if (field === 'weight' && typeof val === 'number') {
                if (val <= 25) newItem.label = 'low';
                else if (val <= 50) newItem.label = 'medium';
                else if (val <= 80) newItem.label = 'high';
                else newItem.label = 'critical';
            }
            return newItem;
        }
        return t;
    });
    setData({ ...data, [segment]: updatedList });

    // Kirim ke Backend
    try {
        const itemToUpdate = updatedList.find(t => t.id === id);
        if(itemToUpdate) {
            await adminService.updateAmountLimit(id.toString(), {
                minAmount: itemToUpdate.min,
                maxAmount: itemToUpdate.max,
                weight: itemToUpdate.weight,
                label: itemToUpdate.label,
                stepUp: itemToUpdate.stepUp,
                methods: itemToUpdate.methods
            });
        }
    } catch (err) {
        console.error("Update gagal:", err);
        setData(prevData); // Kembalikan jika error
        alert("Gagal menyimpan perubahan ke server.");
    }
  };

  // --- 3. HANDLE DELETE ---
  const handleDelete = async (id: number | string) => {
    if (confirm('Hapus aturan limit ini?')) {
        const prevData = { ...data };
        const updatedList = currentData.filter(t => t.id !== id);
        setData({ ...data, [segment]: updatedList });

        try {
            await adminService.deleteAmountLimit(id.toString());
        } catch (err) {
            console.error("Delete gagal:", err);
            setData(prevData);
            alert("Gagal menghapus data.");
        }
    }
  };

  // --- 4. HANDLE MODAL (ADD & EDIT) ---
  const handleEdit = (id: number | string) => {
    const item = currentData.find(t => t.id === id);
    if (item) {
        setEditingItem(item);
        setModalOpen(true);
    }
  };

  const handleAdd = () => {
    setEditingItem(null);
    setModalOpen(true);
  };

  const handleSaveModal = async (formData: Partial<Threshold>) => {
    const isEdit = !!editingItem;
    
    // Siapkan Payload Backend
    const payload = {
        segment: segment.toUpperCase(), // Backend perlu uppercase
        minAmount: formData.min,
        maxAmount: formData.max,
        weight: formData.weight,
        label: formData.label,
        stepUp: formData.stepUp,
        methods: formData.methods
    };

    try {
        if (isEdit && editingItem) {
            // Update
            await adminService.updateAmountLimit(editingItem.id.toString(), payload);
        } else {
            // Create New
            await adminService.createAmountLimit(payload);
        }
        
        // Refresh data dari server agar sinkron
        await fetchData();
        setModalOpen(false);

    } catch (err) {
        console.error("Save failed:", err);
        alert("Gagal menyimpan data. Pastikan Backend berjalan.");
    }
  };

  return (
    <div className="flex min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-[family-name:var(--font-inter)]">
      
      <main className="flex-1 flex flex-col h-screen overflow-hidden min-w-0">
        
        {/* Header */}
        <header className="px-6 py-4 border-b border-[var(--border-primary)] bg-[var(--bg-secondary)] flex justify-between items-center shrink-0">
           <div className="flex items-center gap-4">
             <div>
                <h2 className="text-[16px] font-semibold text-[var(--text-primary)]">Amount Risk Thresholds</h2>
                <div className="text-[12px] text-[var(--text-tertiary)] mt-0.5">Configure risk weights based on transaction amounts</div>
             </div>
           </div>
           
           <div className="flex items-center gap-2.5">
             <button onClick={fetchData} disabled={loading} className="flex items-center gap-1.5 px-3.5 py-2 rounded-[6px] text-[12px] font-medium bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-primary)] hover:bg-[var(--bg-hover)] transition-all">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`}><path d="M23 4v6h-6"/><path d="M1 20v-6h6"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
                {loading ? 'Syncing...' : 'Refresh Data'}
             </button>
           </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6 custom-scrollbar">
            <div className="w-full mx-auto flex flex-col gap-6">
                <SegmentSelector activeSegment={segment} onSelect={setSegment} />
                
                {loading && currentData.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 text-[var(--text-tertiary)]">
                        <div className="w-6 h-6 border-2 border-[var(--accent)] border-t-transparent rounded-full animate-spin mb-3"></div>
                        <p className="text-sm">Loading data from server...</p>
                    </div>
                ) : (
                    <ThresholdTable 
                        data={currentData} 
                        onUpdate={handleUpdate} 
                        onEdit={handleEdit} 
                        onDelete={handleDelete}
                        onAdd={handleAdd}
                    />
                )}
            </div>
        </div>
      </main>

      <ThresholdModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        onSave={handleSaveModal}
        initialData={editingItem}
      />
    </div>
  );
}