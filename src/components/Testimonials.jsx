import { motion } from "framer-motion";

export default function Testimonials({ testimonials }) {
  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-grid">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            className="testimonial-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <img src={t.photo} alt={t.name} />
            <div className="stars">{"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}</div>
            <p>"{t.message}"</p>
            <h5>{t.name}</h5>
          </motion.div>
        ))}
      </div>
    </section>
  );
}