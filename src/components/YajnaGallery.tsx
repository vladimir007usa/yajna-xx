import SectionHeading from "./SectionHeading";
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";

const YajnaGallery = () => {
  const videos = [
    {
      id: "EVjJb2zg3JM",
      title: "Sacred Yajna Ceremony - Part 1",
      url: "https://www.youtube.com/embed/EVjJb2zg3JM?si=y1i1tBx0j0rel878"
    },
    {
      id: "STP9sCP5Mhw",
      title: "Sacred Yajna Ceremony - Part 2",
      url: "https://www.youtube.com/embed/STP9sCP5Mhw?si=VgIruQ3OibG7oBz_"
    }
  ];

  const images = [gallery1, gallery2, gallery3, gallery4];

  return (
    <section className="py-20 gradient-warm overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="📿 Know about Yajna!" 
          subtitle="Experience the sacred atmosphere and ancient traditions through our visual gallery"
        />

        <div className="max-w-6xl mx-auto">
          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {videos.map((video) => (
              <div 
                key={video.id} 
                className="relative aspect-video rounded-xl overflow-hidden border-2 border-gold/30 shadow-temple transform hover:scale-[1.02] transition-all duration-300"
              >
                <iframe
                  src={video.url}
                  title={video.title}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ))}
          </div>

          {/* Pictures Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((img, index) => (
              <div 
                key={index}
                className="group relative aspect-square rounded-lg overflow-hidden border border-gold/20 hover:border-gold transition-colors"
              >
                <img 
                  src={img} 
                  alt={`Sacred Yajna moments ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-temple-brown/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default YajnaGallery;
