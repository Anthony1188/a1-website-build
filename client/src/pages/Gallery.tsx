// Field Notes / Modern Workwear: the gallery is a field archive—consistent service evidence, dark keylines, and route metadata.
import { ArrowRight } from "lucide-react"
import { Link } from "wouter"
import { SectionLabel } from "@/components/SiteFooter"
import { images } from "@/lib/site"

const galleryImages = [
  { src: images.junk, label: "Full cleanout", meta: "Route 01 · Residential", alt: "Crew loading items for junk removal" },
  { src: images.dumpster, label: "Container set", meta: "Route 02 · Renovation", alt: "Roll-off dumpster ready for a renovation" },
  { src: images.skidSteer, label: "Lot clearing", meta: "Route 03 · Site work", alt: "Orange skid steer clearing a residential lot" },
  { src: images.sourceHero, label: "Trailer ready", meta: "Route 04 · Delivery", alt: "Dump trailer ready for a cleanup project" },
  { src: images.aboutCrew, label: "Crew on route", meta: "Route 05 · A1 Services", alt: "A1 Services crew ready for a job" },
  { src: images.hero, label: "Roll-off delivery", meta: "Route 06 · Drop point", alt: "Roll-off dumpster delivery on a residential driveway" },
]

export default function Gallery() {
  return (
    <>
      <section className="page-hero grain"><div className="inner page-hero-grid"><div><SectionLabel number="01">Our work</SectionLabel><h1 className="display display--section">Good work<br />leaves room.</h1></div><div className="page-hero-aside"><p>A few frames from the kinds of jobs we take on: clearouts, containers, debris, and the ground underneath it all.</p></div></div></section>
      <section className="section section--paper"><div className="inner"><div className="gallery-grid">{galleryImages.map((item) => <figure className="gallery-card" key={item.label}><img src={item.src} alt={item.alt} /><figcaption><span>{item.label}</span><small>{item.meta}</small></figcaption></figure>)}</div></div></section>
      <section className="section section--navy grain"><div className="inner cta-strip"><div><SectionLabel number="02" light>Have a similar job?</SectionLabel><h2>Show us the<br />starting point.</h2></div><div><p>A photo, a rough description, or a quick call is enough to get the conversation moving.</p><Link href="/contact" className="button button--orange" style={{ marginTop: 24 }}>Start a quote <ArrowRight size={16} /></Link></div></div></section>
    </>
  )
}
