import axios from "axios";

// db.json is served statically from the public/ folder.
// This works identically in local dev and after deployment (Vercel) — no port or base URL needed.
export const fetchDatabase = async () => {
  const response = await axios.get("/db.json");
  return response.data; // { vehicles: [...], testimonials: [...] }
};