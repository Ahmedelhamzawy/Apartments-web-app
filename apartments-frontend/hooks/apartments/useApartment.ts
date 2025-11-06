import { fetchApartmentById } from '@/services/api';
import { useState, useEffect } from 'react';
import { Apartment } from '@/interfaces/Apartment';

//custom hook to fetch apartment by id
export default function useApartment(id: number) {
  const [apt, setApt] = useState<Apartment | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getApartment() {
      try {
        const data = await fetchApartmentById(id);
        setApt(data);
      } catch (err: any) {
        console.error('fetchApartmentById error', err);
        setError('Failed to load apartment');
      } finally {
        setLoading(false);
      }
    }

    getApartment();
  }, [id]);

  return { apt, loading, error };
}
