import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import lotusIcon from "@/assets/lotus-icon.png";

const Footer = () => (
  <footer className="bg-temple-brown text-temple-cream">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={lotusIcon} alt="Lotus" className="w-8 h-8 brightness-200" />
            <span className="font-heading text-lg">Vaishnava Homa</span>
          </div>
          <p className="text-sm opacity-80 leading-relaxed">
            Authentic Vaishnava Yajna ceremonies performed with devotion and adherence to traditional Vedic principles.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-sm uppercase tracking-wider mb-4 text-gold">Quick Links</h4>
          <div className="space-y-2">
            {[
              { to: "/seva", label: "Seva & Donations" },
              { to: "/booking", label: "Request a yajna" },
              { to: "/about", label: "About Us" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="block text-sm opacity-80 hover:opacity-100 hover:text-gold transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading text-sm uppercase tracking-wider mb-4 text-gold">Contact</h4>
          <div className="space-y-3 text-sm opacity-80">
            <div className="flex items-center gap-2"><Mail size={16} /> info@vaishnavahoma.org</div>
            <div className="flex items-center gap-2"><Phone size={16} /> +91 96091 15016</div>
            <div className="flex items-center gap-2"><MapPin size={16} /> Krishna Balaram Temple, Mayapur</div>
          </div>
        </div>
      </div>

      <div className="border-t border-temple-cream/20 mt-8 pt-6 text-center text-xs opacity-60">
        <p>🙏 Hare Krishna • All donations support sacred seva activities</p>
      </div>
    </div>
  </footer>
);

export default Footer;
