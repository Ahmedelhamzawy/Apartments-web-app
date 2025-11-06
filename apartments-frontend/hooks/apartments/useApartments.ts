import { useEffect, useState } from "react";
import useDebounce from "../useDebounce";
import { fetchApartments } from "@/services/api";
import { Apartment } from "@/interfaces/Apartment";

//custom hook to fetch apartments with filters and debouncing for on type filtering
export default function useApartments(filters: any) {
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [loading, setLoading] = useState(false);

  const debouncedFilters = useDebounce(filters, 500);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const appliedFilters = Object.fromEntries(
          Object.entries(debouncedFilters).filter(([_, v]) => v)
        );
        const data = await fetchApartments(appliedFilters);
        setApartments(data);
      } finally {
        setLoading(false);
      }
    };
    void fetchData();
  }, [debouncedFilters]);

  return { apartments, loading };
}
