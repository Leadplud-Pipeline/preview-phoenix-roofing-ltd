export interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  width: number;
  height: number;
  loading: "eager" | "lazy";
  fetchPriority?: "high";
}

export const galleryImages: GalleryImage[] = [
  {
    src: 'https://www.phoenixroofingltd.co.uk/wp-content/uploads/elementor/thumbs/Phoenix-Roofing-Roof-Repairs-in-Surrey-London-022-pldbe6c4my8lw4947tqnis7p7uscomo8g3c2t9souo.jpeg',
    alt: 'Work completed by Phoenix Roofing Ltd in Bristol',
    title: 'Roofers Project 1',
    width: 800,
    height: 600,
    loading: "eager",
  },
  {
    src: 'https://www.phoenixroofingltd.co.uk/wp-content/uploads/elementor/thumbs/Phoenix-Roofing-Roof-Repairs-in-Surrey-London-015-pldbdytf49ybb8k1fqhmyu40grtez1udr246z23u8g.jpeg',
    alt: 'Work completed by Phoenix Roofing Ltd in Bristol',
    title: 'Roofers Project 2',
    width: 800,
    height: 600,
    loading: "lazy",
  },
  {
    src: 'https://www.phoenixroofingltd.co.uk/wp-content/uploads/2022/03/Phoenix-Roofing-Roof-Repairs-in-Surrey-London-014.jpeg',
    alt: 'Work completed by Phoenix Roofing Ltd in Bristol',
    title: 'Roofers Project 3',
    width: 800,
    height: 600,
    loading: "lazy",
  },
  {
    src: 'https://www.phoenixroofingltd.co.uk/wp-content/uploads/2022/03/Phoenix-Roofing-Roof-Repairs-in-Surrey-London-012.jpeg',
    alt: 'Work completed by Phoenix Roofing Ltd in Bristol',
    title: 'Roofers Project 4',
    width: 800,
    height: 600,
    loading: "lazy",
  },
  {
    src: 'https://www.phoenixroofingltd.co.uk/wp-content/uploads/2022/03/Phoenix-Roofing-Roof-Repairs-in-Surrey-London-009.jpeg',
    alt: 'Work completed by Phoenix Roofing Ltd in Bristol',
    title: 'Roofers Project 5',
    width: 800,
    height: 600,
    loading: "lazy",
  },
  {
    src: 'https://www.phoenixroofingltd.co.uk/wp-content/uploads/2022/03/Phoenix-Roofing-Roof-Repairs-in-Surrey-London-032.jpeg',
    alt: 'Work completed by Phoenix Roofing Ltd in Bristol',
    title: 'Roofers Project 6',
    width: 800,
    height: 600,
    loading: "lazy",
  }
];

export const homepageGalleryImages = galleryImages.slice(0, 4);
