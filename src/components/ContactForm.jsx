import { useState } from 'react'
import { contactPage } from '../data/content.js'
import './ContactForm.css'

// Endpoint is read from the .env file — never hardcoded in source.
// In Vite, all VITE_* variables in .env are exposed to the client bundle.
const ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT

const initialState = {
  fullName: '',
  phone: '',
  email: '',
  entity: '',
  serviceRequired: '',
  message: '',
}

export default function ContactForm() {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [networkError, setNetworkError] = useState('')

  function handleChange(e) {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    // Clear field error on change
    if (errors[name]) setErrors((e) => { const n = { ...e }; delete n[name]; return n })
  }

  function validate() {
    const next = {}
    if (!values.fullName.trim()) next.fullName = 'Full name is required.'
    if (!values.phone.trim()) next.phone = 'Phone number is required.'
    if (!values.email.trim()) {
      next.email = 'Email address is required.'
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      next.email = 'Enter a valid email address.'
    }
    if (!values.message.trim()) next.message = 'Please tell us what you need.'
    return next
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setNetworkError('')

    const validationErrors = validate()
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setIsSubmitting(true)

    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: values.fullName,
          phone: values.phone,
          email: values.email,
          entity: values.entity,
          service: values.serviceRequired,
          message: values.message,
        }),
      })

      if (res.ok) {
        setSubmitted(true)
        setValues(initialState)
      } else {
        // Formspree returns JSON error details on non-2xx
        const data = await res.json().catch(() => ({}))
        setNetworkError(
          data?.errors?.[0]?.message ||
          'Submission failed. Please try again or contact us directly by phone.'
        )
      }
    } catch {
      // Network failure (offline, CORS, etc.)
      setNetworkError(
        'Network error — please check your connection and try again, or reach us directly by phone.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="contact-form__success" role="status" aria-live="polite">
        <svg className="contact-form__success-icon" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="26" cy="26" r="25" stroke="currentColor" strokeWidth="2"/>
          <path d="M14 27l8 8 16-18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <h3>Enquiry Received</h3>
        <p>{contactPage.afterSubmitMessage}</p>
      </div>
    )
  }

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
    >
      {/* Network / server error banner */}
      {networkError && (
        <div className="contact-form__net-error" role="alert" aria-live="assertive">
          {networkError}
        </div>
      )}

      <div className="contact-form__field">
        <label htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          value={values.fullName}
          onChange={handleChange}
          aria-invalid={!!errors.fullName}
          aria-describedby={errors.fullName ? 'err-fullName' : undefined}
          autoComplete="off"
          disabled={isSubmitting}
        />
        {errors.fullName && (
          <span id="err-fullName" className="contact-form__error" role="alert">{errors.fullName}</span>
        )}
      </div>

      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={handleChange}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'err-phone' : undefined}
            autoComplete="off"
            disabled={isSubmitting}
          />
          {errors.phone && (
            <span id="err-phone" className="contact-form__error" role="alert">{errors.phone}</span>
          )}
        </div>

        <div className="contact-form__field">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'err-email' : undefined}
            autoComplete="off"
            disabled={isSubmitting}
          />
          {errors.email && (
            <span id="err-email" className="contact-form__error" role="alert">{errors.email}</span>
          )}
        </div>
      </div>

      <div className="contact-form__field">
        <label htmlFor="entity">
          Entity / Business Name{' '}
          <span className="contact-form__optional">(optional)</span>
        </label>
        <input
          id="entity"
          name="entity"
          type="text"
          value={values.entity}
          onChange={handleChange}
          autoComplete="off"
          disabled={isSubmitting}
        />
      </div>

      <div className="contact-form__field">
        <label htmlFor="serviceRequired">Service Required</label>
        <select
          id="serviceRequired"
          name="serviceRequired"
          value={values.serviceRequired}
          onChange={handleChange}
          disabled={isSubmitting}
        >
          <option value="">Select a service…</option>
          {contactPage.serviceOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div className="contact-form__field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'err-message' : undefined}
          autoComplete="off"
          disabled={isSubmitting}
        />
        {errors.message && (
          <span id="err-message" className="contact-form__error" role="alert">{errors.message}</span>
        )}
      </div>

      <button
        type="submit"
        className="btn btn--gold btn--block contact-form__submit"
        disabled={isSubmitting}
        aria-disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <span className="contact-form__spinner" aria-hidden="true" />
            Sending…
          </>
        ) : (
          'Send Enquiry'
        )}
      </button>
    </form>
  )
}
