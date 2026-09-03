// Premium Industrial A1 system: the footer keeps direct contact paths and the full supplied brand mark.
import { ArrowUpRight, Phone } from "lucide-react"
import { Link } from "wouter"
import { footerLinks, images } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="brand" aria-label="A1 Services home">
              <img className="brand-mark brand-mark--full" src={images.mark} alt="A1 Services" />
              <span className="brand-lockup"><strong>A1</strong><small>Services · Local hauling</small></span>
            </Link>
            <p className="footer-copy">The straightforward cleanup crew for homeowners, contractors, and property managers who need the job cleared without the runaround.</p>
          </div>
          <div>
            <p className="footer-heading">On the route</p>
            <div className="footer-links">
              {footerLinks.map((item) => <Link key={item.href} className="footer-link" href={item.href}>{item.label}</Link>)}
            </div>
          </div>
          <div className="footer-contact">
            <p className="footer-heading">Start the conversation</p>
            <a href="tel:+15550101401"><Phone size={16} /> (555) 010-1401</a>
            <span>Call or text with the basics. We will help you choose the cleanest next step.</span>
            <Link href="/contact" className="text-link" style={{ color: "var(--a1-red)" }}>Tell us what needs hauling <ArrowUpRight size={16} /></Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 A1 Services</span>
          <span>Junk removal · Dumpster rental · Site work</span>
        </div>
      </div>
    </footer>
  )
}

export function SectionLabel({ number, children, light = false }: { number: string; children: React.ReactNode; light?: boolean }) {
  return <div className={`eyebrow${light ? " eyebrow--light" : ""}`}><span>{number}</span><span>{children}</span></div>
}
