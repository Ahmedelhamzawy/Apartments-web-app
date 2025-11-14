'use client';

import { useState } from 'react';
import ApartmentList from '@/modules/apartments/components/ApartmentList';
import ApartmentFilters from '@/modules/apartments/components/ApartmentFilter';
import useApartments from '@/modules/apartments/hooks/useApartments';

export default function ApartmentsPage() {
const [filters, setFilters] = useState({
  search: '',
  city: '',
  minPrice: '',
  maxPrice: '',
  page: 1,
  limit: 9,
});

//fetch apartments with server-side pagination
const { apartments, pagination, loading } = useApartments(filters);

// Handle page change
const handlePageChange = (page: number) => {
  setFilters(prev => ({ ...prev, page }));
};

//render apartments page
return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 className="mb-0">Apartments</h1>
        {pagination && (
          <small className="text-muted">
            Page {pagination.page} of {pagination.totalPages} ({pagination.total} total)
          </small>
        )}
      </div>

     <ApartmentFilters filters={filters} setFilters={setFilters} />

      {loading ? (
        <div className="text-center py-5 text-muted">Loading apartments...</div>
      ) : (
        <ApartmentList 
          apartments={apartments} 
          pagination={pagination}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}