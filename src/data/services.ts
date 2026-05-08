import type { Icon } from "@phosphor-icons/react";
import { ArrowsClockwise, Drop, House, HouseLine, MagnifyingGlass, Shield } from "@phosphor-icons/react";

export interface ServiceData {
  slug: string;
  name: string;
  shortDesc: string;
  heroDesc: string;
  icon: Icon;
  included: string[];
  whyChoose: string[];
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
  metaTitle: string;
  metaDesc: string;
}

export const services: ServiceData[] = [
  {
    slug: "roof-repairs",
    name: "Roof Repairs",
    shortDesc: "We fix leaks, damaged tiles, and structural issues quickly and effectively. Our emergency repair service ensures your property stays protected.",
    heroDesc: "We fix leaks, damaged tiles, and structural issues quickly and effectively. Our emergency repair service ensures your property stays protected. Phoenix Roofing Ltd provides professional roof repairs services across Bristol.",
    icon: HouseLine,
    included: [
      "Free initial consultation and assessment",
      "Fully qualified and experienced tradespeople",
      "Quality materials from trusted suppliers",
      "Full clean-up on completion",
      "Workmanship guarantee on all work",
      "Fully insured for your peace of mind"
    ],
    whyChoose: [
      "Experienced local team with an excellent reputation.",
      "We use only high-quality materials for lasting results.",
      "Transparent pricing with no hidden costs.",
      "Fully insured and guaranteed work."
    ],
    faqs: [
      { q: "How much does roof repairs cost?", a: "Every job is different. We offer free, no-obligation quotes so you know exactly what to expect before any work begins." },
      { q: "How long does the work usually take?", a: "Timescales depend on the scope of the job. We will give you a clear timeline during your free consultation." },
      { q: "Are you fully insured?", a: "Yes. We carry full public liability insurance and all our work is guaranteed." }
    ],
    relatedSlugs: [],
    metaTitle: "Roof Repairs in Bristol | Phoenix Roofing Ltd",
    metaDesc: "Professional roof repairs in Bristol and Bristol. Phoenix Roofing Ltd offers free quotes, quality workmanship, and fully insured services."
  },
  {
    slug: "roof-replacement",
    name: "Roof Replacement",
    shortDesc: "Complete roof replacement using high-quality materials and expert installation. We handle everything from planning to cleanup.",
    heroDesc: "Complete roof replacement using high-quality materials and expert installation. We handle everything from planning to cleanup. Phoenix Roofing Ltd provides professional roof replacement services across Bristol.",
    icon: ArrowsClockwise,
    included: [
      "Free initial consultation and assessment",
      "Fully qualified and experienced tradespeople",
      "Quality materials from trusted suppliers",
      "Full clean-up on completion",
      "Workmanship guarantee on all work",
      "Fully insured for your peace of mind"
    ],
    whyChoose: [
      "Experienced local team with an excellent reputation.",
      "We use only high-quality materials for lasting results.",
      "Transparent pricing with no hidden costs.",
      "Fully insured and guaranteed work."
    ],
    faqs: [
      { q: "How much does roof replacement cost?", a: "Every job is different. We offer free, no-obligation quotes so you know exactly what to expect before any work begins." },
      { q: "How long does the work usually take?", a: "Timescales depend on the scope of the job. We will give you a clear timeline during your free consultation." },
      { q: "Are you fully insured?", a: "Yes. We carry full public liability insurance and all our work is guaranteed." }
    ],
    relatedSlugs: [],
    metaTitle: "Roof Replacement in Bristol | Phoenix Roofing Ltd",
    metaDesc: "Professional roof replacement in Bristol and Bristol. Phoenix Roofing Ltd offers free quotes, quality workmanship, and fully insured services."
  },
  {
    slug: "new-roof-installation",
    name: "New Roof Installation",
    shortDesc: "Professional installation of new roofing systems for extensions and new builds. We work with all roofing materials to suit your property.",
    heroDesc: "Professional installation of new roofing systems for extensions and new builds. We work with all roofing materials to suit your property. Phoenix Roofing Ltd provides professional new roof installation services across Bristol.",
    icon: House,
    included: [
      "Free initial consultation and assessment",
      "Fully qualified and experienced tradespeople",
      "Quality materials from trusted suppliers",
      "Full clean-up on completion",
      "Workmanship guarantee on all work",
      "Fully insured for your peace of mind"
    ],
    whyChoose: [
      "Experienced local team with an excellent reputation.",
      "We use only high-quality materials for lasting results.",
      "Transparent pricing with no hidden costs.",
      "Fully insured and guaranteed work."
    ],
    faqs: [
      { q: "How much does new roof installation cost?", a: "Every job is different. We offer free, no-obligation quotes so you know exactly what to expect before any work begins." },
      { q: "How long does the work usually take?", a: "Timescales depend on the scope of the job. We will give you a clear timeline during your free consultation." },
      { q: "Are you fully insured?", a: "Yes. We carry full public liability insurance and all our work is guaranteed." }
    ],
    relatedSlugs: [],
    metaTitle: "New Roof Installation in Bristol | Phoenix Roofing Ltd",
    metaDesc: "Professional new roof installation in Bristol and Bristol. Phoenix Roofing Ltd offers free quotes, quality workmanship, and fully insured services."
  },
  {
    slug: "roof-inspections",
    name: "Roof Inspections",
    shortDesc: "Thorough roof surveys to identify potential problems before they become costly repairs. We provide detailed reports with honest recommendations.",
    heroDesc: "Thorough roof surveys to identify potential problems before they become costly repairs. We provide detailed reports with honest recommendations. Phoenix Roofing Ltd provides professional roof inspections services across Bristol.",
    icon: MagnifyingGlass,
    included: [
      "Free initial consultation and assessment",
      "Fully qualified and experienced tradespeople",
      "Quality materials from trusted suppliers",
      "Full clean-up on completion",
      "Workmanship guarantee on all work",
      "Fully insured for your peace of mind"
    ],
    whyChoose: [
      "Experienced local team with an excellent reputation.",
      "We use only high-quality materials for lasting results.",
      "Transparent pricing with no hidden costs.",
      "Fully insured and guaranteed work."
    ],
    faqs: [
      { q: "How much does roof inspections cost?", a: "Every job is different. We offer free, no-obligation quotes so you know exactly what to expect before any work begins." },
      { q: "How long does the work usually take?", a: "Timescales depend on the scope of the job. We will give you a clear timeline during your free consultation." },
      { q: "Are you fully insured?", a: "Yes. We carry full public liability insurance and all our work is guaranteed." }
    ],
    relatedSlugs: [],
    metaTitle: "Roof Inspections in Bristol | Phoenix Roofing Ltd",
    metaDesc: "Professional roof inspections in Bristol and Bristol. Phoenix Roofing Ltd offers free quotes, quality workmanship, and fully insured services."
  },
  {
    slug: "guttering-services",
    name: "Guttering Services",
    shortDesc: "Installation, repair, and cleaning of gutters and downpipes. We ensure proper drainage to protect your property from water damage.",
    heroDesc: "Installation, repair, and cleaning of gutters and downpipes. We ensure proper drainage to protect your property from water damage. Phoenix Roofing Ltd provides professional guttering services services across Bristol.",
    icon: Drop,
    included: [
      "Free initial consultation and assessment",
      "Fully qualified and experienced tradespeople",
      "Quality materials from trusted suppliers",
      "Full clean-up on completion",
      "Workmanship guarantee on all work",
      "Fully insured for your peace of mind"
    ],
    whyChoose: [
      "Experienced local team with an excellent reputation.",
      "We use only high-quality materials for lasting results.",
      "Transparent pricing with no hidden costs.",
      "Fully insured and guaranteed work."
    ],
    faqs: [
      { q: "How much does guttering services cost?", a: "Every job is different. We offer free, no-obligation quotes so you know exactly what to expect before any work begins." },
      { q: "How long does the work usually take?", a: "Timescales depend on the scope of the job. We will give you a clear timeline during your free consultation." },
      { q: "Are you fully insured?", a: "Yes. We carry full public liability insurance and all our work is guaranteed." }
    ],
    relatedSlugs: [],
    metaTitle: "Guttering Services in Bristol | Phoenix Roofing Ltd",
    metaDesc: "Professional guttering services in Bristol and Bristol. Phoenix Roofing Ltd offers free quotes, quality workmanship, and fully insured services."
  },
  {
    slug: "roof-maintenance",
    name: "Roof Maintenance",
    shortDesc: "Regular maintenance programmes to extend your roof\'s lifespan and prevent costly repairs. We keep your roof in peak condition year-round.",
    heroDesc: "Regular maintenance programmes to extend your roof\'s lifespan and prevent costly repairs. We keep your roof in peak condition year-round. Phoenix Roofing Ltd provides professional roof maintenance services across Bristol.",
    icon: Shield,
    included: [
      "Free initial consultation and assessment",
      "Fully qualified and experienced tradespeople",
      "Quality materials from trusted suppliers",
      "Full clean-up on completion",
      "Workmanship guarantee on all work",
      "Fully insured for your peace of mind"
    ],
    whyChoose: [
      "Experienced local team with an excellent reputation.",
      "We use only high-quality materials for lasting results.",
      "Transparent pricing with no hidden costs.",
      "Fully insured and guaranteed work."
    ],
    faqs: [
      { q: "How much does roof maintenance cost?", a: "Every job is different. We offer free, no-obligation quotes so you know exactly what to expect before any work begins." },
      { q: "How long does the work usually take?", a: "Timescales depend on the scope of the job. We will give you a clear timeline during your free consultation." },
      { q: "Are you fully insured?", a: "Yes. We carry full public liability insurance and all our work is guaranteed." }
    ],
    relatedSlugs: [],
    metaTitle: "Roof Maintenance in Bristol | Phoenix Roofing Ltd",
    metaDesc: "Professional roof maintenance in Bristol and Bristol. Phoenix Roofing Ltd offers free quotes, quality workmanship, and fully insured services."
  }
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find(s => s.slug === slug);
}
