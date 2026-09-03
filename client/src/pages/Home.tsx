// Field Notes / Modern Workwear: the home page is a field guide in motion—split hero, route markers, and clear next steps.
import { ArrowRight, ArrowUpRight, Check, MapPin } from "lucide-react"
import { Link } from "wouter"
import { SectionLabel } from "@/components/SiteFooter"
import { images, processSteps, services } from "@/lib/site"

export default function Home() {
  return (
    <>
      <section className="hero grain">
        <div className="inner hero-grid">
          <div className="hero-copy">
            <SectionLabel number="00">A1 Services · Local hauling</SectionLabel>
            <h1 className="display display--hero">Clear the mess.<br /><span style={{ color: "var(--orange)" }}>Keep the momentum.</span></h1>
            <p className="lede">Junk removal, dumpster rental, hauling, and site work for the jobs that need to move forward — without the runaround.</p>
            <div className="hero-actions">
              <Link className="button button--orange" href="/contact">Tell us what needs hauling <ArrowUpRight size={16} /></Link>
              <a className="button button--outline" href="tel:+15550101401">Call A1 <ArrowRight size={16} /></a>
            </div>
            <div className="hero-proof" aria-label="A1 service promises">
              <div className="proof-item"><strong>Clear quotes</strong><span>No surprise handoffs</span></div>
              <div className="proof-item"><strong>Right setup</strong><span>Truck, trailer, or equipment</span></div>
              <div className="proof-item"><strong>Local crew</strong><span>Residential + light commercial</span></div>
            </div>
          </div>
          <div className="hero-media">
            <div className="corner-note">Route 001 · Ready</div>
            <figure className="image-frame image-frame--hero">
              <img src={images.hero} alt="Roll-off dumpster delivery on a residential driveway" />
            </figure>
            <div className="hero-media-caption"><span>On the job</span><span>Hauling / Delivery</span></div>
          </div>
        </div>
      </section>

      <section className="section section--paper" id="services">
        <div className="inner">
          <div className="section-heading">
            <div><SectionLabel number="01">The work</SectionLabel><h2 className="display display--section">The right tool<br />for the pile.</h2></div>
            <p className="lede">One call can cover the haul, the container, or the equipment. Start with the job in front of you.</p>
          </div>
          <div className="service-list">
            {services.map((service) => <Link className="service-row" href="/services" key={service.number}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="service-arrow" aria-hidden="true"><ArrowUpRight size={17} /></span>
            </Link>)}
          </div>
        </div>
      </section>

      <section className="section section--navy grain" id="how-it-works">
        <div className="inner">
          <div className="split-band">
            <div className="split-band-copy">
              <SectionLabel number="02" light>How it works</SectionLabel>
              <h2 className="display display--section">Simple from<br />the first call.</h2>
              <p className="lede">You do not need the right industry words. Tell us what is in the way, where it is, and when you need it gone.</p>
              <div className="note-list">
                {processSteps.map((step) => <div className="note-item" key={step.number}><span className="note-item-number">{step.number}</span><div><h3>{step.title}</h3><p>{step.body}</p></div></div>)}
              </div>
            </div>
            <div className="about-pull" style={{ alignSelf: "end", background: "var(--orange)", boxShadow: "9px 9px 0 rgba(255,253,248,.18)" }}>
              <MapPin size={25} strokeWidth={1.8} />
              <strong style={{ marginTop: 18 }}>Local by design.</strong>
              <p>We keep the conversation close to the job. That means better context, a cleaner plan, and fewer surprises when the truck arrives.</p>
              <Link href="/about" className="text-link" style={{ color: "var(--white)", marginTop: 22 }}>Meet the crew <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="inner">
          <div className="section-heading"><div><SectionLabel number="03">Our work</SectionLabel><h2 className="display display--section">Room to get<br />on with it.</h2></div><Link href="/gallery" className="text-link">See the work <ArrowRight size={16} /></Link></div>
          <div className="work-grid">
            <Link href="/gallery" className="work-card work-card--feature"><img src={images.junk} alt="Crew loading items for junk removal" /><div className="work-card-copy"><span>Junk removal</span><h3>From full cleanouts to one stubborn couch.</h3></div></Link>
            <div className="work-stack">
              <Link href="/gallery" className="work-card"><img src={images.dumpster} alt="Black roll-off dumpster ready for a renovation" /><div className="work-card-copy"><span>Dumpster rental</span><h3>Fill it at your pace.</h3></div></Link>
              <Link href="/gallery" className="work-card"><img src={images.skidSteer} alt="Orange skid steer clearing a residential lot" /><div className="work-card-copy"><span>Site work</span><h3>Make rough ground workable.</h3></div></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--orange grain">
        <div className="inner cta-strip"><div><SectionLabel number="04" light>Next move</SectionLabel><h2>Have a pile?<br />We have a plan.</h2></div><div><p>Tell us the quick version and we will help you choose the cleanest next step.</p><Link href="/contact" className="button button--white" style={{ marginTop: 24 }}>Get a clear quote <Check size={16} /></Link></div></div>
      </section>
    </>
  )
}
