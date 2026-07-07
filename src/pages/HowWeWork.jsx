import PageMeta from '../components/PageMeta.jsx'
import Hero from '../components/Hero.jsx'
import { howWeWork } from '../data/content.js'
import { heroImages } from '../data/images.js'
import { howWeWorkSchema, breadcrumbSchema } from '../data/seo.js'
import './HowWeWork.css'

export default function HowWeWork() {
  return (
    <>
      <PageMeta
        title="How We Work"
        description="A clear, step-by-step process — from enquiry to Engagement Letter to ongoing compliance support. See exactly what happens when you work with Atunbi Associates."
        path="/how-we-work"
        keywords="CAC registration process, compliance service process Nigeria"
        jsonLd={[
          howWeWorkSchema(),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'How We Work', path: '/how-we-work' },
          ]),
        ]}
      />

      <Hero
        compact
        eyebrow="Our Process"
        headline="How We Work"
        subHeadline="Engaging us is straightforward. Here is exactly what happens from your first enquiry to ongoing compliance support."
        image={heroImages.howWeWork}
      />

      <section className="section section--card">
        <div className="container">
          <ol className="step-flow">
            {howWeWork.map((item) => (
              <li className="step-flow__item" key={item.step}>
                <div className="step-flow__number">{String(item.step).padStart(2, '0')}</div>
                <div className="step-flow__content">
                  <h2 className="step-flow__title">{item.title}</h2>
                  <p className="step-flow__desc">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}