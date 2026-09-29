import CarCard from "../components/CarCard";
import useVehicles from "../hooks/useVehicles";
import { useFavorites } from "../context/FavoritesContext";

export default function Favorites() {
  const { vehicles, loading } = useVehicles();
  const { favorites } = useFavorites();

  const favVehicles = vehicles.filter((v) => favorites.includes(v.id));

  return (
    <div className="favorites-page">
      <h1>Your Favorites</h1>
      {loading ? (
        <p>Loading...</p>
      ) : favVehicles.length === 0 ? (
        <p>You haven't saved any vehicles yet.</p>
      ) : (
        <div className="car-grid">
          {favVehicles.map((car) => <CarCard key={car.id} car={car} />)}
        </div>
      )}
    </div>
  );
}