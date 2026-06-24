import { GraduationCap, ShieldCheck, Target, Star } from 'lucide-react'
import PageMeta from '../components/PageMeta.jsx'
import Hero from '../components/Hero.jsx'
import { about, practice } from '../data/content.js'
import { heroImages, sectionImages } from '../data/images.js'
import './About.css'

export default function About() {
  return (
    <>
      <PageMeta
        title="About Us"
        description="Learn about Atunbi Associates Professional Services — our story, principal, mission, and values."
      />

      <Hero
        compact
        eyebrow="About Us"
        headline="Who We Are"
        subHeadline="A practice built on accreditation, accountability, and personal attention to every client engagement."
        image={heroImages.about}
      />

      {/* ── Practice Story ── */}
      <section className="section section--card">
        <div className="container">
          <span className="eyebrow reveal">Our Story</span>
          <h2 className="section-heading reveal reveal--delay-1">Practice Story</h2>
          <p className="about-story prose reveal reveal--delay-2">{about.story}</p>
        </div>
      </section>

      {/* ── Principal Profile — no photo, pure credentials ── */}
      <section className="section section--tint">
        <div className="container">
          <span className="eyebrow reveal">Principal Profile</span>
          <div className="principal-card reveal reveal--delay-1">
            <div className="principal-card__header">
              <div className="principal-card__monogram" aria-hidden="true">
                {about.principal.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
              </div>
              <div>
                <h2 className="principal-card__name">{about.principal.name}</h2>
                <p className="principal-card__title">{about.principal.qualifications}</p>
              </div>
            </div>

            <div className="principal-card__divider" aria-hidden="true" />

            <dl className="principal-dl">
              <div className="principal-dl__item">
                <dt><ShieldCheck size={15} aria-hidden="true" /> CAC Accreditation</dt>
                <dd>{about.principal.accreditation}</dd>
              </div>
              <div className="principal-dl__item">
                <dt><Target size={15} aria-hidden="true" /> Specialisation</dt>
                <dd>{about.principal.specialisation}</dd>
              </div>
              <div className="principal-dl__item">
                <dt><Star size={15} aria-hidden="true" /> Practice Focus</dt>
                <dd>
                  Corporate compliance, CAC agency services, bookkeeping and financial
                  management for SMEs, NGOs, cooperatives, churches, and associations.
                </dd>
              </div>
              <div className="principal-dl__item">
                <dt><GraduationCap size={15} aria-hidden="true" /> Professional Body</dt>
                <dd>Fellow of the Institute of Chartered Accountants of Nigeria (ICAN)</dd>
              </div>
            </dl>

            <div className="principal-card__badge-row">
              <span className="principal-badge">FCA — ICAN</span>
              <span className="principal-badge">CAC Accredited Agent</span>
              <span className="principal-badge">ICAN/IND/3408222</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission — image background ── */}
      <section className="mission-section">
        <div className="mission-section__media" aria-hidden="true">
          <img src={sectionImages.mission} alt="" loading="lazy" width="1800" height="900" />
          <div className="mission-section__scrim" />
        </div>
        <div className="container mission-section__inner">
          <span className="eyebrow reveal">Our Mission</span>
          <h2 className="section-heading reveal reveal--delay-1">{about.mission}</h2>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section section--card">
        <div className="container">
          <span className="eyebrow reveal">Our Values</span>
          <h2 className="section-heading reveal reveal--delay-1" style={{ marginBottom: '2.5rem' }}>
            What Guides Our Work
          </h2>
          <div className="values-grid">
            {about.values.map((v, i) => (
              <div className={`value-card reveal reveal--delay-${i + 1}`} key={v.title}>
                <h3 className="value-card__title">{v.title}</h3>
                <p className="value-card__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
