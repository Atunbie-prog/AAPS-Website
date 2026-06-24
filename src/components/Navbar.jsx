import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, Phone, ShieldCheck } from 'lucide-react'
import { nav, practice } from '../data/content.js'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="navbar__inner">

        {/* ── Brand lockup: logo image + full business name inline ── */}
        <Link to="/" className="navbar__brand" onClick={() => setOpen(false)}>
          <img
            src="/aaps-logo.jpeg.png"
            alt="Atunbi Associates Professional Services logo"
            className="navbar__logo"
            width="48"
            height="48"
            loading="eager"
          />
          <span className="navbar__brand-text">
            <span className="navbar__name">{practice.name}</span>
            <span className="navbar__tagline">{practice.tagline}</span>
          </span>
        </Link>

        <nav className={`navbar__links ${open ? 'is-open' : ''}`} aria-label="Primary">
          {nav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `navbar__link ${isActive ? 'is-active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}

          <div className="navbar__mobile-extra">
            <div className="seal">
              <span className="seal__icon"><ShieldCheck size={14} /></span>
              <span className="seal__text">
                <span className="seal__label">CAC Accredited Agent</span>
                <span className="seal__value">{practice.accreditationNo}</span>
              </span>
            </div>
          </div>

          <Link to="/contact" className="btn btn--gold navbar__cta" onClick={() => setOpen(false)}>
            <Phone size={16} /> Call Now
          </Link>
        </nav>

        <button
          className={`navbar__toggle ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  )
}
