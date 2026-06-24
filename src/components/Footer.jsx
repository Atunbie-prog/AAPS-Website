import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { practice, nav, services } from '../data/content.js'
import './Footer.css'

const WA_HREF = 'https://wa.me/2349160099977?text=Hello,%20I%20would%20like%20to%20make%20an%20enquiry%20regarding%20Atunbi%20Associates.'

/* ── Official brand SVG glyphs ─────────────────────── */
function WhatsAppGlyph() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="18" height="18" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M4.868 43.303l2.694-9.835a18.863 18.863 0 01-2.524-9.469C5.041 13.192 13.717 4.516 24.524 4.516a18.809 18.809 0 0113.327 5.524 18.809 18.809 0 015.517 13.331c-.004 10.409-8.68 18.785-19.05 18.785a18.898 18.898 0 01-9.063-2.312L4.868 43.303zm10.565-6.108l.576.342a15.67 15.67 0 008.004 2.189h.006c8.681 0 15.744-7.063 15.748-15.745a15.69 15.69 0 00-4.616-11.149 15.674 15.674 0 00-11.136-4.622c-8.688 0-15.751 7.063-15.754 15.745a15.7 15.7 0 002.412 8.378l.375.597-1.595 5.821 5.98-1.556zm17.32-9.043c-.119-.198-.435-.317-.912-.554s-2.817-1.39-3.252-1.549c-.435-.158-.751-.237-1.067.238-.316.475-1.225 1.548-1.502 1.865-.277.317-.554.357-1.03.119-.477-.238-2.014-.742-3.836-2.368-1.417-1.265-2.375-2.828-2.652-3.304-.277-.475-.03-.733.208-.97.213-.212.477-.554.715-.831.237-.277.316-.475.474-.792.158-.317.079-.594-.04-.831-.12-.238-1.052-2.584-1.48-3.505-.355-.79-.728-.806-1.067-.82-.277-.012-.594-.011-.912-.011a1.748 1.748 0 00-1.267.594c-.435.476-1.661 1.622-1.661 3.956s1.7 4.59 1.937 4.908c.237.318 3.291 5.255 8.106 7.139 4.007 1.58 4.816 1.266 5.68 1.187.864-.079 2.787-1.139 3.18-2.239.391-1.1.391-2.042.274-2.239z"/>
    </svg>
  )
}
function LinkedInGlyph() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16" height="16" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340a53.82 53.82 0 1 1 53.82-53.82A53.82 53.82 0 0 1 53.84 108zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
    </svg>
  )
}
function FacebookGlyph() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="16" height="16" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S256.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
    </svg>
  )
}
function InstagramGlyph() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16" height="16" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
    </svg>
  )
}

export default function Footer() {
  const phones = Array.isArray(practice.phone)
    ? practice.phone
    : [practice.phone].filter(Boolean)

  return (
    <footer className="footer">

      {/* ═══ Main grid ═══════════════════════════════════════════ */}
      <div className="footer__body">
        <div className="footer__grid">

          {/* ── Col 1: Brand ─────────────────────────────────────── */}
          <div className="footer__col">
            <Link to="/" className="footer__brand-link">
              <img
                src="/aaps-logo.jpeg.png"
                alt="AAPS logo"
                className="footer__logo"
                width="52"
                height="52"
                loading="lazy"
              />
              <span className="footer__brand-name">{practice.name}</span>
            </Link>

            <p className="footer__tagline">{practice.tagline}</p>

            <span className="footer__badge">
              <span className="footer__badge-dot" aria-hidden="true" />
              CAC Accredited Agent: {practice.accreditationNo}
            </span>

            <p className="footer__blurb">
              End-to-end compliance and financial management for businesses,
              NGOs, churches, cooperatives, and associations across Nigeria.
            </p>

            <div className="footer__social-row">
              <a href={WA_HREF} aria-label="WhatsApp" target="_blank" rel="noreferrer" className="footer__social-btn footer__social-btn--wa">
                <WhatsAppGlyph />
              </a>
              <a href={practice.social.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer" className="footer__social-btn">
                <LinkedInGlyph />
              </a>
              <a href={practice.social.facebook} aria-label="Facebook" target="_blank" rel="noreferrer" className="footer__social-btn">
                <FacebookGlyph />
              </a>
              <a href={practice.social.instagram} aria-label="Instagram" target="_blank" rel="noreferrer" className="footer__social-btn">
                <InstagramGlyph />
              </a>
            </div>
          </div>

          {/* ── Col 2: Quick Links ────────────────────────────────── */}
          <div className="footer__col">
            <h4 className="footer__col-heading">Quick Links</h4>
            <ul className="footer__link-list">
              {nav.map((item) => (
                <li key={item.path}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Services ──────────────────────────────────── */}
          <div className="footer__col">
            <h4 className="footer__col-heading">Our Services</h4>
            <ul className="footer__link-list">
              {services.map((s) => (
                <li key={s.title}>
                  <Link to="/services">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Contact ───────────────────────────────────── */}
          <div className="footer__col">
            <h4 className="footer__col-heading">Contact Us</h4>
            <ul className="footer__contact-list">
              <li>
                <MapPin size={14} strokeWidth={1.75} aria-hidden="true" />
                <span>{practice.address}</span>
              </li>
              {phones.map((p) => (
                <li key={p}>
                  <Phone size={14} strokeWidth={1.75} aria-hidden="true" />
                  <a href={`tel:${p.replace(/\s/g, '')}`}>{p}</a>
                </li>
              ))}
              {practice.email && (
                <li>
                  <Mail size={14} strokeWidth={1.75} aria-hidden="true" />
                  <a href={`mailto:${practice.email}`}>{practice.email}</a>
                </li>
              )}
              <li>
                <Clock size={14} strokeWidth={1.75} aria-hidden="true" />
                <span>
                  {practice.officeHours.map((h, i) => (
                    <span key={i} className="footer__hours-line">{h}</span>
                  ))}
                </span>
              </li>
            </ul>

            <a href={WA_HREF} target="_blank" rel="noreferrer" className="footer__wa-cta">
              <WhatsAppGlyph /> Chat on WhatsApp
            </a>
          </div>

        </div>
      </div>

      {/* ═══ Copyright bar ═══════════════════════════════════════ */}
      <div className="footer__bar">
        <div className="footer__bar-inner">
          <span>&copy; {practice.year} {practice.name}. All rights reserved.</span>
          <span>Reg. No: {practice.accreditationNo}</span>
        </div>
      </div>

    </footer>
  )
}
