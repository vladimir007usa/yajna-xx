import SectionHeading from "@/components/SectionHeading";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import BackButton from "@/components/BackButton";

const contactInfo = [
  { icon: Mail, label: "Email", value: "info@vaishnavahoma.org", href: "mailto:info@vaishnavahoma.org" },
  { icon: Phone, label: "Phone", value: "+91 96091 15016", href: "tel:+919609115016" },
  { icon: MessageCircle, label: "WhatsApp", value: "+91 96091 15016", href: "https://wa.me/919609115016?text=Hare%20Krishna!%0AI%20would%20like%20to%20request%20for%20a%20Yajna." },
  { icon: MapPin, label: "Location", value: "Krishna Balaram Temple, Mayapur", href: "#" },
];

const Contact = () => (
  <main className="pt-16">
    <section className="py-20 gradient-warm">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="mb-8">
          <BackButton />
        </div>

        <SectionHeading
          title="📩 Get in Touch"
          subtitle="We are honored to assist you in arranging your sacred ceremony."
        />

        <div className="space-y-4">
          {contactInfo.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 bg-card border border-border rounded-lg p-5 hover:shadow-temple transition-shadow"
            >
              <div className="w-10 h-10 rounded-full gradient-saffron flex items-center justify-center flex-shrink-0">
                <c.icon className="text-primary-foreground" size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{c.label}</p>
                <p className="text-sm text-muted-foreground">{c.value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center bg-card border border-border rounded-lg p-8">
          <p className="text-lg font-heading text-foreground mb-2">🙏</p>
          <p className="text-muted-foreground leading-relaxed">
            We are happy to assist you in organizing your sacred ceremony. Feel free to reach out with any questions about our Yajna services.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <BackButton />
        </div>
      </div>
    </section>
  </main>
);

export default Contact;
