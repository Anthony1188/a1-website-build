// Field Notes / Modern Workwear: articles are practical field notes—short, useful, and written for the next decision.
import { ArrowRight } from "lucide-react"
import { Link } from "wouter"
import { SectionLabel } from "@/components/SiteFooter"
import { fieldNotes } from "@/lib/site"

export default function Blog() {
  return (
    <>
      <section className="page-hero grain"><div className="inner page-hero-grid"><div><SectionLabel number="01">Field notes</SectionLabel><h1 className="display display--section">A little less<br />guesswork.</h1></div><div className="page-hero-aside"><p>Plain-language notes on dumpsters, cleanouts, access, timing, and the small decisions that make a job easier.</p></div></div></section>
      <section className="section section--paper"><div className="inner"><div className="blog-grid">{fieldNotes.map((post) => <article className="blog-card" key={post.slug}><Link href={`/blog/${post.slug}`} className="blog-card-image"><img src={post.image} alt="" /></Link><div className="blog-card-body"><div className="blog-meta"><span>{post.category}</span><span>{post.readTime}</span></div><h2>{post.title}</h2><p>{post.excerpt}</p><Link className="text-link" href={`/blog/${post.slug}`}>Read the note <ArrowRight size={16} /></Link></div></article>)}</div></div></section>
      <section className="section section--navy grain"><div className="inner cta-strip"><div><SectionLabel number="02" light>Still deciding?</SectionLabel><h2>Ask the<br />useful question.</h2></div><div><p>We would rather help you choose the right route than send the wrong truck.</p><Link href="/contact" className="button button--orange" style={{ marginTop: 24 }}>Talk it through <ArrowRight size={16} /></Link></div></div></section>
    </>
  )
}
