import { Link } from "react-router-dom";
import { Flame } from "lucide-react";

interface ServiceCardProps {
  title: string;
  priceINR: string;
  priceUSD: string;
  features: string[];
  featured?: boolean;
}

const ServiceCard = ({ title, priceINR, priceUSD, features, featured }: ServiceCardProps) => (
  <div
    className={`rounded-lg p-6 border transition-all hover:-translate-y-1 hover:shadow-temple ${
      featured
        ? "gradient-saffron text-primary-foreground border-transparent"
        : "bg-card border-border"
    }`}
  >
    <Flame className={`mb-3 ${featured ? "text-primary-foreground" : "text-primary"}`} size={28} />
    <h3 className="font-heading text-lg font-semibold mb-2">{title}</h3>
    <div className="mb-4">
      <span className="text-2xl font-heading font-bold">{priceINR}</span>
      <span className={`text-sm ml-2 ${featured ? "opacity-80" : "text-muted-foreground"}`}>({priceUSD})</span>
    </div>
    <ul className="space-y-2 mb-6 text-sm">
      {features.map((f, i) => (
        <li key={i} className="flex items-start gap-2">
          <span>✔</span> {f}
        </li>
      ))}
    </ul>
    <Link
      to="/booking"
      className={`block text-center py-2 px-4 rounded-md text-sm font-semibold transition-colors ${
        featured
          ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          : "gradient-saffron text-primary-foreground hover:opacity-90"
      }`}
    >
      Book Now
    </Link>
  </div>
);

export default ServiceCard;
