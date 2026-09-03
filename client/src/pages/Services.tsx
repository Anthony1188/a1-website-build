// Field Notes / Modern Workwear: services are presented like a clear work order—numbered, scannable, and specific about fit.
import { ArrowRight, ArrowUpRight, Check } from "lucide-react"
import { Link } from "wouter"
import { SectionLabel } from "@/components/SiteFooter"
import { services } from "@/lib/site"

export default function Services() {
  return (
    <>
      <section className="page-hero grain">
        <div className="inner page-hero-grid"><div><SectionLabel number="01">The work</SectionLabel><h1 className="display display--section">A clear lane<br />for every mess.</h1></div><div className="page-hero-aside"><p>From the first load-out to the last pass with the skid steer, A1 keeps the work practical and the plan easy to follow.</p></div></div>
      </section>
      <section className="section section--paper">
        <div className="inner">
          <div className="rail"><div className="rail-label">Choose your<br />next move</div><div className="rail-content"><div className="service-list">{services.map((service) => <article className="service-row" key={service.number}><span className="service-number">{service.number}</span><div><h2>{service.title}</h2><p style={{ marginTop: 12 }}>{service.detail}</p></div><p>{service.description}</p><Link href="/contact" className="service-arrow" aria-label={`Ask about ${service.title}`}><ArrowUpRight size={17} /></Link></article>)}</div></div></div>
        </div>
      </section>
      <section className="section section--navy grain"><div className="inner split-band split-band--reverse"><div className="split-band-copy"><SectionLabel number="02" light>Good to know</SectionLabel><h2 className="display display--section">Not sure<br />which lane?</h2><p className="lede">That is a normal place to start. Tell us what you are clearing, how much there is, and what access looks like. We will help you compare the hands-off route with the do-it-yourself route.</p><Link href="/contact" className="button button--orange" style={{ marginTop: 30 }}>Talk it through <ArrowRight size={16} /></Link></div><div className="note-list"><div className="note-item"><span className="note-item-number">A</span><div><h3>One-time cleanout</h3><p>Junk removal is the cleanest fit when you want the crew to load and haul everything away.</p></div></div><div className="note-item"><span className="note-item-number">B</span><div><h3>Multi-day project</h3><p>A dumpster gives you room to work at your own pace, then schedule pickup when the job is finished.</p></div></div><div className="note-item"><span className="note-item-number">C</span><div><h3>Ground needs attention</h3><p>Skid steer work helps make a rough lot, access path, or material pile workable again.</p></div></div></div></div></section>
      <section className="section section--navy grain"><div className="inner cta-strip"><div><SectionLabel number="03" light>Ready when you are</SectionLabel><h2>Clear the next<br />thing.</h2></div><div><p>A quick description is all we need to point you in the right direction.</p><Link href="/contact" className="button button--orange" style={{ marginTop: 24 }}>Request a quote <Check size={16} /></Link></div></div></section>
    </>
  )
}
