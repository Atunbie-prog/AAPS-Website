// Central SEO helpers — canonical URL builder + reusable JSON-LD schema
// builders. Import what you need in each page and pass the result to
// <PageMeta canonical=... jsonLd=... />.

import { practice, services, howWeWork, blogPosts } from './content.js'

export const SITE_URL = `https://${practice.domain}`

const DEFAULT_IMAGE = `${SITE_URL}/aaps-logo.jpeg.png`

/** Build an absolute canonical URL from a route path, e.g. "/services" */
export function canonicalUrl(path = '/') {
  if (!path || path === '/') return `${SITE_URL}/`
  const clean = (path.startsWith('/') ? path : `/${path}`).replace(/\/+$/, '')
  return `${SITE_URL}${clean}`
}

/** Organization / ProfessionalService schema — used on Home + About */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: practice.name,
    alternateName: practice.shortName,
    description:
      'CAC accredited agency and financial management practice serving businesses, NGOs, churches, cooperatives, and associations across Nigeria.',
    url: `${SITE_URL}/`,
    logo: DEFAULT_IMAGE,
    image: DEFAULT_IMAGE,
    telephone: practice.phone?.[0],
    email: practice.email,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: practice.address,
      addressLocality: 'Lagos',
      addressCountry: 'NG',
    },
    areaServed: 'NG',
    founder: {
      '@type': 'Person',
      name: practice.principal.split(' — ')[0],
      honorificSuffix: 'FCA',
      description: practice.principal,
    },
  }
}

/** BreadcrumbList schema — pass an array of { name, path } */
export function breadcrumbSchema(crumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: canonicalUrl(c.path),
    })),
  }
}

/** Service catalog schema — used on the Services page */
export function servicesSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Corporate Compliance & Financial Management',
    provider: { '@type': 'ProfessionalService', name: practice.name, url: `${SITE_URL}/` },
    areaServed: 'NG',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Compliance & Financial Management Services',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.title,
          description: s.intro,
        },
      })),
    },
  }
}

/** HowTo schema — used on the How We Work page */
export function howWeWorkSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How We Work — Atunbi Associates Professional Services',
    description: 'A clear, step-by-step process from enquiry to ongoing compliance support.',
    step: howWeWork.map((s) => ({
      '@type': 'HowToStep',
      position: s.step,
      name: s.title,
      text: s.desc,
    })),
  }
}

/** Article schema — used on individual blog posts */
export function articleSchema(post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: practice.principal.split(' — ')[0],
    },
    publisher: {
      '@type': 'Organization',
      name: practice.name,
      logo: { '@type': 'ImageObject', url: DEFAULT_IMAGE },
    },
    mainEntityOfPage: canonicalUrl(`/blog/${post.slug}`),
    articleSection: post.category,
  }
}

/** Blog listing schema */
export function blogListSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'AAPS Blog & Resources',
    url: canonicalUrl('/blog'),
    blogPost: blogPosts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      url: canonicalUrl(`/blog/${p.slug}`),
      datePublished: p.date,
    })),
  }
}

/** ContactPage schema */
export function contactSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Atunbi Associates Professional Services',
    url: canonicalUrl('/contact'),
    about: { '@type': 'ProfessionalService', name: practice.name },
  }
}