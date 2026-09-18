import SectionHeading from "@/components/SectionHeading";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import BackButton from "@/components/BackButton";

const contactInfo = [
  { icon: Mail, label: "Email", value: "info@vaishnavahoma.org", href: "mailto:info@vaishnavahoma.org" },
  { icon: Phone, label: "Phone", value: "+91 96091 15016", href: "tel:+919609115016" },
  { icon: MessageCircle, label: "WhatsApp", value: "+91 96091 15016", href: "https://wa.me/919609115016?text=Hare%20Krishna!%0AI%20would%20like%20to%20request%20for%20a%20Yajna." },
  { icon: MapPin, label: "Location", value: "Varnasrama College Foundation, Mayapur", href: "https://www.google.com/maps/place/Varnasrama+College+Foundation/@23.4334191,88.4065862,819m/data=!3m1!1e3!4m6!3m5!1s0x39f91fc4621d38f7:0xc492f193c188550c!8m2!3d23.4333915!4d88.409497!16s%2Fg%2F11vqp4zd28" },
];

const Contact = () => (
  <main className="pt-16">
    <section className="py-20 gradient-warm">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8 max-w-2xl mx-auto">
          <BackButton />
        </div>

        <SectionHeading
          title="📩 Get in Touch"
          subtitle="We are honored to assist you in arranging your sacred ceremony."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
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

            <div className="bg-card border border-border rounded-lg p-8 mt-8">
              <p className="text-lg font-heading text-foreground mb-2">🙏</p>
              <p className="text-muted-foreground leading-relaxed">
                We are happy to assist you in organizing your sacred ceremony. Feel free to reach out with any questions about our Yajna services.
              </p>
            </div>
          </div>

          <div className="h-full min-h-[400px] rounded-lg overflow-hidden border border-border shadow-temple">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6882.971475058872!2d88.4065862!3d23.4334191!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f91fc4621d38f7%3A0xc492f193c188550c!2sVarnasrama%20College%20Foundation!5e1!3m2!1sen!2sin!4v1777217037840!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: "400px" }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <BackButton />
        </div>
      </div>
    </section>
  </main>
);

export default Contact;
