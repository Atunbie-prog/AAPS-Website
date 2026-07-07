import { Link } from 'react-router-dom'
import {
  FileText, CalendarCheck, HeartHandshake, Building2,
  Calculator, Landmark, BadgeCheck, ClipboardList, ArrowRight,
} from 'lucide-react'
import PageMeta from '../components/PageMeta.jsx'
import Hero from '../components/Hero.jsx'
import { services } from '../data/content.js'
import { heroImages } from '../data/images.js'
import { servicesSchema, breadcrumbSchema } from '../data/seo.js'
import './Services.css'

const ICONS = [
  FileText, CalendarCheck, HeartHandshake, Building2,
  Calculator, Landmark, BadgeCheck, ClipboardList,
]

export default function Services() {
  return (
    <>
      <PageMeta
        title="Our Services"
        description="CAC Business Registration, Annual Returns Filing, NGO & Incorporated Trustee Registration, Post-Incorporation Filings, Bookkeeping, BOI Loan Support, TIN/VAT/SMEDAN Registration, and Business Plan Preparation."
        path="/services"
        keywords="CAC business registration, Annual Returns filing Nigeria, NGO registration, bookkeeping services Lagos, BOI loan support, TIN VAT SMEDAN registration, business plan preparation"
        jsonLd={[
          servicesSchema(),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
          ]),
        ]}
      />

      <Hero
        compact
        eyebrow="Our Services"
        headline="Complete Compliance & Financial Support"
        subHeadline="Eight core services covering every stage of your organisation's regulatory and financial journey."
        image={heroImages.services}
      />

      <section className="section section--card">
        <div className="container">
          <div className="services-list">
            {services.map((service, i) => {
              const Icon = ICONS[i]
              return (
                <article className="service-card" key={service.title} id={slugify(service.title)}>
                  <div className="service-card__icon" aria-hidden="true">
                    <Icon size={24} strokeWidth={1.75} />
                  </div>
                  <h2 className="service-card__title">{service.title}</h2>
                  <p className="service-card__intro">{service.intro}</p>
                  <ul className="service-card__points">
                    {service.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn btn--gold btn--sm">
                    Get Started <ArrowRight size={15} />
                  </Link>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}