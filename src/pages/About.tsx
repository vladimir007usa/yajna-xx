import SectionHeading from "@/components/SectionHeading";
import { BookOpen, Flame, Heart, Shield } from "lucide-react";
import BackButton from "@/components/BackButton";

const values = [
  { icon: BookOpen, title: "Proper Mantra Chanting", desc: "Every mantra recited with precision and devotion" },
  { icon: Flame, title: "Fire Offerings (Ahuti)", desc: "Sacred offerings made into the consecrated fire" },
  { icon: Heart, title: "Sankalpa for the Devotee", desc: "Personal intention set for each ceremony" },
  { icon: Shield, title: "Strict Spiritual Discipline", desc: "Adherence to purity and Vaishnava standards" },
];

const About = () => (
  <main className="pt-16">
    <section className="py-20 gradient-warm">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="mb-8">
          <BackButton />
        </div>
        
        <SectionHeading
          title="🙏 About Our Vaishnava Tradition"
          subtitle="Our Yajnas are performed by experienced devotees following authentic Vaishnava traditions."
        />
        <p className="text-muted-foreground leading-relaxed text-center mb-12">
          Our mission is to connect devotees worldwide with sacred Vedic rituals in a simple and accessible way. Each ceremony is a bridge between the material and spiritual worlds.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-card border border-border rounded-lg p-6 flex gap-4 items-start hover:shadow-temple transition-shadow">
              <v.icon className="text-primary flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-heading text-sm font-semibold mb-1">{v.title}</h3>
                <p className="text-muted-foreground text-sm">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <BackButton />
        </div>
      </div>
    </section>
  </main>
);

export default About;
