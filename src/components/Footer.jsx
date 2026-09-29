export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-col">
        <h4>RevNest</h4>
        <p>Your trusted marketplace for modern and classic vehicles.</p>
      </div>
      <div className="footer-col">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/cars">Browse Cars</a></li>
          <li><a href="/antiques">Antique Cars</a></li>
          <li><a href="/favorites">Favorites</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Contact</h4>
        <p>support@revnest.com</p>
        <p>+92 300 1234567</p>
      </div>
      <div className="footer-col">
        <h4>Follow Us</h4>
        <div className="socials">
          <a href="#" aria-label="Facebook">FB</a>
          <a href="#" aria-label="Instagram">IG</a>
          <a href="#" aria-label="Twitter">TW</a>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} RevNest. All rights reserved.
      </div>
    </footer>
  );
}