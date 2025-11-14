'use client';

import Link from 'next/link';
import { Apartment as ApartmentType } from '@/interfaces/Apartment';

interface Props {
  apartment: ApartmentType;
}

//render single apartment card
export default function Apartment({ apartment }: Props) {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="card h-100">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-start mb-3">
            <h5 className="card-title text-primary">
              {apartment.unit_name}
            </h5>
            <span className="badge bg-secondary">#{apartment.unit_number}</span>
          </div>
          
          <div className="mb-3">
            <div className="mb-2">
              <strong>Project:</strong> {apartment.project}
            </div>
            <div className="mb-2">
              <strong>City:</strong> {apartment.city}
            </div>
          </div>

          {apartment.unit_description && (
            <p className="card-text text-muted mb-3">
              {apartment.unit_description.length > 100 
                ? `${apartment.unit_description.substring(0, 100)}...` 
                : apartment.unit_description}
            </p>
          )}

          <div className="d-flex justify-content-between align-items-center mt-auto">
            <div>
              <span className="h5 text-success">
                ${Number(apartment.price).toLocaleString()}
              </span>
            </div>
            <Link
              href={`/apartments/${apartment.id}`}
              className="btn btn-primary btn-sm"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}