import { useState, useEffect } from "react";
import { fetchDatabase } from "../services/api";

// Single fetch on mount; all filtering/sorting/lookup happens client-side afterward.
export default function useVehicles() {
  const [vehicles, setVehicles] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    fetchDatabase()
      .then((data) => {
        if (!mounted) return;
        setVehicles(data.vehicles || []);
        setTestimonials(data.testimonials || []);
      })
      .catch((err) => mounted && setError(err.message))
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  return { vehicles, testimonials, loading, error };
}