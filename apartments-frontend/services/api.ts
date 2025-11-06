// src/services/api.ts
import { Apartment } from '@/interfaces/Apartment';

const BASE = process.env.NEXT_PUBLIC_API_URL;

type Filters = {
  search?: string;
  city?: string;
  minPrice?: number | string;
  maxPrice?: number | string;
};

export async function fetchApartments(filters?: Filters): Promise<Apartment[]> {
  const params = new URLSearchParams();
  if (filters) {
    if (filters.search) params.append('search', String(filters.search));
    if (filters.city) params.append('city', String(filters.city));
    if (filters.minPrice !== undefined && filters.minPrice !== '') params.append('minPrice', String(filters.minPrice));
    if (filters.maxPrice !== undefined && filters.maxPrice !== '') params.append('maxPrice', String(filters.maxPrice));
  }

  const url = params.toString() ? `${BASE}/apartments?${params.toString()}` : `${BASE}/apartments`;

  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) throw new Error(`Failed to fetch apartments (${res.status})`);
  return res.json();
}

export async function fetchApartmentById(id: number): Promise<Apartment> {
  const res = await fetch(`${BASE}/apartments/${id}`, { cache: 'no-store' });
  if (!res.ok) throw new Error(`Failed to fetch apartment (${res.status})`);
  return res.json();
}

export async function createApartment(data: Partial<Apartment>): Promise<Apartment> {
  const res = await fetch(`${BASE}/apartments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const txt = await res.text().catch(() => '');
    throw new Error(`Failed to create apartment: ${res.status} ${txt}`);
  }
  return res.json();
}
