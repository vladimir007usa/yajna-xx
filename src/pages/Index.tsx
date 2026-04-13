import { Link } from "react-router-dom";
import { Flame, Heart, Sparkles, ShieldCheck, Users, BookOpen } from "lucide-react";
import heroImg from "@/assets/hero-homa.jpg";
import gausevaImg from "@/assets/gauseva.jpg";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";

const features = [
  { icon: Flame, title: "Authentic Rituals", desc: "Traditional Vedic fire ceremonies with proper mantras" },
  { icon: Heart, title: "Gauseva Included", desc: "Every Yajna followed by sacred cow feeding" },
  { icon: Sparkles, title: "Spiritual Benefits", desc: "Divine blessings for peace and prosperity" },
];

const services = [
  { title: "Standard Yajna", priceINR: "₹4,500", priceUSD: "$50", features: ["Traditional Homa ceremony", "Sankalpa for devotee", "Basic offerings"] },
  { title: "Elaborate Yajna", priceINR: "₹6,400", priceUSD: "$70", features: ["Extended ritual process", "Additional offerings", "Enhanced prayers"] },
  { title: "Yajna + Full-Day Gauseva", priceINR: "₹10,000", priceUSD: "$108", features: ["Complete Yajna", "Full-day cow feeding", "Special blessings"], featured: true },
];

const testimonials = [
  { text: "A truly beautiful and authentic spiritual experience. The Yajna was performed with utmost devotion.", author: "Radha D." },
  { text: "Highly authentic rituals. I felt a deep connection with the divine during the entire ceremony.", author: "Govind S." },
];

const Index = () => (
  <main>
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Sacred Homa fire ceremony" className="w-full h-full object-cover" width={1920} height={1024} />
        <div className="absolute inset-0 bg-temple-brown/60" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-3xl animate-fade-up">
        <p className="text-gold font-heading text-sm uppercase tracking-[0.3em] mb-4">🔥 Sacred Vedic Traditions</p>
        <h1 className="font-heading text-4xl md:text-6xl font-bold text-temple-cream leading-tight mb-6">
          Sacred Vaishnava Homa for Divine Blessings
        </h1>
        <p className="text-temple-cream/80 text-lg mb-8 leading-relaxed">
          Perform traditional Yajna for birthdays, anniversaries, auspicious beginnings, and spiritual upliftment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/booking" className="gradient-saffron text-primary-foreground px-8 py-3 rounded-md font-heading text-sm uppercase tracking-wider hover:opacity-90 transition-opacity">
            📿 Book a Yajna
          </Link>
          <Link to="/services" className="border border-gold text-gold px-8 py-3 rounded-md font-heading text-sm uppercase tracking-wider hover:bg-gold/10 transition-colors">
            🙏 View Seva Options
          </Link>
        </div>
      </div>
    </section>

    {/* Intro */}
    <section className="py-20 gradient-warm">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="✨ Invoke Divine Grace Through Sacred Fire Rituals"
          subtitle="We offer authentic Vaishnava Homa (Yajna) ceremonies performed with devotion and adherence to traditional Vedic principles."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <p className="text-muted-foreground leading-relaxed mb-4">These sacred rituals are conducted for:</p>
            <ul className="space-y-2 text-foreground">
              {["Birthdays", "Wedding Anniversaries", "Auspicious Beginnings", "Shraddha Rituals", "Special Spiritual Intentions"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-primary">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center">
            <p className="text-muted-foreground leading-relaxed">
              Each Yajna is performed with purity, devotion, and <em>sankalpa</em> (intent) for your well-being and spiritual growth. Our experienced devotees ensure every ritual follows authentic Vaishnava traditions.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="text-center p-8 rounded-lg bg-card border border-border hover:shadow-temple transition-shadow">
              <f.icon className="mx-auto text-primary mb-4 animate-flame-flicker" size={40} />
              <h3 className="font-heading text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <SectionHeading title="Why Choose Us" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { icon: ShieldCheck, label: "Authentic Vaishnava Tradition" },
            { icon: Users, label: "Experienced Devotee Priests" },
            { icon: BookOpen, label: "Complete Ritual Process" },
            { icon: Heart, label: "Seva Included" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <item.icon className="mx-auto text-primary mb-2" size={32} />
              <p className="text-sm font-semibold text-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Services Preview */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading title="🌼 Our Yajna Offerings" subtitle="Choose the seva that resonates with your heart" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/services" className="text-primary font-heading text-sm uppercase tracking-wider hover:underline">
            View All Packages →
          </Link>
        </div>
      </div>
    </section>

    {/* Gauseva Highlight */}
    <section className="py-20 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <h2 className="font-heading text-3xl font-semibold mb-4">🐄 Seva Beyond Ritual</h2>
            <div className="w-16 h-0.5 gradient-saffron mb-6 rounded-full" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              Every Yajna is followed by Gauseva (feeding cows and bulls) — a sacred act that multiplies spiritual benefits and pleases Lord Krishna.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Each Yajna concludes with sacred Gauseva, enhancing spiritual merit and creating a lasting connection with the divine.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-temple">
            <img src={gausevaImg} alt="Sacred Gauseva - feeding cows" loading="lazy" width={1280} height={720} className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>

    {/* Premium Packages */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 text-center">
        <SectionHeading title="🌼 Premium Spiritual Offerings" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-temple transition-shadow">
            <h3 className="font-heading text-lg font-semibold mb-2">Yajna + Gauseva + Vaishnava Bhoj</h3>
            <p className="text-2xl font-heading font-bold text-primary">₹15,000 <span className="text-sm text-muted-foreground">($150)</span></p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-temple transition-shadow">
            <h3 className="font-heading text-lg font-semibold mb-2">Complete Seva Package</h3>
            <p className="text-2xl font-heading font-bold text-primary">₹20,000 <span className="text-sm text-muted-foreground">($200)</span></p>
          </div>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <SectionHeading title="Devotee Experiences" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="bg-card border border-border rounded-lg p-6">
              <p className="text-foreground italic mb-4">🙏 "{t.text}"</p>
              <cite className="text-sm text-muted-foreground not-italic">— {t.author}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="py-20 gradient-saffron text-center">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          📿 Book Your Yajna Today
        </h2>
        <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
          Book your sacred ceremony today and receive divine blessings for you and your family.
        </p>
        <Link to="/booking" className="inline-block bg-primary-foreground text-primary px-10 py-3 rounded-md font-heading text-sm uppercase tracking-wider hover:bg-primary-foreground/90 transition-colors">
          Book Now
        </Link>
      </div>
    </section>
  </main>
);

export default Index;
