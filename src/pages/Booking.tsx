import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { toast } from "sonner";
import { PhoneInput } from "@/components/ui/phone-input";

const occasions = ["Birthday", "Wedding Anniversary", "Auspicious Beginning", "Shraddha Ritual", "Special Spiritual Intention", "Other"];
const yajnaTypes = [
  "Standard Yajna – ₹4,500",
  "Elaborate Yajna – ₹6,400",
  "Yajna + Full-Day Gauseva – ₹10,000",
  "Yajna + Gauseva + Vaishnava Bhoj – ₹15,000",
  "Complete Seva Package – ₹20,000",
];

const Booking = () => {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", occasion: "", yajnaType: "", date: "", intentions: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.occasion || !form.yajnaType) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success("🙏 Your booking request has been submitted! We will contact you within 24 hours.");
    setForm({ name: "", email: "", phone: "", occasion: "", yajnaType: "", date: "", intentions: "" });
  };

  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <main className="pt-16">
      <section className="py-20 gradient-warm">
        <div className="container mx-auto px-4 max-w-2xl">
          <SectionHeading
            title="📿 Book Your Yajna"
            subtitle="Submit your request and our team will contact you within 24 hours."
          />

          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 space-y-5">
            {[
              { label: "Full Name *", field: "name", type: "text", placeholder: "Enter your full name" },
              { label: "Email *", field: "email", type: "email", placeholder: "your@email.com" },
            ].map((input) => (
              <div key={input.field}>
                <label className="block text-sm font-semibold mb-1 text-foreground">{input.label}</label>
                <input
                  type={input.type}
                  placeholder={input.placeholder}
                  value={(form as Record<string, string>)[input.field]}
                  onChange={(e) => update(input.field, e.target.value)}
                  className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            ))}

            <div>
              <label className="block text-sm font-semibold mb-1 text-foreground">Phone / WhatsApp *</label>
              <PhoneInput
                defaultCountry="IN"
                value={form.phone}
                onChange={(value) => update("phone", value || "")}
                placeholder="Enter phone number"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1 text-foreground">Occasion *</label>
              <select
                value={form.occasion}
                onChange={(e) => update("occasion", e.target.value)}
                className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Select occasion</option>
                {occasions.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1 text-foreground">Yajna Type *</label>
              <select
                value={form.yajnaType}
                onChange={(e) => update("yajnaType", e.target.value)}
                className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Select Yajna type</option>
                {yajnaTypes.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1 text-foreground">Preferred Date</label>
              <input
                type="date"
                value={form.date}
                onChange={(e) => update("date", e.target.value)}
                className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1 text-foreground">Special Intentions</label>
              <textarea
                rows={3}
                placeholder="Any special prayers or intentions..."
                value={form.intentions}
                onChange={(e) => update("intentions", e.target.value)}
                className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full gradient-saffron text-primary-foreground py-3 rounded-md font-heading text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              👉 Submit Booking Request
            </button>
          </form>

          <div className="mt-8 text-center bg-card border border-border rounded-lg p-6">
            <p className="text-muted-foreground text-sm">
              Once your booking is confirmed, donation details will be shared securely via email or WhatsApp.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Booking;
