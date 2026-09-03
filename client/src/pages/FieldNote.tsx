// Field Notes / Modern Workwear: article detail stays editorial and useful, with a sticky image note and clear back path.
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Link, useRoute } from "wouter"
import { SectionLabel } from "@/components/SiteFooter"
import { fieldNotes, getFieldNote } from "@/lib/site"

export default function FieldNote() {
  const [, params] = useRoute("/blog/:slug")
  const post = getFieldNote(params?.slug ?? "")

  if (!post) return <section className="not-found"><div><SectionLabel number="404">Not on this route</SectionLabel><h1 className="display display--section">Note not found.</h1><p>The page you were looking for is not in the current field book.</p><Link className="button button--orange" href="/blog">Back to field notes</Link></div></section>

  const nextPost = fieldNotes[(fieldNotes.findIndex((item) => item.slug === post.slug) + 1) % fieldNotes.length]

  return (
    <>
      <section className="page-hero grain"><div className="inner page-hero-grid"><div><Link href="/blog" className="text-link article-back"><ArrowLeft size={16} /> All field notes</Link><SectionLabel number="01">{post.category} · {post.readTime}</SectionLabel><h1 className="display display--section">{post.title}</h1></div><div className="page-hero-aside"><p>{post.date}</p></div></div></section>
      <section className="section section--paper"><div className="inner article-layout"><aside className="article-aside"><img src={post.image} alt="" /><p className="eyebrow" style={{ marginTop: 24 }}>A1 field note</p><p style={{ color: "var(--muted)", fontSize: ".9rem", lineHeight: 1.6, margin: 0 }}>A practical read before the truck arrives.</p></aside><article className="article-body">{post.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<div style={{ marginTop: 52, paddingTop: 24, borderTop: "1px dashed var(--line)" }}><p className="eyebrow">Ready to stop guessing?</p><Link href="/contact" className="button button--orange">Ask A1 about the job <ArrowRight size={16} /></Link></div></article></div></section>
      <section className="section section--navy grain"><div className="inner cta-strip"><div><SectionLabel number="02" light>Next note</SectionLabel><h2>{nextPost.title}</h2></div><Link href={`/blog/${nextPost.slug}`} className="button button--white">Read next <ArrowRight size={16} /></Link></div></section>
    </>
  )
}
