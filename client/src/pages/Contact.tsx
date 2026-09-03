// Field Notes / Modern Workwear: contact is a practical intake desk with the phone number visible before the form.
import { ArrowRight, Clock3, Mail, MapPin, Phone } from "lucide-react"
import { Link } from "wouter"
import { QuoteForm } from "@/components/QuoteForm"
import { SectionLabel } from "@/components/SiteFooter"

export default function Contact() {
  return (
    <>
      <section className="page-hero grain"><div className="inner page-hero-grid"><div><SectionLabel number="01">Start here</SectionLabel><h1 className="display display--section">Tell us what<br />needs hauling.</h1></div><div className="page-hero-aside"><p>Give us the quick version. We will help you choose the cleanest next step, even if you are not sure which service fits.</p></div></div></section>
      <section className="section section--paper"><div className="inner contact-grid"><div><SectionLabel number="02">Talk to A1</SectionLabel><h2 className="display display--medium">One good<br />conversation.</h2><p className="lede">Call or text if the job is moving quickly. Use the form if you want to send the details in one pass.</p><div className="contact-details"><div className="contact-detail"><span>Call or text</span><a href="tel:+15550101401"><Phone size={20} style={{ marginRight: 8, verticalAlign: "-2px" }} /> (555) 010-1401</a></div><div className="contact-detail"><span>Email</span><a href="mailto:hello@a1services.example"><Mail size={20} style={{ marginRight: 8, verticalAlign: "-2px" }} /> hello@a1services.example</a></div><div className="contact-detail"><span>Service area</span><p><MapPin size={20} style={{ marginRight: 8, verticalAlign: "-2px" }} /> Local routes + nearby jobs</p></div><div className="contact-detail"><span>Good time to reach us</span><p><Clock3 size={20} style={{ marginRight: 8, verticalAlign: "-2px" }} /> Monday–Saturday</p></div></div></div><QuoteForm /></div></section>
      <section className="section section--navy grain"><div className="inner cta-strip"><div><SectionLabel number="03" light>Not ready for a quote?</SectionLabel><h2>Read the<br />field notes.</h2></div><div><p>Get a little more context on dumpsters, cleanouts, and how to plan the work.</p><Link href="/blog" className="button button--white" style={{ marginTop: 24 }}>Browse field notes <ArrowRight size={16} /></Link></div></div></section>
    </>
  )
}
