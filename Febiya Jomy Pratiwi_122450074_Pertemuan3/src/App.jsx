import { BookProvider } from "./context/BookContext";
import Home from "./pages/Home/Home";
import Stats from "./pages/Stats/Stats";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { useLocation } from "react-router-dom";


function App() {
  const location = useLocation();

  return (
    <BookProvider>
      <div className="app-container">
        <nav className="navbar">
          <h1 className="app-title">Manajemen Buku Pribadi</h1>
          <div className="nav-links">
            <Link
              to="/"
              className={`nav-link ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/stats"
              className={`nav-link ${
                location.pathname === "/stats" ? "active" : ""
              }`}
            >
              Statistik
            </Link>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stats" element={<Stats />} />
          </Routes>
        </main>
      </div>
    </BookProvider>
  );
}

export default App;
