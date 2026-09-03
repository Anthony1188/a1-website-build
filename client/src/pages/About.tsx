// Field Notes / Modern Workwear: the about page uses a grounded story and explicit principles instead of generic founder copy.
import { ArrowRight, HeartHandshake, Recycle, ShieldCheck, Wrench } from "lucide-react"
import { Link } from "wouter"
import { SectionLabel } from "@/components/SiteFooter"
import { images } from "@/lib/site"

const values = [
  { icon: ShieldCheck, title: "Honesty first", body: "Clear options, clear timing, and a straight answer when a job needs a different solution." },
  { icon: HeartHandshake, title: "Local by design", body: "The closer the conversation stays to the work, the easier it is to make a useful plan." },
  { icon: Recycle, title: "Handle it responsibly", body: "We look for the right next place for material instead of treating every load the same." },
  { icon: Wrench, title: "Do the whole job", body: "The right truck is only part of it. Good work includes access, cleanup, and a tidy finish." },
]

export default function About() {
  return (
    <>
      <section className="page-hero grain"><div className="inner page-hero-grid"><div><SectionLabel number="01">About A1</SectionLabel><h1 className="display display--section">No runaround.<br />Just good work.</h1></div><div className="page-hero-aside"><p>We are the crew you call when the pile, project, or property needs a capable next step and a little less noise around it.</p></div></div></section>
      <section className="section section--paper"><div className="inner about-grid"><div className="about-copy"><span className="tape">A note from the route</span><h2 className="display display--medium">Useful help<br />for real jobs.</h2><p style={{ marginTop: 28 }}>A1 Services is built around a simple idea: cleanup should make the rest of the work easier. That means showing up with the right setup, keeping the quote understandable, and respecting the property we are working on.</p><p>Some jobs are a single couch. Some are a renovation, a storm cleanup, or a small lot that needs a reset. The scale changes; the way we work does not. We listen, make a plan, and get the material out of the way.</p><div className="values">{values.map(({ icon: Icon, title, body }) => <div className="value" key={title}><Icon size={22} strokeWidth={1.8} color="var(--orange)" /><h3 style={{ marginTop: 13 }}>{title}</h3><p>{body}</p></div>)}</div></div><div><div className="image-frame" style={{ aspectRatio: "1 / 1.1", boxShadow: "11px 11px 0 var(--moss)" }}><img src={images.hero} alt="A1 Services roll-off truck delivering a dumpster" /></div><div className="hero-media-caption" style={{ background: "var(--moss)" }}><span>Built for the next job</span><span>A1 / 2026</span></div></div></div></section>
      <section className="section section--navy grain"><div className="inner split-band"><div className="split-band-copy"><SectionLabel number="02" light>What we bring</SectionLabel><h2 className="display display--section">A better<br />kind of ready.</h2><p className="lede">Equipment matters. So do the small things: a call returned, an arrival that makes sense, and a site left in better shape than we found it.</p></div><div className="note-list"><div className="note-item"><span className="note-item-number">01</span><div><h3>Trucks and trailers</h3><p>For the loads that need more than a curbside bin can handle.</p></div></div><div className="note-item"><span className="note-item-number">02</span><div><h3>Roll-off containers</h3><p>For multi-day renovations, roofing, and projects on your own schedule.</p></div></div><div className="note-item"><span className="note-item-number">03</span><div><h3>Compact equipment</h3><p>For clearing, grading, and turning a rough site into a workable one.</p></div></div></div></div></section>
      <section className="section section--navy grain"><div className="inner cta-strip"><div><SectionLabel number="03" light>Work with A1</SectionLabel><h2>Put the next<br />thing in motion.</h2></div><div><p>Start with the short version. We will ask the useful questions from there.</p><Link href="/contact" className="button button--orange" style={{ marginTop: 24 }}>Talk to the crew <ArrowRight size={16} /></Link></div></div></section>
    </>
  )
}
