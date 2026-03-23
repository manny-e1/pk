"use client";
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function TotpCharts({ tokens }: { tokens: any[] }) {
    const vendorChartRef = useRef<HTMLCanvasElement>(null);
    const expiryChartRef = useRef<HTMLCanvasElement>(null);
    const vendorChartInstance = useRef<any>(null);
    const expiryChartInstance = useRef<any>(null);

    useEffect(() => {
        if (!tokens || tokens.length === 0) return;

        // 1. OLAH DATA VENDOR
        const vendorCounts = { yubico: 0, feitian: 0, safenet: 0, other: 0 };
        
        tokens.forEach(t => {
            const v = (t.vendor || '').toLowerCase();
            if (v === 'yubico') vendorCounts.yubico++;
            else if (v === 'feitian') vendorCounts.feitian++;
            else if (v === 'safenet' || v === 'thales') vendorCounts.safenet++;
            else vendorCounts.other++;
        });

        // 2. OLAH DATA EXPIRY (Logika Kuartal Korporat)
        const expiryCounts = [0, 0, 0, 0, 0, 0]; // Q1, Q2, Q3, Q4, Next Year, Future
        const expiryLabels = ['Q1', 'Q2', 'Q3', 'Q4', 'Next Year', 'Future'];
        
        const currentYear = new Date().getFullYear();

        tokens.forEach(t => {
            if (!t.expiryDate) return;
            
            const expDate = new Date(t.expiryDate);
            const expYear = expDate.getFullYear();
            const expMonth = expDate.getMonth(); // 0 = Jan, 11 = Dec

            // Hitung hanya untuk tahun ini dan ke depan
            if (expYear === currentYear) {
                if (expMonth <= 2) expiryCounts[0]++;       // Jan - Mar (Q1)
                else if (expMonth <= 5) expiryCounts[1]++;  // Apr - Jun (Q2)
                else if (expMonth <= 8) expiryCounts[2]++;  // Jul - Sep (Q3)
                else expiryCounts[3]++;                     // Oct - Dec (Q4)
            } 
            else if (expYear === currentYear + 1) {
                expiryCounts[4]++;                          // Next Year
            } 
            else if (expYear > currentYear + 1) {
                expiryCounts[5]++;                          // Future
            }
        });

        // ================= RENDER CHARTS =================

        // Render Vendor Chart
        if (vendorChartInstance.current) vendorChartInstance.current.destroy();
        if (vendorChartRef.current) {
            vendorChartInstance.current = new Chart(vendorChartRef.current, {
                type: 'doughnut',
                data: {
                    labels: ['Yubico', 'Feitian', 'SafeNet', 'Other'],
                    datasets: [{
                        data: [vendorCounts.yubico, vendorCounts.feitian, vendorCounts.safenet, vendorCounts.other],
                        backgroundColor: ['#3b82f6', '#8b5cf6', '#10b981', '#64748b'],
                        borderWidth: 0
                    }]
                },
                options: { 
                    responsive: true, 
                    maintainAspectRatio: false, 
                    plugins: { 
                        legend: { position: 'right', labels: { color: '#94a3b8' } },
                        tooltip: { callbacks: { label: (ctx) => ` ${ctx.label}: ${ctx.raw} Tokens` } }
                    } 
                }
            });
        }

        // Render Expiry Timeline Chart
        if (expiryChartInstance.current) expiryChartInstance.current.destroy();
        if (expiryChartRef.current) {
            expiryChartInstance.current = new Chart(expiryChartRef.current, {
                type: 'bar',
                data: {
                    labels: expiryLabels,
                    datasets: [{
                        label: 'Tokens Expiring',
                        data: expiryCounts,
                        backgroundColor: '#3b82f6',
                        borderRadius: 4
                    }]
                },
                options: {
                    responsive: true, 
                    maintainAspectRatio: false, 
                    plugins: { 
                        legend: { display: false },
                        tooltip: { callbacks: { title: (ctx) => `Timeline: ${ctx[0].label} ${currentYear}` } } 
                    },
                    scales: { 
                        x: { grid: { display: false }, ticks: { color: '#94a3b8' } }, 
                        y: { grid: { color: '#2d2d2d' }, ticks: { color: '#94a3b8', stepSize: 1 } } 
                    }
                }
            });
        }

        return () => {
            if (vendorChartInstance.current) vendorChartInstance.current.destroy();
            if (expiryChartInstance.current) expiryChartInstance.current.destroy();
        };
    }, [tokens]);

    return (
        <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-xl overflow-hidden">
                <div className="px-5 py-4 border-b border-[var(--border-secondary)] flex items-center gap-2.5">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px] text-[var(--text-tertiary)]"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>
                    <span className="text-sm font-semibold text-[var(--text-primary)]">Inventory by Vendor</span>
                </div>
                <div className="h-[200px] p-4"><canvas ref={vendorChartRef}></canvas></div>
            </div>
            <div className="bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-xl overflow-hidden">
                <div className="px-5 py-4 border-b border-[var(--border-secondary)] flex items-center gap-2.5">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px] text-[var(--text-tertiary)]"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    <span className="text-sm font-semibold text-[var(--text-primary)]">Token Expiry Timeline</span>
                </div>
                <div className="h-[200px] p-4"><canvas ref={expiryChartRef}></canvas></div>
            </div>
        </div>
    );
}