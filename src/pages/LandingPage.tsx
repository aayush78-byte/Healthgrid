import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Activity, Brain, Bed, FileHeart, Bot, Hospital, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const features = [
  { icon: Brain, title: "AI Dual Coding Engine", desc: "Translate NAMASTE traditional codes to ICD-11 instantly with AI precision.", color: "text-healthcare-indigo" },
  { icon: Bed, title: "Real-time Bed Intelligence", desc: "Live bed availability across ICU, general, and emergency wards.", color: "text-healthcare-teal" },
  { icon: FileHeart, title: "Portable Health Records", desc: "Carry your complete medical history digitally, accessible anywhere.", color: "text-healthcare-green" },
  { icon: Bot, title: "AI Health Assistant", desc: "Get instant health guidance bridging traditional and modern medicine.", color: "text-healthcare-blue" },
  { icon: Hospital, title: "Hospital Discovery", desc: "Find nearby hospitals with real-time capacity and emergency status.", color: "text-healthcare-amber" },
  { icon: BarChart3, title: "Disease Outbreak Monitoring", desc: "Track disease trends and outbreaks with predictive analytics.", color: "text-healthcare-red" },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Activity className="h-7 w-7 text-primary" />
            <span className="font-display text-xl font-bold gradient-text">HealthGrid</span>
          </Link>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link to="/login">
              <Button variant="outline" size="sm">Login</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 healthcare-grid-bg opacity-40" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="container relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-primary/20 bg-accent text-accent-foreground text-sm font-medium">
              <Activity className="h-4 w-4" /> AI-Powered Healthcare Platform
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              Health<span className="gradient-text">Grid</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
              The Intelligent Healthcare Network
            </p>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10">
              An AI-powered bridge connecting traditional and modern healthcare systems — enabling seamless interoperability, real-time intelligence, and universal health access.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login?role=citizen">
                <Button size="lg" className="gradient-primary text-primary-foreground px-8 gap-2">
                  Login as Citizen <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/login?role=hospital">
                <Button size="lg" variant="outline" className="px-8 gap-2">
                  Login as Hospital <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5 }} className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Platform Features</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">Comprehensive healthcare intelligence at your fingertips</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={f.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card-hover rounded-xl p-6">
                <f.icon className={`h-10 w-10 mb-4 ${f.color}`} />
                <h3 className="font-display text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-border/50">
        <div className="container text-center text-sm text-muted-foreground">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Activity className="h-4 w-4 text-primary" />
            <span className="font-display font-semibold gradient-text">HealthGrid</span>
          </div>
          © 2024 HealthGrid. AI-powered healthcare interoperability platform.
        </div>
      </footer>
    </div>
  );
}
