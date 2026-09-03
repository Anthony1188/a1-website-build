// Field Notes / Modern Workwear: the quote form is short, candid, and explicit about the next step.
import { useState, type FormEvent } from "react"

export function QuoteForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" placeholder="First and last" required />
        </div>
        <div className="form-field">
          <label htmlFor="phone">Phone or text</label>
          <input id="phone" name="phone" type="tel" placeholder="(555) 010-1401" required />
        </div>
        <div className="form-field">
          <label htmlFor="service">What do you need?</label>
          <select id="service" name="service" defaultValue="">
            <option value="" disabled>Select a service</option>
            <option>Junk removal</option>
            <option>Dumpster rental</option>
            <option>Hauling & debris</option>
            <option>Skid steer work</option>
            <option>Not sure yet</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="timing">Timing</label>
          <select id="timing" name="timing" defaultValue="">
            <option value="" disabled>When do you need it?</option>
            <option>As soon as possible</option>
            <option>This week</option>
            <option>Next week</option>
            <option>Just planning ahead</option>
          </select>
        </div>
        <div className="form-field form-field--full">
          <label htmlFor="details">The quick version</label>
          <textarea id="details" name="details" placeholder="Tell us what is being removed, where it is, and anything we should know about access." required />
          <p className="form-help">A photo is welcome, but a few plain-English details are enough to start.</p>
        </div>
        <div className="form-field form-field--full">
          <button className="button button--orange" type="submit">Send the job details</button>
        </div>
      </div>
      {sent && <p className="form-success" role="status">Thanks — your details are ready for the next conversation. For the fastest response, call or text (555) 010-1401.</p>}
    </form>
  )
}
