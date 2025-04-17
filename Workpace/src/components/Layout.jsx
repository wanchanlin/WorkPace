import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleLinkClick = () => setMenuOpen(false); // Close on click

  return (
    <>
      <header className="header">
        <nav className="nav">
          <div className="logo">
            <Link to="/" onClick={handleLinkClick}>Work-Pace</Link>
          </div>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>

          <div className={`nav-links ${menuOpen ? "show" : ""}`}>
            <Link to="/" onClick={handleLinkClick}>Home</Link>
            {/* <Link to="Login" onClick={handleLinkClick}>Login</Link> */}
            <Link to="Info" onClick={handleLinkClick}>Info</Link>
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="theme-toggle"
            >
              Toggle {theme === "light" ? "Dark" : "Light"}
            </button>
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <p>© 2025 HR Management System</p>
      </footer>
    </>
  );
}
