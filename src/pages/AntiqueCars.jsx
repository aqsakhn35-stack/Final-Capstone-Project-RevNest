import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import useVehicles from "../hooks/useVehicles";
import { useFavorites } from "../context/FavoritesContext";
import CarImage from "../components/CarImage";

export default function AntiqueCars() {
  const { vehicles, loading } = useVehicles();
  const { isFavorite, toggleFavorite } = useFavorites();
  const [search, setSearch] = useState("");

  const antiques = useMemo(() => {
    return vehicles
      .filter((v) => v.rarity)
      .filter((v) => v.model.toLowerCase().includes(search.toLowerCase()));
  }, [vehicles, search]);

  return (
    <div className="antique-page">
      <h1>Classic & Vintage Collection</h1>
      <input
        type="text"
        placeholder="Search antique cars..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="antique-grid">
          {antiques.map((car, i) => (
            <motion.div
              key={car.id}
              className="antique-card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link to={`/cars/${car.id}`}>
                <CarImage car={car} />
              </Link>
              <h3>{car.year} {car.make} {car.model}</h3>
              <p>Rarity: <strong>{car.rarity}</strong></p>
              <p>Collector Value: PKR {car.collectorValue.toLocaleString()}</p>
              <button onClick={() => toggleFavorite(car.id)}>
                {isFavorite(car.id) ? "❤️ Saved" : "🤍 Save"}
              </button>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}