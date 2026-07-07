import { useEffect } from 'react'
import { SITE_URL, canonicalUrl } from '../data/seo.js'

const SITE_NAME = 'Atunbi Associates Professional Services'
const DEFAULT_IMAGE = `${SITE_URL}/aaps-logo.jpeg.png`

function setMetaByName(name, content) {
  if (!content) return
  let tag = document.querySelector(`meta[name="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function setMetaByProperty(property, content) {
  if (!content) return
  let tag = document.querySelector(`meta[property="${property}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('property', property)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function setCanonical(href) {
  let tag = document.querySelector('link[rel="canonical"]')
  if (!tag) {
    tag = document.createElement('link')
    tag.setAttribute('rel', 'canonical')
    document.head.appendChild(tag)
  }
  tag.setAttribute('href', href)
}

/**
 * Per-page SEO handler. Sets document.title, meta description/keywords,
 * canonical link, Open Graph + Twitter Card tags, and (optionally) one or
 * more JSON-LD structured data blocks.
 *
 * NOTE: this app is a client-rendered SPA (Vite + React, no SSR/prerender).
 * Tags set here only exist after JavaScript runs, so they're picked up by
 * Googlebot (which renders JS) but NOT by crawlers that don't execute JS —
 * e.g. WhatsApp, Facebook, LinkedIn, Twitter/X link-preview bots. Those will
 * always see the defaults baked into index.html. For fully accurate
 * per-page social previews, add a prerendering or SSR step at build time.
 */
export default function PageMeta({
  title,
  description,
  path = '/',
  keywords,
  image = DEFAULT_IMAGE,
  type = 'website',
  noindex = false,
  jsonLd, // object or array of objects
}) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME
    document.title = fullTitle

    const url = canonicalUrl(path)

    setMetaByName('description', description)
    setMetaByName('keywords', keywords)
    setMetaByName('robots', noindex ? 'noindex, nofollow' : 'index, follow')
    setCanonical(url)

    setMetaByProperty('og:type', type)
    setMetaByProperty('og:site_name', SITE_NAME)
    setMetaByProperty('og:title', fullTitle)
    setMetaByProperty('og:description', description)
    setMetaByProperty('og:url', url)
    setMetaByProperty('og:image', image)
    setMetaByProperty('og:locale', 'en_NG')

    setMetaByName('twitter:card', 'summary')
    setMetaByName('twitter:title', fullTitle)
    setMetaByName('twitter:description', description)
    setMetaByName('twitter:image', image)

    document.querySelectorAll('script[data-page-jsonld]').forEach((el) => el.remove())

    if (jsonLd) {
      const blocks = Array.isArray(jsonLd) ? jsonLd : [jsonLd]
      blocks.forEach((schema) => {
        const script = document.createElement('script')
        script.type = 'application/ld+json'
        script.setAttribute('data-page-jsonld', 'true')
        script.textContent = JSON.stringify(schema)
        document.head.appendChild(script)
      })
    }

    return () => {
      document.querySelectorAll('script[data-page-jsonld]').forEach((el) => el.remove())
    }
  }, [title, description, path, keywords, image, type, noindex, jsonLd])

  return null
}