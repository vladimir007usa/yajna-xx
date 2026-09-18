import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import gausevaImg from "@/assets/gauseva.jpg";
import { Heart, Sparkles, Sun } from "lucide-react";
import BackButton from "@/components/BackButton";

const sevas = [
  { icon: Heart, title: "Gauseva", desc: "Cow protection & feeding — a most sacred act in Vaishnava tradition" },
  { icon: Sparkles, title: "Vaishnava Bhoj", desc: "Feeding devotees — earning immense spiritual merit" },
  { icon: Sun, title: "Krishna Balarama Seva", desc: "Special service to Their Lordships for divine blessings" },
];

const benefits = ["Removes obstacles", "Brings peace and prosperity", "Pleases the Supreme Lord", "Multiplies spiritual merit"];

const Seva = () => (
  <main className="pt-16">
    <section className="py-20 gradient-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto mb-8">
          <BackButton />
        </div>

        <SectionHeading
          title="🌿 The Power of Seva"
          subtitle="Seva (selfless service) enhances the spiritual potency of every Yajna."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto mb-16">
          <div className="rounded-lg overflow-hidden shadow-temple">
            <img src={gausevaImg} alt="Gauseva" loading="lazy" width={1280} height={720} className="w-full h-auto" />
          </div>
          <div>
            <h3 className="font-heading text-xl font-semibold mb-4">Key Sevas</h3>
            <div className="space-y-4">
              {sevas.map((s) => (
                <div key={s.title} className="flex gap-3 items-start">
                  <s.icon className="text-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-sm">{s.title}</h4>
                    <p className="text-muted-foreground text-sm">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto bg-card border border-border rounded-lg p-8 text-center">
          <h3 className="font-heading text-xl font-semibold mb-6">Spiritual Benefits</h3>
          <div className="grid grid-cols-2 gap-4">
            {benefits.map((b) => (
              <div key={b} className="flex items-center gap-2 text-sm text-foreground">
                <span className="text-primary">✦</span> {b}
              </div>
            ))}
          </div>
          <Link to="/booking" className="inline-block mt-8 gradient-saffron text-primary-foreground px-8 py-3 rounded-md font-heading text-sm uppercase tracking-wider hover:opacity-90 transition-opacity">
            Participate in Seva
          </Link>
        </div>

        <div className="mt-12 flex justify-center">
          <BackButton />
        </div>
      </div>
    </section>
  </main>
);

export default Seva;
