import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-logo">
          <img src="/assets/images/logo.jpeg" alt="CCF-TAMBA" />
          <div className="navbar-logo-text">
            <span className="main">CCF-TAMBA</span>
            <span className="sub">Comité Consultatif des Femmes</span>
          </div>
        </Link>
        <button className="navbar-toggle" onClick={() => setOpen(!open)}>
          {open ? '✕' : '☰'}
        </button>
        <ul className={`navbar-links ${open ? 'open' : ''}`}>
          <li><NavLink to="/" onClick={() => setOpen(false)}>Accueil</NavLink></li>
          <li><NavLink to="/about" onClick={() => setOpen(false)}>Notre Organisation</NavLink></li>
          <li><NavLink to="/activities" onClick={() => setOpen(false)}>Activités</NavLink></li>
          <li><NavLink to="/news" onClick={() => setOpen(false)}>Actualités</NavLink></li>
          <li><NavLink to="/gallery" onClick={() => setOpen(false)}>Galerie</NavLink></li>
          <li><Link to="/contact" className="btn btn-primary" onClick={() => setOpen(false)}>Adhérer</Link></li>
        </ul>
      </div>
    </nav>
  )
}
