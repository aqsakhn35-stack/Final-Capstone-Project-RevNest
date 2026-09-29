import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CarListings from "./pages/CarListings";
import CarDetail from "./pages/CarDetail";
import Favorites from "./pages/Favorites";
import AntiqueCars from "./pages/AntiqueCars";
import "./index.css";

export default function App() {
  return (
    <ThemeProvider>
      <FavoritesProvider>
        <BrowserRouter>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cars" element={<CarListings />} />
              <Route path="/cars/:id" element={<CarDetail />} />
              <Route path="/antiques" element={<AntiqueCars />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </FavoritesProvider>
    </ThemeProvider>
  );
}