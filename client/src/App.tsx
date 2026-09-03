// Field Notes / Modern Workwear: every route shares the same practical header, footer, and editorial wayfinding.
import { Route, Switch } from "wouter"
import { TooltipProvider } from "@/components/ui/tooltip"
import ErrorBoundary from "@/components/ErrorBoundary"
import { ThemeProvider } from "@/contexts/ThemeContext"
import { SiteFooter } from "@/components/SiteFooter"
import { SiteHeader } from "@/components/SiteHeader"
import Home from "@/pages/Home"
import Services from "@/pages/Services"
import Gallery from "@/pages/Gallery"
import About from "@/pages/About"
import Blog from "@/pages/Blog"
import FieldNote from "@/pages/FieldNote"
import Contact from "@/pages/Contact"
import NotFound from "@/pages/NotFound"

function Layout({ children }: { children: React.ReactNode }) {
  return <div className="site-shell"><SiteHeader /><main>{children}</main><SiteFooter /></div>
}

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={FieldNote} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  )
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>
}
