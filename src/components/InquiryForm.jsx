import { useState } from "react";

export default function InquiryForm({ carName }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Valid email required";
    if (!/^\d{7,15}$/.test(form.phone.replace(/[\s-]/g, ""))) e.phone = "Valid phone required";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const eObj = validate();
    setErrors(eObj);
    if (Object.keys(eObj).length === 0) {
      const inquiries = JSON.parse(localStorage.getItem("revnest_inquiries") || "[]");
      inquiries.push({ ...form, carName, date: new Date().toISOString() });
      localStorage.setItem("revnest_inquiries", JSON.stringify(inquiries));
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    }
  };

  if (submitted) return <p className="success-msg">Thanks! Your inquiry about {carName} has been received.</p>;

  return (
    <form className="inquiry-form" onSubmit={handleSubmit}>
      <h4>Inquire About This Vehicle</h4>
      <input placeholder="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      {errors.name && <span className="field-error">{errors.name}</span>}
      <input placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
      {errors.email && <span className="field-error">{errors.email}</span>}
      <input placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
      {errors.phone && <span className="field-error">{errors.phone}</span>}
      <textarea placeholder="Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
      <button type="submit">Send Inquiry</button>
    </form>
  );
}