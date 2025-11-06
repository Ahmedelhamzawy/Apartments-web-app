'use client';

import { useState } from 'react';
import ApartmentList from '@/components/apartments/ApartmentList';
import ApartmentFilters from '@/components/apartments/ApartmentFilter';
import useApartments from '@/hooks/apartments/useApartments';

export default function ApartmentsPage() {
const [filters, setFilters] = useState({
  search: '',
  city: '',
  minPrice: '',
  maxPrice: '',
});

//fetch apartments based on filters
const { apartments, loading } = useApartments(filters);

//render apartments list with filters if any
return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 className="mb-0">Apartments</h1>
      </div>

     <ApartmentFilters filters={filters} setFilters={setFilters} />


      {loading ? (
        <div className="text-center py-5 text-muted">Loading apartments...</div>
      ) : (
        <ApartmentList apartments={apartments} />
      )}
    </div>
  );
}