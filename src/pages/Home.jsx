import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CarCard from "../components/CarCard";
import Testimonials from "../components/Testimonials";
import useVehicles from "../hooks/useVehicles";

export default function Home() {
  const { vehicles, testimonials, loading } = useVehicles();
  const featured = vehicles.slice(0, 4);

  return (
    <div className="home">
      <motion.section
        className="hero"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Find Your Perfect Ride with RevNest</h1>
        <p>Modern cars. Classic legends. All in one marketplace.</p>
        <Link to="/cars" className="cta-btn">Browse Vehicles</Link>
      </motion.section>

      <section className="featured">
        <h2>Featured Vehicles</h2>
        {loading ? (
          <p>Loading vehicles...</p>
        ) : (
          <div className="car-grid">
            {featured.map((car) => <CarCard key={car.id} car={car} />)}
          </div>
        )}
      </section>

      {!loading && <Testimonials testimonials={testimonials} />}
    </div>
  );
}