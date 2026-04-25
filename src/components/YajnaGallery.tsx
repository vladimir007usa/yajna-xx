import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading";
import gallery1 from "@/assets/yajna-gallery-1.jpg";
import vcfImg from "@/assets/vcf-education.png";
import gallery3 from "@/assets/yajna-gallery-3.jpg";

const YajnaGallery = () => {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="✨ Know about us" 
          subtitle="Explore the profound meaning and visual splendor of our sacred Vedic traditions"
        />

        <div className="max-w-5xl mx-auto space-y-24 mt-16">
          {/* Row 1: Text Left, Image Right */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6 order-2 md:order-1">
              <h3 className="font-heading text-3xl font-semibold text-foreground">Sacred Fire Rituals</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Yajna is more than a ceremony; it's a sacred connection with the divine through the medium of fire. 
                Our rituals are performed with authentic Vedic mantras and the highest standards of purity.
              </p>
              <Link 
                to="/our-yajna" 
                className="inline-block gradient-saffron text-primary-foreground px-8 py-3 rounded-md font-heading text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                🎥 View Gallery & Videos
              </Link>
            </div>
            <div className="flex-1 order-1 md:order-2">
              <div className="rounded-2xl overflow-hidden shadow-temple border-2 border-gold/20 transform hover:scale-[1.02] transition-transform duration-500">
                <img src={gallery1} alt="Sacred Yajna" className="w-full h-auto object-cover aspect-[4/3]" />
              </div>
            </div>
          </div>

          {/* Row 2: Image Left, Text Right (VCF Section) */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="rounded-2xl overflow-hidden shadow-temple border-2 border-gold/20 transform hover:scale-[1.02] transition-transform duration-500">
                <img src={vcfImg} alt="Varnasrama College Foundation" className="w-full h-auto object-cover aspect-[4/3]" />
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <h3 className="font-heading text-3xl font-semibold text-foreground">Varnasrama College Foundation</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                VCF aims to support the development of Daiva Varnasrama Dharma by offering Vedic education 
                related to the eternal principles of Sanatana Dharma.
              </p>
              <Link 
                to="/vcf" 
                className="inline-block border border-primary text-primary px-8 py-3 rounded-md font-heading text-sm uppercase tracking-wider hover:bg-primary/5 transition-colors"
              >
                Learn More About VCF
              </Link>
            </div>
          </div>

          {/* Row 3: Text Left, Image Right */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6 order-2 md:order-1">
              <h3 className="font-heading text-3xl font-semibold text-foreground">Spiritual Transformation</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Participating in a Yajna brings peace, prosperity, and spiritual upliftment. 
                It is an invitation to invoke divine grace into your life and the lives of your loved ones.
              </p>
            </div>
            <div className="flex-1 order-1 md:order-2">
              <div className="rounded-2xl overflow-hidden shadow-temple border-2 border-gold/20 transform hover:scale-[1.02] transition-transform duration-500">
                <img src={gallery3} alt="Spiritual Growth" className="w-full h-auto object-cover aspect-[4/3]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YajnaGallery;
