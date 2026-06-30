import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Tag } from 'lucide-react'
import PageMeta from '../components/PageMeta.jsx'
import Hero from '../components/Hero.jsx'
import { blogInfo, blogPosts } from '../data/content.js'
import { heroImages } from '../data/images.js'
import './Blog.css'

export default function Blog() {
  return (
    <>
      <PageMeta
        title="ItsKOKOPEE Resources"
        description="Professional compliance guidance on CAC registration, Annual Returns, NGO registration, and financial management in Nigeria."
      />

      <Hero
        compact
        eyebrow="Blog & Resources"
        headline="Compliance Tips & Insights"
        subHeadline="Practical, professional guidance on registration, compliance, and financial management for Nigerian businesses and organisations."
        image={heroImages.blog}
      />

      <section className="section section--card">
        <div className="container">

          {/* Category chips */}
          <div className="blog-categories reveal" aria-label="Categories">
            {blogInfo.categories.map((c) => (
              <span className="blog-categories__chip" key={c}>{c}</span>
            ))}
          </div>

          {/* Article grid */}
          <div className="blog-grid">
            {blogPosts.map((post, i) => (
              <Link
                to={`/blog/${post.slug}`}
                className={`blog-card reveal reveal--delay-${i + 1}`}
                key={post.slug}
              >
                <div className="blog-card__meta">
                  <span className="blog-card__category">
                    <Tag size={11} aria-hidden="true" /> {post.category}
                  </span>
                  <span className="blog-card__read-time">
                    <Clock size={11} aria-hidden="true" /> {post.readTime}
                  </span>
                </div>
                <h2 className="blog-card__title">{post.title}</h2>
                <p className="blog-card__excerpt">{post.excerpt}</p>
                <div className="blog-card__footer">
                  <span className="blog-card__date">
                    {new Date(post.date).toLocaleDateString('en-GB', {
                      day: 'numeric', month: 'long', year: 'numeric',
                    })}
                  </span>
                  <span className="blog-card__cta">
                    Read article <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}
