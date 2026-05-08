import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTAPanel from "@/components/CTAPanel";
import { galleryImages } from "@/data/gallery";

const galleryJsonLd = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "name": "Roofing Projects — Phoenix Roofing Ltd",
  "description": "Recent roofing projects completed by Phoenix Roofing Ltd across Bristol, the Bristol and Bristol, and Bristol",
  "author": { "@type": "Organization", "name": "Phoenix Roofing Ltd" },
  "image": [
    { "@type": "ImageObject", "contentUrl": "https://preview.vercel.app/images/pitched-roof-replacement-red-tiles-bristol-phoenix-roofing-ltd.jpg", "name": "Pitched roof replacement with red clay tiles — Bristol", "description": "Pitched roof replacement with red clay tiles completed by Phoenix Roofing Ltd in Bristol" },
    { "@type": "ImageObject", "contentUrl": "https://preview.vercel.app/images/new-roof-installation-red-tiles-aerial-view-phoenix-roofing-ltd-bristol.jpg", "name": "New roof installation aerial view — Bristol", "description": "Aerial view of new roof installation with red tiles by Phoenix Roofing Ltd serving Bristol and Bristol" },
    { "@type": "ImageObject", "contentUrl": "https://preview.vercel.app/images/roof-replacement-anthracite-grey-tiles-lancashire-phoenix-roofing-ltd.jpg", "name": "Roof replacement anthracite grey tiles — Bristol", "description": "Full roof replacement with anthracite grey concrete tiles completed by Phoenix Roofing Ltd in Bristol" },
    { "@type": "ImageObject", "contentUrl": "https://preview.vercel.app/images/new-roof-grey-tiles-sunset-fylde-coast-phoenix-roofing-ltd.jpg", "name": "New roof grey tiles sunset — Bristol and Bristol", "description": "New roof installation with grey interlocking tiles on Bristol and Bristol property by Phoenix Roofing Ltd" },
    { "@type": "ImageObject", "contentUrl": "https://preview.vercel.app/images/pitched-roof-installation-red-tiles-hip-ridge-phoenix-roofing-ltd-lancashire.jpg", "name": "Pitched roof installation hip ridge detail — Bristol", "description": "Pitched roof installation showing hip and ridge tile detail completed by Phoenix Roofing Ltd in Bristol" },
    { "@type": "ImageObject", "contentUrl": "https://preview.vercel.app/images/roof-replacement-red-clay-tiles-chimney-stack-phoenix-roofing-ltd-bristol.jpg", "name": "Roof replacement red clay tiles chimney — Bristol", "description": "Roof replacement with red clay tiles and chimney stack by Phoenix Roofing Ltd serving Bristol" },
    { "@type": "ImageObject", "contentUrl": "https://preview.vercel.app/images/lead-flashing-chimney-repair-phoenix-roofing-ltd-bristol-lancashire.jpg", "name": "Lead flashing chimney repair — Bristol", "description": "Lead flashing and chimney repair completed by Phoenix Roofing Ltd in Bristol and Bristol" },
    { "@type": "ImageObject", "contentUrl": "https://preview.vercel.app/images/roof-repair-red-interlocking-tiles-lancashire-phoenix-roofing-ltd.jpg", "name": "Roof repair red interlocking tiles — Bristol", "description": "Roof repair with red interlocking tiles on residential property by Phoenix Roofing Ltd in Bristol" },
  ],
};

const Gallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);
  const prevImage = useCallback(() => setLightbox(prev => prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null), []);
  const nextImage = useCallback(() => setLightbox(prev => prev !== null ? (prev + 1) % galleryImages.length : null), []);

  useEffect(() => {
    if (lightbox === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, closeLightbox, prevImage, nextImage]);
  return (
    <Layout>
      <SEO
        title="Our Work | Phoenix Roofing Ltd"
        description="View completed roofing projects by Phoenix Roofing Ltd across the Bristol & Bristol. Roof replacements, repairs, and more."
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(galleryJsonLd) }} />

      <section className="section-dark section-padding">
        <div className="container-content">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Gallery" }]} />
          <h1 className="text-3xl md:text-5xl text-secondary-foreground mb-4">Our Work</h1>
          <div className="heading-rule" />
        </div>
      </section>

      <section className="section-light section-padding">
        <div className="container-content">
          {/* Masonry grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setLightbox(i)}
                className="w-full break-inside-avoid rounded-lg overflow-hidden border border-border hover:border-primary transition-colors group cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  title={img.title}
                  loading={img.loading}
                  decoding="async"
                  width={img.width}
                  height={img.height}
                  {...(img.fetchPriority ? { fetchPriority: img.fetchPriority } : {})}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox via portal */}
      {lightbox !== null && createPortal(
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-primary transition-colors z-10"
            aria-label="Close lightbox"
          >
            ✕
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 text-white text-5xl hover:text-primary transition-colors z-10"
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 text-white text-5xl hover:text-primary transition-colors z-10"
            aria-label="Next image"
          >
            ›
          </button>
          <div className="max-w-5xl max-h-[90vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryImages[lightbox].src}
              alt={galleryImages[lightbox].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-white font-sans mt-4 text-center text-lg">{galleryImages[lightbox].title}</p>
          </div>
        </div>,
        document.body
      )}

      <CTAPanel />
    </Layout>
  );
};

export default Gallery;
