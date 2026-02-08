'use client';
import React from 'react';

interface DataTableProps<T> {
  columns: { header: React.ReactNode; className?: string }[];
  data: T[];
  renderRow: (item: T, isSelected: boolean) => React.ReactNode;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalItems: number;
  itemsPerPage: number;
  selectedIds?: Set<string>;
  onSelectAll?: () => void;
  allSelected?: boolean;
  isLoading?: boolean;
}

export function DataTable<T extends { id: string }>({
  columns, data, renderRow, currentPage, totalPages, onPageChange, totalItems, itemsPerPage, selectedIds, isLoading
}: DataTableProps<T>) {

  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) { pages.push(1, 2, 3, 4, '...', totalPages); }
      else if (currentPage >= totalPages - 2) { pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages); }
      else { pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages); }
    }
    return pages;
  };

  return (
    <div className="bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-[var(--radius-lg)] flex flex-col h-full overflow-hidden shadow-sm">
      <div className="overflow-auto flex-1 custom-scrollbar">
        <table className="w-full border-collapse">
          <thead className="sticky top-0 z-10 bg-[var(--bg-secondary)] shadow-sm">
            <tr>
              {columns.map((col, idx) => (
                <th key={idx} className={`px-4 py-3 text-left text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider border-b border-[var(--border-secondary)] whitespace-nowrap ${col.className || ''}`}>
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
             {isLoading ? (
               <tr><td colSpan={columns.length} className="p-8 text-center text-[var(--text-tertiary)]">Loading...</td></tr>
             ) : data.length === 0 ? (
               <tr><td colSpan={columns.length} className="p-8 text-center text-[var(--text-tertiary)]">No data found</td></tr>
             ) : (
               data.map((item) => renderRow(item, selectedIds ? selectedIds.has(item.id) : false))
             )}
          </tbody>
        </table>
      </div>
      <div className="px-4 py-3 border-t border-[var(--border-secondary)] bg-[var(--bg-elevated)] flex items-center justify-between shrink-0">
        <div className="text-xs text-[var(--text-tertiary)]">
          Showing <strong className="text-[var(--text-primary)]">{totalItems > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0}</strong> to <strong className="text-[var(--text-primary)]">{Math.min(currentPage * itemsPerPage, totalItems)}</strong> of <strong>{totalItems}</strong> entries
        </div>
        <div className="flex gap-1.5">
          <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className="w-8 h-8 flex items-center justify-center border border-[var(--border-primary)] rounded-[var(--radius-sm)] hover:bg-[var(--bg-hover)] disabled:opacity-50 text-[var(--text-secondary)]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          {getPageNumbers().map((p, i) => typeof p === 'number' ? (
            <button key={i} onClick={() => onPageChange(p)} className={`w-8 h-8 flex items-center justify-center rounded-[var(--radius-sm)] text-[12px] font-medium transition-colors ${p === currentPage ? 'bg-[var(--accent)] text-white' : 'hover:bg-[var(--bg-hover)] text-[var(--text-secondary)]'}`}>{p}</button>
          ) : (<span key={i} className="w-8 h-8 flex items-center justify-center text-[var(--text-tertiary)] text-xs">...</span>))}
          <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} className="w-8 h-8 flex items-center justify-center border border-[var(--border-primary)] rounded-[var(--radius-sm)] hover:bg-[var(--bg-hover)] disabled:opacity-50 text-[var(--text-secondary)]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
}