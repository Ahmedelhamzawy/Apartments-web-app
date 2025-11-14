import { useEffect, useState } from "react";
import useDebounce from "@/shared/hooks/useDebounce";
import { fetchApartments } from "../services/apartmentService";
import { Apartment } from "@/interfaces/Apartment";

type PaginationInfo = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
};

//custom hook to fetch apartments with filters, pagination and debouncing
export default function useApartments(filters: any) {
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [pagination, setPagination] = useState<PaginationInfo | null>(null);
  const [loading, setLoading] = useState(false);

  const debouncedFilters = useDebounce(filters, 500);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const appliedFilters = Object.fromEntries(
          Object.entries(debouncedFilters).filter(([_, v]) => v !== '' && v !== undefined)
        );
        const data = await fetchApartments(appliedFilters);
        setApartments(data.apartments);
        setPagination(data.pagination);
      } finally {
        setLoading(false);
      }
    };
    void fetchData();
  }, [debouncedFilters]);

  return { apartments, pagination, loading };
}