import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import useVehicles from "../hooks/useVehicles";
import EMICalculator from "../components/EMICalculator";
import InquiryForm from "../components/InquiryForm";
import ReviewForm from "../components/ReviewForm";
import CarImage from "../components/CarImage";
import useLocalStorage from "../hooks/useLocalStorage";

export default function CarDetail() {
  const { id } = useParams();
  const { vehicles, loading } = useVehicles();
  const car = vehicles.find((v) => String(v.id) === id);
  const [activeImg, setActiveImg] = useState(0);

  const [extraReviews, setExtraReviews] = useLocalStorage(`revnest_reviews_${id}`, []);

  const allReviews = useMemo(
    () => [...(car?.reviews || []), ...extraReviews],
    [car, extraReviews]
  );

  const avgRating = useMemo(() => {
    if (allReviews.length === 0) return 0;
    return (allReviews.reduce((s, r) => s + r.rating, 0) / allReviews.length).toFixed(1);
  }, [allReviews]);

  if (loading) return <p>Loading...</p>;
  if (!car) return <p>Vehicle not found. <Link to="/cars">Back to listings</Link></p>;

  const views = [0, 1];

  return (
    <div className="car-detail">
      <div className="gallery">
        <div className="main-img">
          <CarImage car={car} variant={activeImg} />
        </div>
        <div className="thumbs">
          {views.map((v) => (
            <button
              key={v}
              type="button"
              className={v === activeImg ? "thumb active" : "thumb"}
              onClick={() => setActiveImg(v)}
              aria-label={`Show image ${v + 1}`}
            >
              <CarImage car={car} variant={v} />
            </button>
          ))}
        </div>
      </div>

      <div className="detail-info">
        <h1>{car.year} {car.make} {car.model}</h1>
        <p className="price">PKR {car.price.toLocaleString()}</p>
        {car.rarity && <p>Rarity: {car.rarity} · Collector Value: PKR {car.collectorValue.toLocaleString()}</p>}

        <h3>Specifications</h3>
        <ul className="specs-list">
          {Object.entries(car.specs).map(([key, val]) => (
            <li key={key}><strong>{key}:</strong> {val}</li>
          ))}
        </ul>

        <p>Average Rating: {avgRating} ★ ({allReviews.length} reviews)</p>
      </div>

      <div className="detail-columns">
        <EMICalculator price={car.price} />
        <InquiryForm carName={`${car.make} ${car.model}`} />
      </div>

      <div className="reviews-section">
        <h3>Customer Reviews</h3>
        {allReviews.map((r) => (
          <div key={r.id} className="review-item">
            <strong>{r.user}</strong> — {"★".repeat(r.rating)}
            <p>{r.comment}</p>
          </div>
        ))}
        <ReviewForm onSubmit={(review) => setExtraReviews((prev) => [...prev, review])} />
      </div>
    </div>
  );
}