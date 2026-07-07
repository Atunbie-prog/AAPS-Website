import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import PageMeta from '../components/PageMeta.jsx'
import Hero from '../components/Hero.jsx'
import ContactForm from '../components/ContactForm.jsx'
import { practice } from '../data/content.js'
import { heroImages } from '../data/images.js'
import { contactSchema, breadcrumbSchema } from '../data/seo.js'
import './Contact.css'

const WA_HREF = 'https://wa.me/2349160099977?text=Hello,%20I%20would%20like%20to%20make%20an%20enquiry%20regarding%20Atunbi%20Associates.'

function WhatsAppGlyph() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="18" height="18" aria-hidden="true">
      <path fill="currentColor" d="M4.868 43.303l2.694-9.835a18.863 18.863 0 01-2.524-9.469C5.041 13.192 13.717 4.516 24.524 4.516a18.809 18.809 0 0113.327 5.524 18.809 18.809 0 015.517 13.331c-.004 10.409-8.68 18.785-19.05 18.785a18.898 18.898 0 01-9.063-2.312L4.868 43.303zm10.565-6.108l.576.342a15.67 15.67 0 008.004 2.189h.006c8.681 0 15.744-7.063 15.748-15.745a15.69 15.69 0 00-4.616-11.149 15.674 15.674 0 00-11.136-4.622c-8.688 0-15.751 7.063-15.754 15.745a15.7 15.7 0 002.412 8.378l.375.597-1.595 5.821 5.98-1.556zm17.32-9.043c-.119-.198-.435-.317-.912-.554s-2.817-1.39-3.252-1.549c-.435-.158-.751-.237-1.067.238-.316.475-1.225 1.548-1.502 1.865-.277.317-.554.357-1.03.119-.477-.238-2.014-.742-3.836-2.368-1.417-1.265-2.375-2.828-2.652-3.304-.277-.475-.03-.733.208-.97.213-.212.477-.554.715-.831.237-.277.316-.475.474-.792.158-.317.079-.594-.04-.831-.12-.238-1.052-2.584-1.48-3.505-.355-.79-.728-.806-1.067-.82-.277-.012-.594-.011-.912-.011a1.748 1.748 0 00-1.267.594c-.435.476-1.661 1.622-1.661 3.956s1.7 4.59 1.937 4.908c.237.318 3.291 5.255 8.106 7.139 4.007 1.58 4.816 1.266 5.68 1.187.864-.079 2.787-1.139 3.18-2.239.391-1.1.391-2.042.274-2.239z"/>
    </svg>
  )
}

export default function Contact() {
  const phones = Array.isArray(practice.phone) ? practice.phone : [practice.phone].filter(Boolean)

  return (
    <>
      <PageMeta
        title="Contact Us"
        description="Get in touch with Atunbi Associates Professional Services — phone, WhatsApp, email, or the contact form. We respond within 24 hours."
        path="/contact"
        keywords="contact CAC agent Lagos, Atunbi Associates contact, compliance consultation Nigeria"
        jsonLd={[
          contactSchema(),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Contact Us', path: '/contact' },
          ]),
        ]}
      />

      <Hero
        compact
        eyebrow="Contact Us"
        headline="Let's Talk About What You Need"
        subHeadline="Tell us what you need — we will respond within 24 hours with exactly how we can help."
        image={heroImages.contact}
      />

      <section className="section section--card">
        <div className="container contact-grid">

          <div className="contact-grid__form">
            <h2 className="section-heading" style={{ marginBottom: '1.75rem' }}>Send an Enquiry</h2>
            <ContactForm />
          </div>

          <div className="contact-grid__details">

            <div className="contact-detail-card">
              <span className="contact-detail-card__icon"><MapPin size={18} strokeWidth={1.75} /></span>
              <div>
                <h3>Office Address</h3>
                <p>{practice.address}</p>
              </div>
            </div>

            <div className="contact-detail-card">
              <span className="contact-detail-card__icon"><Phone size={18} strokeWidth={1.75} /></span>
              <div>
                <h3>Phone</h3>
                {phones.map((p) => (
                  <p key={p}>
                    <a href={`tel:${p.replace(/\s/g, '')}`} className="contact-phone-link">{p}</a>
                  </p>
                ))}
              </div>
            </div>

            {practice.email && (
              <div className="contact-detail-card">
                <span className="contact-detail-card__icon"><Mail size={18} strokeWidth={1.75} /></span>
                <div>
                  <h3>Email</h3>
                  <p><a href={`mailto:${practice.email}`} className="contact-phone-link">{practice.email}</a></p>
                </div>
              </div>
            )}

            <div className="contact-detail-card">
              <span className="contact-detail-card__icon"><Clock size={18} strokeWidth={1.75} /></span>
              <div>
                <h3>Office Hours</h3>
                {practice.officeHours.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>

            <a href={WA_HREF} target="_blank" rel="noreferrer" className="contact-wa-btn">
              <WhatsAppGlyph /> Chat on WhatsApp
            </a>

          </div>
        </div>
      </section>
    </>
  )
}