'use client';

import ReactPaginate from 'react-paginate';
import { Apartment as ApartmentType } from '@/interfaces/Apartment';
import Apartment from './Apartment';

type PaginationInfo = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
};

interface Props {
  apartments: ApartmentType[];
  pagination?: PaginationInfo | null;
  onPageChange?: (page: number) => void;
}

//render apartments list with pagination
export default function ApartmentList({ apartments, pagination, onPageChange }: Props) {
  if (!apartments || apartments.length === 0) {
    return <div className="text-center py-4 text-muted">No apartments found.</div>;
  }

  const handlePageChange = ({ selected }: { selected: number }) => {
    if (onPageChange) {
      onPageChange(selected + 1);
    }
  };

  return (
    <>
      <div className="row">
        {apartments.map((apartment, index) => (
          <Apartment 
            key={apartment.id ?? index} 
            apartment={apartment} 
          />
        ))}
      </div>
      
      {pagination && pagination.totalPages > 1 && (
        <div className="d-flex justify-content-center mt-4">
          <ReactPaginate
            pageCount={pagination.totalPages}
            forcePage={pagination.page - 1}
            onPageChange={handlePageChange}
            containerClassName="pagination"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            activeClassName="active"
          />
        </div>
      )}
    </>
  );
}