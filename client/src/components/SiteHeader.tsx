// Field Notes / Modern Workwear: navigation is compact, practical, and marked by orange route accents.
import { Menu, Phone, X } from "lucide-react"
import { Link, useLocation } from "wouter"
import { navLinks, images } from "@/lib/site"
import { useState } from "react"

export function SiteHeader() {
  const [location] = useLocation()
  const [open, setOpen] = useState(false)

  const isActive = (href: string) => href !== "/#how-it-works" && (location === href || (href !== "/" && location.startsWith(`${href}/`)))

  return (
    <header className="site-header">
      <div className="inner">
        <div className="header-row">
          <Link href="/" className="brand" aria-label="A1 Services home" onClick={() => setOpen(false)}>
            <img className="brand-mark" src={images.mark} alt="" />
            <span className="brand-lockup"><strong>A1</strong><small>Services · Local hauling</small></span>
          </Link>

          <nav className="nav-links" aria-label="Primary navigation">
            {navLinks.map((item) => (
              <Link key={item.href} href={item.href} className={`nav-link${isActive(item.href) ? " active" : ""}`}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <a className="header-phone" href="tel:+15550101401"><Phone size={15} strokeWidth={2.5} /> (555) 010-1401</a>
            <Link className="button button--orange" href="/contact">Get a quote</Link>
          </div>

          <button className="mobile-toggle" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
            {open ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
        {open && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navLinks.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link" onClick={() => setOpen(false)}>{item.label}</Link>
            ))}
            <Link className="button button--orange" href="/contact" onClick={() => setOpen(false)}>Get a quote</Link>
          </nav>
        )}
      </div>
    </header>
  )
}
