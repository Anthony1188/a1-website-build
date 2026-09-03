// Premium Industrial A1 system: shared content preserves direct service labels and managed field imagery.

export const images = {
  hero: "/manus-storage/a1-hero-hauling_50ce2fc7.png",
  junk: "/manus-storage/service-junk-removal_b6024cb9.png",
  dumpster: "/manus-storage/service-dumpster-rental_7df7f4dd.png",
  skidSteer: "/manus-storage/service-skid-steer_ae4ee644.png",
  aboutCrew: "/manus-storage/about-crew_65009844.png",
  sourceHero: "/manus-storage/hero-dumpster-delivery_ef3a4f38.png",
  mark: "/manus-storage/a1-services-logo-proper_a92c1df1.png",
} as const

export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Our work", href: "/gallery" },
  { label: "About A1", href: "/about" },
  { label: "Field notes", href: "/blog" },
] as const

export const services = [
  {
    number: "01",
    title: "Junk removal",
    shortTitle: "Remove",
    description: "We load it, sort it, and get it out of your way — from one bulky item to a full property cleanout.",
    detail: "Best for cleanouts, move-outs, estate work, and the pile that got bigger than your weekend.",
    image: images.junk,
    accent: "orange",
  },
  {
    number: "02",
    title: "Dumpster rental",
    shortTitle: "Rent",
    description: "A roll-off delivered where you need it, picked up when you are done, and sized around the job.",
    detail: "Best for renovations, roofing, demolition debris, and projects you are tackling on your own clock.",
    image: images.dumpster,
    accent: "navy",
  },
  {
    number: "03",
    title: "Hauling & debris",
    shortTitle: "Haul",
    description: "Construction debris, storm cleanup, yard waste, and everything that needs a truck instead of another trip.",
    detail: "Best for contractors, property managers, and anyone who needs a site cleared without slowing down.",
    image: images.hero,
    accent: "moss",
  },
  {
    number: "04",
    title: "Skid steer work",
    shortTitle: "Grade",
    description: "Compact equipment for clearing, grading, light demolition, and making rough ground workable again.",
    detail: "Best for small lots, access paths, material moving, and tidy site prep.",
    image: images.skidSteer,
    accent: "orange",
  },
] as const

export const fieldNotes = [
  {
    slug: "how-to-choose-the-right-dumpster-size",
    date: "July 28, 2026",
    category: "Dumpster rental",
    title: "How to choose the right dumpster size for your project",
    excerpt: "A plain-language way to think about capacity, access, and the cost of getting it wrong.",
    readTime: "4 min read",
    image: images.dumpster,
    paragraphs: [
      "The right dumpster is the one that gives your project room to move without paying for space you never use. Start with the type of material, then estimate the volume, and finally think about how the truck will access the drop point.",
      "For a single-room cleanout or a modest bathroom renovation, a smaller container is often the practical choice. Full-home cleanouts, roofing, and heavier construction debris usually deserve a larger roll-off so you do not pay for a second pickup.",
      "If the project is hard to picture, send A1 a few details about what is coming out and how long you will need the container. We will point you toward a sensible size before the truck rolls.",
    ],
  },
  {
    slug: "junk-removal-vs-dumpster-rental",
    date: "July 10, 2026",
    category: "Planning",
    title: "Junk removal vs. dumpster rental: which do you need?",
    excerpt: "Choose the hands-off option or keep the work on your own schedule — the difference is simpler than it sounds.",
    readTime: "5 min read",
    image: images.junk,
    paragraphs: [
      "Junk removal is the hands-off route. The crew arrives, loads the material, and takes it away in one visit. It makes sense when speed matters or when the pile is awkward, heavy, or simply not something you want to move yourself.",
      "Dumpster rental gives you control over the pace. You load as rooms, yards, or job sites come together, then schedule pickup when the work is finished. It is a useful fit for multi-day renovations and contractor-led projects.",
      "When the timeline is uncertain, describe the material and the amount of work you are planning. A1 can help you compare the two routes without turning the decision into a sales pitch.",
    ],
  },
  {
    slug: "spring-property-cleanup-checklist",
    date: "June 15, 2026",
    category: "Field guide",
    title: "A practical spring property cleanup checklist",
    excerpt: "Start with the spaces you avoid, then work outward until the property feels usable again.",
    readTime: "6 min read",
    image: images.skidSteer,
    paragraphs: [
      "Begin inside with the garage, basement, attic, and storage rooms. Pull everything into broad categories: keep, donate, recycle, and haul. The goal is not to make four perfect piles; it is to make the next decision visible.",
      "Outside, look for storm debris, old fencing, broken equipment, branches, and the material that has been leaning against the shed since last season. Separate anything that needs special handling before it joins the main load.",
      "If the pile is larger than your bins or the ground needs a little work after the cleanup, bring in the right equipment. One clear plan can cover the haul and the site work together.",
    ],
  },
] as const

export const processSteps = [
  { number: "01", title: "Tell us the job", body: "Call, text, or send the short form. A photo helps, but plain English works too." },
  { number: "02", title: "Get a clear plan", body: "We talk through the material, access, timing, and the most sensible service." },
  { number: "03", title: "Keep moving", body: "We show up with the right setup, clear the work, and leave you with momentum." },
] as const

export const footerLinks = [
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const

export function getFieldNote(slug: string) {
  return fieldNotes.find((post) => post.slug === slug)
}
