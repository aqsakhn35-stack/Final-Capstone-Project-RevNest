import { useState } from "react";

export default function ReviewForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) {
      setError("Please fill in your name and comment.");
      return;
    }
    onSubmit({ id: Date.now(), user: name.trim(), rating: Number(rating), comment: comment.trim() });
    setName("");
    setComment("");
    setRating(5);
    setError("");
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <h4>Leave a Review</h4>
      {error && <p className="form-error">{error}</p>}
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select value={rating} onChange={(e) => setRating(e.target.value)}>
        {[5, 4, 3, 2, 1].map((r) => <option key={r} value={r}>{r} Stars</option>)}
      </select>
      <textarea
        placeholder="Your comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit">Submit Review</button>
    </form>
  );
}