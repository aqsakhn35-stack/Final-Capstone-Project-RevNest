import { useMemo, useState } from "react";
import CarCard from "../components/CarCard";
import SearchFilters from "../components/SearchFilters";
import useVehicles from "../hooks/useVehicles";

export default function CarListings() {
  const { vehicles, loading } = useVehicles();
  const [filters, setFilters] = useState({ search: "", make: "", bodyType: "", maxPrice: "", sort: "" });

  const makes = useMemo(() => [...new Set(vehicles.map((v) => v.make))], [vehicles]);
  const bodyTypes = useMemo(() => [...new Set(vehicles.map((v) => v.bodyType))], [vehicles]);

  const filtered = useMemo(() => {
    let result = vehicles.filter((v) => !v.rarity); // exclude antiques from main listing
    if (filters.search) {
      result = result.filter((v) => v.model.toLowerCase().includes(filters.search.toLowerCase()));
    }
    if (filters.make) result = result.filter((v) => v.make === filters.make);
    if (filters.bodyType) result = result.filter((v) => v.bodyType === filters.bodyType);
    if (filters.maxPrice) result = result.filter((v) => v.price <= Number(filters.maxPrice));

    if (filters.sort === "price_asc") result.sort((a, b) => a.price - b.price);
    if (filters.sort === "price_desc") result.sort((a, b) => b.price - a.price);
    if (filters.sort === "year_asc") result.sort((a, b) => a.year - b.year);
    if (filters.sort === "year_desc") result.sort((a, b) => b.year - a.year);

    return result;
  }, [vehicles, filters]);

  return (
    <div className="car-listings">
      <h1>Browse Cars</h1>
      <SearchFilters filters={filters} setFilters={setFilters} makes={makes} bodyTypes={bodyTypes} />
      {loading ? (
        <p>Loading...</p>
      ) : filtered.length === 0 ? (
        <p>No vehicles match your filters.</p>
      ) : (
        <div className="car-grid">
          {filtered.map((car) => <CarCard key={car.id} car={car} />)}
        </div>
      )}
    </div>
  );
}