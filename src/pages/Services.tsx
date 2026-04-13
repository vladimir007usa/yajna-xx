import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";

const allServices = [
  { title: "Standard Yajna", priceINR: "₹4,500", priceUSD: "$50", features: ["Traditional Homa ceremony", "Sankalpa for devotee", "Basic offerings"] },
  { title: "Elaborate Yajna", priceINR: "₹6,400", priceUSD: "$70", features: ["Extended ritual process", "Additional offerings", "Enhanced prayers"] },
  { title: "Yajna + Full-Day Gauseva", priceINR: "₹10,000", priceUSD: "$108", features: ["Complete Yajna", "Full-day feeding of cows and bulls", "Special blessings for prosperity"], featured: true },
  { title: "Yajna + Gauseva + Vaishnava Bhoj", priceINR: "₹15,000", priceUSD: "$150", features: ["Yajna ceremony", "Full-day Gauseva", "Vaishnava Bhoj (feeding devotees)"] },
  { title: "Complete Seva Package", priceINR: "₹20,000", priceUSD: "$200", features: ["Yajna ceremony", "Full-day Gauseva", "Krishna Balarama Seva", "Vaishnava Bhoj"], featured: true },
];

const Services = () => (
  <main className="pt-16">
    <section className="py-20 gradient-warm">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="🌺 Yajna & Seva Options"
          subtitle="Choose the sacred offering that resonates with your heart and intention"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {allServices.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>

        <div className="mt-16 max-w-2xl mx-auto bg-card border border-border rounded-lg p-8 text-center">
          <h3 className="font-heading text-lg font-semibold mb-4">All Yajnas Include</h3>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-foreground">
            <span>✔ Sacred fire ritual</span>
            <span>✔ Mantra chanting</span>
            <span>✔ Feeding of cows & bulls</span>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default Services;
