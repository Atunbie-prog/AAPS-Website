import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Clock, Tag } from 'lucide-react'
import PageMeta from '../components/PageMeta.jsx'
import { blogPosts, practice } from '../data/content.js'
import { articleSchema, breadcrumbSchema } from '../data/seo.js'
import './BlogPost.css'

// Official WhatsApp share glyph
function ShareWAIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="18" height="18" aria-hidden="true">
      <path fill="currentColor" d="M4.868 43.303l2.694-9.835a18.863 18.863 0 01-2.524-9.469C5.041 13.192 13.717 4.516 24.524 4.516a18.809 18.809 0 0113.327 5.524 18.809 18.809 0 015.517 13.331c-.004 10.409-8.68 18.785-19.05 18.785a18.898 18.898 0 01-9.063-2.312L4.868 43.303zm10.565-6.108l.576.342a15.67 15.67 0 008.004 2.189h.006c8.681 0 15.744-7.063 15.748-15.745a15.69 15.69 0 00-4.616-11.149 15.674 15.674 0 00-11.136-4.622c-8.688 0-15.751 7.063-15.754 15.745a15.7 15.7 0 002.412 8.378l.375.597-1.595 5.821 5.98-1.556z"/>
    </svg>
  )
}

function renderBlock(block, idx) {
  switch (block.type) {
    case 'intro':
      return <p key={idx} className="article__intro">{block.text}</p>
    case 'heading':
      return <h2 key={idx} className="article__heading">{block.text}</h2>
    case 'paragraph':
      return <p key={idx} className="article__paragraph">{block.text}</p>
    case 'callout':
      return (
        <aside key={idx} className="article__callout" role="note">
          <span className="article__callout-icon" aria-hidden="true">◆</span>
          <p>{block.text}</p>
        </aside>
      )
    case 'closing':
      return <p key={idx} className="article__closing">{block.text}</p>
    default:
      return <p key={idx}>{block.text}</p>
  }
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <section className="section section--card">
        <div className="container">
          <PageMeta title="Article Not Found" description="This article may have been moved or unpublished." noindex />
          <h1 className="section-heading">Article not found</h1>
          <p className="section-sub">This article may have been moved or unpublished.</p>
          <Link to="/blog" className="btn btn--green" style={{ marginTop: '1.5rem' }}>
            <ArrowLeft size={16} /> Back to Blog
          </Link>
        </div>
      </section>
    )
  }

  const shareText = encodeURIComponent(post.title)
  const shareUrl = encodeURIComponent(`https://${practice.domain}/blog/${post.slug}`)

  return (
    <>
      <PageMeta
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        keywords={`${post.category}, ${post.title}`}
        type="article"
        jsonLd={[
          articleSchema(post),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />

      <section className="article-hero">
        <div className="container">
          <div className="article-hero__meta">
            <span className="article-hero__category">
              <Tag size={12} aria-hidden="true" /> {post.category}
            </span>
            <span className="article-hero__read-time">
              <Clock size={12} aria-hidden="true" /> {post.readTime}
            </span>
          </div>
          <h1 className="article-hero__title">{post.title}</h1>
          <p className="article-hero__date">
            {new Date(post.date).toLocaleDateString('en-GB', {
              day: 'numeric', month: 'long', year: 'numeric',
            })}
          </p>
        </div>
      </section>

      <section className="section section--card">
        <div className="container">
          <article className="article">
            {post.body.map((block, idx) => renderBlock(block, idx))}

            <div className="article__share">
              <span>Share this article</span>
              <a href={"https://www.linkedin.com/sharing/share-offsite/?url=" + shareUrl} target="_blank" rel="noreferrer" aria-label="Share on LinkedIn" className="article__share-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16" height="16" fill="currentColor" aria-hidden="true">
                  <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340a53.82 53.82 0 1 1 53.82-53.82A53.82 53.82 0 0 1 53.84 108zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
                </svg>
              </a>
              <a href={"https://www.facebook.com/sharer/sharer.php?u=" + shareUrl} target="_blank" rel="noreferrer" aria-label="Share on Facebook" className="article__share-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="16" height="16" fill="currentColor" aria-hidden="true">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S256.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                </svg>
              </a>
              <a href={"https://wa.me/?text=" + shareText + "%20" + shareUrl} target="_blank" rel="noreferrer" aria-label="Share on WhatsApp" className="article__share-link">
                <ShareWAIcon />
              </a>
            </div>

            <Link to="/blog" className="btn btn--ghost-green" style={{ marginTop: '2rem', display: 'inline-flex' }}>
              <ArrowLeft size={15} /> Back to Blog
            </Link>
          </article>
        </div>
      </section>
    </>
  )
}