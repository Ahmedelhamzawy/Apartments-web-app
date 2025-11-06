'use client';

import { useState } from 'react';
import ReactPaginate from 'react-paginate';
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

const [currentPage, setCurrentPage] = useState(0);

//fetch apartments based on filters
const { apartments, loading } = useApartments(filters);

// Simple pagination - show 9 apartments per page
const itemsPerPage = 9;
const startIndex = currentPage * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const currentApartments = apartments.slice(startIndex, endIndex);
const totalPages = Math.ceil(apartments.length / itemsPerPage);

// Reset page when filters change
const handleFiltersChange = (newFilters: typeof filters) => {
  setFilters(newFilters);
  setCurrentPage(0);
};

// Handle page change
const handlePageChange = ({ selected }: { selected: number }) => {
  setCurrentPage(selected);
};

//render apartments list with filters and pagination
return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 className="mb-0">Apartments</h1>
      </div>

     <ApartmentFilters filters={filters} setFilters={handleFiltersChange} />

      {loading ? (
        <div className="text-center py-5 text-muted">Loading apartments...</div>
      ) : (
        <>
          <ApartmentList apartments={currentApartments} />
          
          {totalPages > 1 && (
            <div className="d-flex justify-content-center mt-4">
              <ReactPaginate
                pageCount={totalPages}
                onPageChange={handlePageChange}
                containerClassName="pagination"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                activeClassName="active"
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}