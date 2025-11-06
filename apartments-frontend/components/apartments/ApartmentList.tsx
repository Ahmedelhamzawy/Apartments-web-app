'use client';

import Link from 'next/link';
import { Apartment } from '@/interfaces/Apartment';

interface Props {
  apartments: Apartment[];
}

//render apartments as cards
export default function ApartmentList({ apartments }: Props) {
  if (!apartments || apartments.length === 0) {
    return <div className="text-center py-4 text-muted">No apartments found.</div>;
  }

  return (
    <div className="row">
      {apartments.map((apartment, index) => (
        <div key={apartment.id ?? index} className="col-12 col-md-6 col-lg-4 mb-4">
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
      ))}
    </div>
  );
}