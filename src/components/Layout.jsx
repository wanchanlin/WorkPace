import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <header className="header">
        <nav className="nav">
          <Link to="/">Home</Link>
          {/* <Link to="/positions">Position List</Link>
          <Link to="/addPosition">Add Position</Link> */}
          
          <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            Toggle {theme === "light" ? "Dark" : "Light"}
          </button>
          {/* <a href="/user/login">Login</a> */}
          <Link to="Login">Login</Link>
          <Link to="Info">Info</Link>

          
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