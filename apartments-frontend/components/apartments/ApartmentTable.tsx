'use client';

import Link from 'next/link';
import { Apartment } from '@/interfaces/Apartment';

interface Props {
  apartments: Apartment[];
}

//render apartments table
export default function ApartmentTable({ apartments }: Props) {
  if (!apartments || apartments.length === 0) {
    return <div className="text-center py-4 text-muted">No apartments found.</div>;
  }
  return (
    <div className="table-responsive shadow-sm bg-white rounded">
      <table className="table table-striped table-hover mb-0">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Unit Name</th>
            <th>Unit Number</th>
            <th>Project</th>
            <th>City</th>
            <th className="text-end">Price</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {apartments.map((a, i) => (
            <tr key={a.id ?? i}>
              <td>{a.id ?? i + 1}</td>
              <td>{a.unit_name}</td>
              <td>{a.unit_number}</td>
              <td>{a.project}</td>
              <td>{a.city}</td>
              <td className="text-end">${Number(a.price).toLocaleString()}</td>
              <td className="text-center">                
                <Link
                  href={`/apartments/${a.id}`}
                  className="btn btn-sm btn-primary"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
