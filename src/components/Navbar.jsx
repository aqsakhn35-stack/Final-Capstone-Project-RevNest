import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useFavorites } from "../context/FavoritesContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { favorites } = useFavorites();

  const linkClass = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");

  return (
    <nav className="navbar">
      <Link to="/" className="brand">RevNest</Link>
      <div className="nav-links">
        <NavLink to="/" className={linkClass} end>Home</NavLink>
        <NavLink to="/cars" className={linkClass}>Cars</NavLink>
        <NavLink to="/antiques" className={linkClass}>Antiques</NavLink>
        <NavLink to="/favorites" className={linkClass}>
          Favorites {favorites.length > 0 && <span className="badge">{favorites.length}</span>}
        </NavLink>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
}