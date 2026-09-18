import SectionHeading from "@/components/SectionHeading";
import BackButton from "@/components/BackButton";
import vcfImg from "@/assets/vcf-education.png"; // I'll need to move the generated image here

const VCF = () => {
  const pillars = [
    { title: "Satyam", desc: "Truthfulness - The foundation of dharma" },
    { title: "Daya", desc: "Compassion - Extending mercy to all living beings" },
    { title: "Tapah", desc: "Discipline - Spiritual austerity for growth" },
    { title: "Saucam", desc: "Cleanliness - Purity in mind, body, and soul" },
  ];

  return (
    <main className="pt-16">
      <section className="py-20 gradient-warm overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="mb-8 max-w-4xl mx-auto">
            <BackButton />
          </div>

          <SectionHeading 
            title="🏛️ Varnasrama College Foundation" 
            subtitle="Fulfilling the vision of Srila Prabhupada for a balanced and spiritual social system"
          />

          <div className="max-w-4xl mx-auto space-y-12">
            <div className="rounded-2xl overflow-hidden shadow-temple border-2 border-gold/20">
              <img src={vcfImg} alt="VCF Education" className="w-full h-auto object-cover aspect-video" />
            </div>

            <div className="bg-card border border-border rounded-xl p-8 space-y-6">
              <h3 className="font-heading text-2xl font-semibold text-foreground">Our Mission & Vision</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Varnasrama College Foundation (VCF) is offering devotees a unique opportunity to fulfill the desire of His Divine Grace A. C. Bhaktivedanta Swami Srila Prabhupada to support the development of Daiva Varnasrama Dharma.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                VCF aims to support the development of Daiva Varnasrama Dharma by offering online and on-site Vedic education related to the eternal principles and concepts of Sanatana Dharma.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="font-heading text-2xl font-semibold text-foreground">A Three-Prong Approach</h3>
                <ul className="space-y-4">
                  {[
                    "Establishing Varnasrama Colleges wherever there are Krishna conscious centers",
                    "Reviving the Vedic traditional educational system of Gurukulas",
                    "Revitalizing the traditional Vedic Eco Villages"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="text-primary font-bold text-lg">{i + 1}.</span>
                      <p className="text-muted-foreground">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-primary/5 rounded-xl p-8 border border-primary/20">
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">The Four Pillars</h3>
                <div className="grid grid-cols-1 gap-4">
                  {pillars.map((p) => (
                    <div key={p.title} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <div>
                        <span className="font-semibold text-foreground">{p.title}:</span>
                        <span className="text-muted-foreground text-sm ml-2">{p.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center py-8">
              <a 
                href="https://vc-foundation.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block gradient-saffron text-primary-foreground px-10 py-4 rounded-md font-heading text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                Visit Official Website
              </a>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <BackButton />
          </div>
        </div>
      </section>
    </main>
  );
};

export default VCF;
