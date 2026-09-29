import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useFavorites } from "../context/FavoritesContext";
import CarImage from "./CarImage";

export default function CarCard({ car }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const fav = isFavorite(car.id);

  return (
    <motion.div
      className="car-card"
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 250 }}
    >
      <Link to={`/cars/${car.id}`}>
        <CarImage car={car} />
      </Link>
      <button
        className={`fav-btn ${fav ? "active" : ""}`}
        onClick={() => toggleFavorite(car.id)}
        aria-label="Toggle favorite"
        aria-pressed={fav}
      >
        {fav ? "❤️" : "🤍"}
      </button>
      <div className="car-card-body">
        <h3>{car.make} {car.model}</h3>
        <p className="year">{car.year} · {car.bodyType}</p>
        <p className="price">PKR {car.price.toLocaleString()}</p>
        {car.rarity && <span className="rarity-tag">{car.rarity}</span>}
        <Link to={`/cars/${car.id}`} className="details-btn">View Details</Link>
      </div>
    </motion.div>
  );
}