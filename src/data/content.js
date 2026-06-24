// All copy below is taken directly from the AAPS Website Content Brief
// (AAPS/WEB/BRIEF/2026/001, v3.0). Do not rewrite — replace bracketed
// placeholders once MD supplies the missing details (Section 13).

export const practice = {
  name: "Atunbi Associates Professional Services",
  shortName: "AAPS",
  tagline: "Your Compliance. Our Commitment.",
  type: "CAC Accredited Agency & Financial Management Practice",
  accreditationNo: "ICAN/IND/3408222",
  principal: "O.D. Atunbi FCA — Fellow, Institute of Chartered Accountants of Nigeria",
  address: "15, Dare Street, Ikotun, Lagos", // Added
  phone: ["+234 916 009 9977", "+234 812 449 9625"], // Added
  whatsapp: "2349160099977", // Added — used for wa.me links (no plus sign)
  email: "", // [MD to insert once domain email is live]
  domain: "atunbiassociates.com",
  officeHours: ["Monday – Friday: 8:00am – 5:00pm", "Saturday: 9:00am – 1:00pm"],
  social: {
    linkedin: "#", // to be created
    facebook: "#",
    instagram: "#",
  },
  year: 2026,
};

export const nav = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "How We Work", path: "/how-we-work" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export const home = {
  hero: {
    headline: "Your Business. Properly Registered. Fully Compliant.",
    subHeadline:
      "Atunbi Associates Professional Services — CAC accredited agency and financial management practice serving businesses, NGOs, churches, cooperatives, and associations across Nigeria.",
    cta1: { label: "Get Started", path: "/contact" },
    cta2: { label: "Our Services", path: "/services" },
  },
  intro:
    "From incorporation to ongoing compliance and financial management, we provide end-to-end professional support at every stage of your organisation's journey. Whether you are registering a new business, filing outstanding Annual Returns, setting up an NGO, accessing BOI funding, or strengthening your financial management — we are here. Reliable, accredited, and personally accountable.",
  whyChooseUs: [
    "CAC Accredited Agent — Accreditation No: ICAN/IND/3408222",
    "Fellow of ICAN — Professional expertise you can trust",
    "End-to-End Support — Registration to long-term compliance",
    "Personal Accountability — Every engagement handled by the principal directly",
    "Prompt and Confidential — Your business matters handled with discretion",
    "Affordable and Practical — Professional service at a price that works for you",
  ],
  complianceBanner:
    "Is your Annual Returns up to date? Penalties accumulate every day. Let us help you regularise today.",
  serviceTiles: [
    {
      title: "CAC Business Registration",
      desc: "Complete registration of Business Names, Limited Companies, and Incorporated Trustees.",
    },
    {
      title: "Annual Returns Filing",
      desc: "Avoid penalties. File all outstanding Annual Returns for any entity type.",
    },
    {
      title: "NGO & Incorporated Trustee Registration",
      desc: "Full registration support for churches, NGOs, foundations, and associations.",
    },
    {
      title: "Post-Incorporation Filings",
      desc: "Change of address, director changes, share transfers, MEMART amendments, and more.",
    },
    {
      title: "Bookkeeping & Financial Management",
      desc: "Outsourced financial management for SMEs, NGOs, cooperatives, and faith organisations.",
    },
    {
      title: "BOI & CBN Loan Application Support",
      desc: "Prepare strong funding applications for Bank of Industry and CBN intervention programmes.",
    },
    {
      title: "TIN, VAT & SMEDAN Registration",
      desc: "Ensure full registration across all key regulatory platforms.",
    },
    {
      title: "Business Plan Preparation",
      desc: "Professional business plans for loan applications, grants, and investor presentations.",
    },
  ],
  closing: {
    heading: "From Registration to Growth — We Stay With Your Business",
    body:
      "Starting a business is only the beginning. Annual compliance, statutory filings, financial management, and funding access all require sustained professional attention. We do not just register your business and disappear. We walk with you from the start — through every compliance obligation, every regulatory requirement, and every growth milestone.",
  },
  ctaSection: {
    heading: "Ready to Get Started?",
    sub: "Contact us today for a free initial discussion. Tell us what you need — we will tell you exactly how we can help.",
    cta1: { label: "Contact Us Now", path: "/contact" },
    cta2: { label: "View Our Services", path: "/services" },
  },
  testimonials: [
    { name: "Client name", quote: "Short testimonial about the service received." },
    { name: "Client name", quote: "Short testimonial about the service received." },
    { name: "Client name", quote: "Short testimonial about the service received." },
  ],
};

export const about = {
  story:
    "Atunbi Associates Professional Services was established in 2026 to provide accessible, professional, and accountable CAC agency and financial management services to Nigerian businesses, NGOs, cooperatives, faith organisations, and associations. We believe that every registered entity deserves professional compliance support — not just large corporations. We serve the small trader, the growing SME, the community association, and the faith organisation with the same professional standard.",
  principal: {
    name: "Atunbi Oyewole Dele",
    qualifications: "Fellow of the Institute of Chartered Accountants of Nigeria (FCA — ICAN)",
    accreditation: "ICAN/IND/3408222",
    experience: "", // [MD to insert years of professional experience]
    specialisation:
      "Corporate compliance, CAC agency services, and financial management for SMEs and non-profit organisations",
  },
  mission:
    "To simplify corporate compliance and financial management for Nigerian businesses and organisations — making professional services accessible, affordable, and accountable.",
  values: [
    { title: "Integrity", desc: "We do what we say we will do. Every time." },
    { title: "Accuracy", desc: "Every filing is treated as if it were our own. No shortcuts." },
    {
      title: "Accessibility",
      desc: "Professional service at a price that works for small and growing organisations.",
    },
    {
      title: "Accountability",
      desc: "The principal is personally responsible for every engagement. You always know who to call.",
    },
  ],
};

export const services = [
  {
    title: "CAC Business Registration",
    intro:
      "Complete registration of Business Names, Limited Liability Companies, and Incorporated Trustees — from name reservation to certificate collection. We manage the entire process on your behalf.",
    points: [
      "Business Names — Sole Proprietor and Partnership",
      "Limited Liability Companies",
      "Incorporated Trustees — NGOs, churches, foundations, and associations",
    ],
  },
  {
    title: "Annual Returns Filing",
    intro:
      "Keep your CAC records clean and avoid escalating penalties. We file Annual Returns for all entity types — including multiple years of outstanding backlog.",
    points: [
      "Business Names",
      "Limited Companies",
      "Incorporated Trustees, NGOs, churches, and associations",
      "Multiple years of backlog — regularise your full compliance history",
    ],
  },
  {
    title: "NGO & Incorporated Trustee Registration",
    intro:
      "We guide faith organisations, charities, foundations, and community associations through the full CAC registration process.",
    points: [
      "Trustee documentation preparation",
      "Constitution drafting guidance",
      "Newspaper publication requirements",
      "28-day objection period management",
      "CAC filing and certificate collection",
    ],
  },
  {
    title: "Post-Incorporation Filings",
    intro:
      "Professional handling of all changes and updates to your CAC records after registration.",
    points: [
      "Change of Registered Address",
      "Addition or Removal of Directors or Proprietors",
      "Share Transfers and Allotments",
      "MEMART Amendments",
      "PSC Registration and Updates",
      "Certified True Copies (CTC) and Status Reports",
    ],
  },
  {
    title: "Bookkeeping & Financial Management",
    intro:
      "Outsourced part-time financial management for SMEs, NGOs, cooperatives, churches, and associations.",
    points: [
      "Monthly bookkeeping",
      "Management accounts preparation",
      "Annual financial statements",
      "Budget preparation",
      "Budget monitoring and variance analysis",
    ],
  },
  {
    title: "BOI & CBN Loan Application Support",
    intro:
      "Access funding opportunities with confidence. We help businesses prepare strong, well-structured applications for development finance institutions.",
    points: [
      "Bank of Industry (BOI) funding",
      "CBN intervention programmes",
      "NIRSAL and other development finance institutions",
      "We understand what fund providers require and help position your application for success",
    ],
  },
  {
    title: "TIN, VAT & SMEDAN Registration",
    intro: "Ensure your business is fully registered across all key regulatory platforms.",
    points: [
      "Tax Identification Number (TIN) registration",
      "VAT registration with the Nigeria Revenue Service",
      "SMEDAN portal registration and certificate follow-up",
    ],
  },
  {
    title: "Business Plan Preparation",
    intro:
      "Professionally prepared business plans tailored to your industry, objectives, and growth strategy.",
    points: [
      "Loan applications",
      "Grant applications",
      "Investor presentations",
      "Strategic business planning",
      "Each plan is customised to your business size, sector, and specific purpose",
    ],
  },
];

export const howWeWork = [
  {
    step: 1,
    title: "Enquiry",
    desc: "Contact us by phone, WhatsApp, email, or the website contact form. Tell us what you need. We respond within 24 hours.",
  },
  {
    step: 2,
    title: "Information Gathering",
    desc: "We send you our Client Information Form. You complete it and return it with any available documents. We tell you exactly what we need — nothing more, nothing less.",
  },
  {
    step: 3,
    title: "Engagement Letter",
    desc: "We prepare a personalised Engagement Letter listing exactly what we will do, the timeline, and the agreed fee. No surprises.",
  },
  {
    step: 4,
    title: "Payment",
    desc: "You pay the agreed deposit. We begin work immediately. A receipt is issued for every payment.",
  },
  {
    step: 5,
    title: "Execution",
    desc: "We handle all portal filings, document preparation, and CAC interactions on your behalf. You do not need to visit any CAC office. We keep you informed at every stage.",
  },
  {
    step: 6,
    title: "Delivery",
    desc: "Your certificate, receipts, or completed documents are delivered to you electronically or physically as agreed. Balance payment is made on delivery.",
  },
  {
    step: 7,
    title: "Ongoing Support",
    desc: "We track your next Annual Returns due date and remind you in advance. Your compliance is our ongoing responsibility — not a one-off transaction.",
  },
];

export const blogInfo = {
  categories: [
    "CAC Registration",
    "Annual Returns",
    "Compliance Tips",
    "Financial Management",
    "Business Growth",
  ],
  // Placeholder posts until the 30-Day Content Calendar (AAPS/CONTENT/2026/001) is loaded.
  placeholderPosts: [
    {
      slug: "annual-returns-deadline-guide",
      title: "What Happens If You Miss Your Annual Returns Deadline?",
      category: "Annual Returns",
      excerpt:
        "Penalties for late Annual Returns accumulate quickly. Here is what every Nigerian business owner needs to know.",
      date: "2026-07-01",
    },
    {
      slug: "registering-an-ngo-in-nigeria",
      title: "A Step-by-Step Guide to Registering an NGO in Nigeria",
      category: "CAC Registration",
      excerpt:
        "From trustee documentation to the 28-day objection period — what churches and foundations need to prepare.",
      date: "2026-07-03",
    },
    {
      slug: "boi-loan-application-checklist",
      title: "Five Things Your BOI Loan Application Must Get Right",
      category: "Financial Management",
      excerpt:
        "A strong business plan is the difference between approval and rejection. Here is what fund providers look for.",
      date: "2026-07-05",
    },
  ],
};

export const adverts = [
  "Is your business registered? It should be. We make it easy.",
  "Annual Returns overdue? Every day costs more. Let us fix it today.",
  "CAC accredited. ICAN certified. Your compliance is safe with us.",
  "Registering an NGO or church? We know the process. We handle the paperwork.",
  "Need a BOI loan? Start with the right business plan. We prepare it.",
  "From registration to financial management — one practice. Full accountability.",
  "Your Annual Returns. Filed on time. Every time.",
  "Small business. Big compliance. We bridge the gap.",
];

export const contactPage = {
  serviceOptions: [
    "Registration",
    "Annual Returns",
    "NGO Registration",
    "Financial Management",
    "Loan Support",
    "Other",
  ],
  afterSubmitMessage: "Thank you. We will respond within 24 hours.",
};

// ── Full blog articles (injected per spec) ─────────────────────────────────
export const blogPosts = [
  {
    slug: "annual-returns-deadline-guide",
    title: "What Happens If You Miss Your Annual Returns Deadline?",
    category: "Annual Returns",
    excerpt:
      "Penalties for late Annual Returns accumulate quickly. Here is what every Nigerian business owner needs to know — and how to regularise before it costs you more.",
    date: "2026-07-01",
    readTime: "5 min read",
    body: [
      {
        type: "intro",
        text: "Every company, business name, and incorporated trustee registered with the Corporate Affairs Commission (CAC) is legally required to file Annual Returns. Missing this deadline does not just mean a fine — it means accumulating daily penalties, restrictions on future filings, and in some cases, the risk of having your company struck off the register entirely.",
      },
      {
        type: "heading",
        text: "What Are Annual Returns?",
      },
      {
        type: "paragraph",
        text: "Annual Returns is a statutory filing made to the CAC confirming that your business is still active and providing current details of your directors, shareholders, registered address, and other key particulars. It is not a tax return. It is a compliance filing — and it is mandatory for every registered entity in Nigeria, regardless of whether the entity traded during the year.",
      },
      {
        type: "heading",
        text: "What Are the Penalties for Late Filing?",
      },
      {
        type: "paragraph",
        text: "Under the Companies and Allied Matters Act (CAMA) 2020, daily penalties apply from the moment your filing deadline passes. For a Business Name, the penalty is currently ₦1,000 per day. For a Limited Liability Company, penalties are higher and increase the longer you delay. For Incorporated Trustees — NGOs, churches, and associations — the CAC imposes fixed penalties per year of default.",
      },
      {
        type: "callout",
        text: "Key insight: If your business has not filed Annual Returns for three or more years, the CAC has the power to strike it off the register. A struck-off company cannot legally conduct business or hold property.",
      },
      {
        type: "heading",
        text: "Can You File for Multiple Years of Backlog?",
      },
      {
        type: "paragraph",
        text: "Yes — and you should do so as early as possible. The CAC allows entities to file outstanding Annual Returns for multiple years simultaneously. At Atunbi Associates Professional Services, we regularly assist businesses in regularising backlogs of three, five, and even ten years. The process is straightforward when handled correctly: we assess all outstanding years, calculate the applicable penalties, and file all returns in one consolidated exercise.",
      },
      {
        type: "heading",
        text: "How to Regularise Your Annual Returns Today",
      },
      {
        type: "paragraph",
        text: "Contact us by phone or WhatsApp. We will review your filing history, advise you on your exact liability, and handle the entire filing process on your behalf. You do not need to visit any CAC office. We handle everything remotely and deliver your compliance receipts directly to you.",
      },
      {
        type: "closing",
        text: "Do not let daily penalties turn a simple filing into a major liability. The sooner you regularise, the less you pay. Reach out to Atunbi Associates Professional Services today.",
      },
    ],
  },
  {
    slug: "registering-an-ngo-in-nigeria",
    title: "A Step-by-Step Guide to Registering an NGO in Nigeria",
    category: "CAC Registration",
    excerpt:
      "From trustee documentation to the mandatory 28-day objection period — what churches, foundations, and community organisations need to prepare before approaching the CAC.",
    date: "2026-07-03",
    readTime: "7 min read",
    body: [
      {
        type: "intro",
        text: "Registering a Non-Governmental Organisation (NGO), church, foundation, or community association in Nigeria is done through the Corporate Affairs Commission under the category of Incorporated Trustees. It is a legally distinct process from registering a business name or limited company, and it involves several stages that must be completed in the correct sequence.",
      },
      {
        type: "heading",
        text: "Step 1 — Conduct a Name Search and Reservation",
      },
      {
        type: "paragraph",
        text: "Your organisation's name must be unique and not already registered with the CAC. We begin by conducting a thorough name availability search on the CAC portal. Once confirmed, we reserve the name on your behalf. The CAC typically holds a reserved name for a defined period — we ensure your full application is ready before this window closes.",
      },
      {
        type: "heading",
        text: "Step 2 — Prepare Your Trustee Documentation",
      },
      {
        type: "paragraph",
        text: "The CAC requires a minimum of two Trustees. Each Trustee must provide a valid means of identification, passport photographs, and a completed consent form. We prepare all consent and declaration documents in the format the CAC requires and ensure they are correctly executed before the application is filed.",
      },
      {
        type: "heading",
        text: "Step 3 — Draft Your Constitution",
      },
      {
        type: "paragraph",
        text: "Every incorporated trustee must have a constitution. This is a formal document that outlines the organisation's name, objectives, governance structure, and how meetings, elections, and funds will be managed. At Atunbi Associates, we provide guidance on structuring a compliant constitution that satisfies CAC requirements without unnecessary complexity.",
      },
      {
        type: "callout",
        text: "Important: The CAC scrutinises the Objects Clause of your constitution closely. The stated objectives of your NGO must be charitable, educational, religious, literary, scientific, or social in nature. Commercial objectives are not permitted for incorporated trustees.",
      },
      {
        type: "heading",
        text: "Step 4 — Mandatory Newspaper Publication",
      },
      {
        type: "paragraph",
        text: "Once the constitution and trustee documents are ready, the CAC requires the organisation to publish a notice in at least two national newspapers — one of which must be a national daily. This notice announces your intention to register and invites objections from the public. We manage this publication requirement, including identifying suitable newspapers and obtaining proof of publication.",
      },
      {
        type: "heading",
        text: "Step 5 — The 28-Day Objection Period",
      },
      {
        type: "paragraph",
        text: "After newspaper publication, there is a mandatory 28-day waiting period during which members of the public or other registered organisations may file an objection to your registration. If no objections are received and upheld, the CAC proceeds with the registration. We monitor this period and ensure your application advances to the final filing stage without delay.",
      },
      {
        type: "heading",
        text: "Step 6 — CAC Filing and Certificate Collection",
      },
      {
        type: "paragraph",
        text: "We file all completed documents on the CAC portal, pay the applicable government fees, and track your application through to approval. Upon registration, the CAC issues a Certificate of Incorporation (as Incorporated Trustees). We collect this certificate and deliver it to you together with your certified CAC filing documents.",
      },
      {
        type: "closing",
        text: "The NGO registration process is detailed, but it does not have to be complicated. With experienced guidance, most registrations are completed within eight to twelve weeks of our receiving all required trustee documents. Contact us today to begin.",
      },
    ],
  },
  {
    slug: "boi-loan-application-checklist",
    title: "Five Things Your BOI Loan Application Must Get Right",
    category: "Financial Management",
    excerpt:
      "A strong, well-structured application is the difference between BOI approval and rejection. These are the five areas fund providers scrutinise most closely — and how to get each one right.",
    date: "2026-07-05",
    readTime: "6 min read",
    body: [
      {
        type: "intro",
        text: "The Bank of Industry (BOI) and CBN intervention programmes represent some of the most accessible long-term funding available to small and medium enterprises in Nigeria. Yet the majority of applications fail — not because businesses are unqualified, but because the applications are poorly structured, incomplete, or unconvincing. Here are the five areas that determine approval or rejection.",
      },
      {
        type: "heading",
        text: "1. A Credible, Industry-Specific Business Plan",
      },
      {
        type: "paragraph",
        text: "A generic business plan template will not pass BOI review. Fund providers require a plan that is specific to your industry, realistic in its projections, and demonstrates a clear understanding of your market. Your business plan must include an executive summary, business description, market analysis, operations plan, financial projections for a minimum of three years, and a clear articulation of how the loan will be deployed and repaid.",
      },
      {
        type: "heading",
        text: "2. Verified CAC Registration and Compliance Status",
      },
      {
        type: "paragraph",
        text: "No development finance institution will process an application from an entity whose CAC status is not current. You must have a valid Certificate of Incorporation or Registration, and your Annual Returns must be up to date for all years of the business's existence. Outstanding Annual Returns is one of the most common reasons applications are rejected at the documentation stage. We regularise this before your application is submitted.",
      },
      {
        type: "callout",
        text: "Critical requirement: BOI and most CBN intervention programmes require your TIN (Tax Identification Number) to be active and linked to your CAC registration. Ensure this is in order before applying.",
      },
      {
        type: "heading",
        text: "3. Realistic, Auditable Financial Projections",
      },
      {
        type: "paragraph",
        text: "Your financial projections must be defensible — meaning a loan officer should be able to look at your assumptions and find them credible based on your actual business history and market data. Overly optimistic projections without supporting evidence are a red flag. We prepare financial models that are grounded in real cost structures, realistic revenue assumptions, and a clearly demonstrated debt service capacity.",
      },
      {
        type: "heading",
        text: "4. Documented Collateral or Equity Contribution",
      },
      {
        type: "paragraph",
        text: "BOI and similar programmes typically require the borrower to contribute a percentage of the total project cost from their own resources — this is the equity contribution. Additionally, collateral may be required depending on the loan size and programme type. Clearly documenting what you are contributing and what you are offering as security strengthens your application considerably.",
      },
      {
        type: "heading",
        text: "5. A Clean, Well-Organised Application Package",
      },
      {
        type: "paragraph",
        text: "Presentation matters. Applications submitted with missing documents, inconsistent figures across sections, or poorly formatted financials signal disorganisation to reviewers. We prepare complete, professionally formatted application packages — covering the business plan, financial projections, CAC and tax documents, collateral documentation, and any programme-specific forms — ensuring nothing is missing and everything is consistent.",
      },
      {
        type: "closing",
        text: "If you are considering a BOI or CBN loan application, start with a free consultation. We will assess your readiness, identify any gaps, and prepare a complete, professional application package on your behalf. Contact Atunbi Associates Professional Services today.",
      },
    ],
  },
]
