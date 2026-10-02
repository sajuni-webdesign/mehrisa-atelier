/** Central content + brand config. Edit here to rebrand the whole site. */

export const site = {
  name: "Mehrisa Atelier",
  shortName: "Mehrisa",
  tagline: "Couture, woven in grace",
  description:
    "Live demo of a luxury Indian boutique & bridal couture website built with Next.js & React by Sajuni – collections, lookbook, bespoke appointments and WhatsApp enquiries. Want a website like this for your boutique? Contact Saptashi Saha.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mehrisa.sajuni.in",
  locale: "en_IN",
  email: "admin@sajuni.in",
  phone: "+91 9387104400",
  whatsappUrl:
    "https://wa.me/919387104400?text=Hi%20Sajuni!%20I%20saw%20your%20boutique%20website%20demo%20and%20want%20a%20website%20like%20this.",
  designerUrl: "https://sajuni.in",
  address: "Demo website by Sajuni · Silchar, Assam",
  hours: "Tue – Sun · 11:00 am – 8:00 pm",
};

/** Unsplash photo id → used by the custom image loader. */
export const img = (id: string) => `https://images.unsplash.com/photo-${id}`;

export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Bridal", href: "#bridal" },
  { label: "Collections", href: "#collections" },
  { label: "New In", href: "#new-arrivals" },
  { label: "Atelier", href: "#atelier" },
  { label: "Lookbook", href: "#lookbook" },
  { label: "Bespoke", href: "#bespoke" },
];

/** Self-hosted, trimmed & compressed clips (Pexels / Mixkit free licences). */
export const vid = (name: string) => ({ src: `/videos/${name}.mp4`, poster: `/videos/${name}.jpg` });

export type Media = { image: string; video?: { src: string; poster: string } };

export const collections: (Media & { title: string; note: string; count: string; alt: string })[] = [
  {
    title: "Bridal Couture",
    note: "Heirlooms for the big day",
    count: "48 pieces",
    image: img("1740674570259-a47d713a2976"),
    alt: "Bride in a wine velvet lehenga with heavy kundan jewellery",
  },
  {
    title: "Lehengas",
    note: "Twirl-worthy silhouettes",
    count: "72 pieces",
    image: img("1733937140732-2cc70a1d7017"),
    video: vid("col-lehenga"),
    alt: "Model twirling in a red hand-block-printed lehenga",
  },
  {
    title: "Sarees",
    note: "Banarasi, Kanjeevaram & organza",
    count: "96 pieces",
    image: img("1610030469983-98e550d6193c"),
    alt: "Woman draped in a jamuni silk saree against a red backdrop",
  },
  {
    title: "Anarkali & Suits",
    note: "Flowing festive grace",
    count: "54 pieces",
    image: img("1756483509254-3cc48a5a15b2"),
    video: vid("col-suits"),
    alt: "Model in a sea-green silk salwar suit with dupatta",
  },
  {
    title: "Indo-Western",
    note: "Gowns, capes & drapes",
    count: "39 pieces",
    image: img("1571908599538-7e1e6e92b064"),
    alt: "Woman in a champagne gold embellished gown",
  },
  {
    title: "Kurtis & Everyday",
    note: "Chikankari to block prints",
    count: "110 pieces",
    image: img("1763559046515-1b98e82bc6d4"),
    video: vid("col-kurta"),
    alt: "Model in a sea-green silk kurta set with polki jewellery",
  },
];

export type Product = {
  id: string;
  name: string;
  category: "Bridal" | "Lehenga" | "Saree" | "Anarkali" | "Indo-Western" | "Kurta";
  fabric: string;
  price: number;
  compareAt?: number;
  tag?: string;
  image: string;
  alt: string;
};

export const products: Product[] = [
  {
    id: "gulnaar-bridal-lehenga",
    name: "Gulnaar Bridal Lehenga",
    category: "Bridal",
    fabric: "Raw silk · Zardozi & dabka",
    price: 245000,
    tag: "Signature",
    image: img("1654764746225-e63f5e90facd"),
    alt: "Red and gold Gulnaar bridal lehenga with dupatta veil",
  },
  {
    id: "noor-jamuni-saree",
    name: "Noor Jamuni Silk Saree",
    category: "Saree",
    fabric: "Pure Banarasi silk",
    price: 38500,
    tag: "New",
    image: img("1610030469983-98e550d6193c"),
    alt: "Jamuni purple Banarasi silk saree with gold border",
  },
  {
    id: "rosewater-lehenga",
    name: "Rosewater Pink Lehenga",
    category: "Lehenga",
    fabric: "Georgette · Resham & sequin",
    price: 128000,
    compareAt: 142000,
    image: img("1733937140732-2cc70a1d7017"),
    alt: "Rosewater pink lehenga with delicate resham embroidery",
  },
  {
    id: "zardozi-velvet-anarkali",
    name: "Mehfil Velvet Anarkali",
    category: "Anarkali",
    fabric: "Silk velvet · Zardozi",
    price: 64900,
    tag: "Bestseller",
    image: img("1756483488645-5973a1a92e33"),
    alt: "Maroon silk velvet anarkali with zardozi embroidery",
  },
  {
    id: "champagne-mirror-gown",
    name: "Champagne Mirror Gown",
    category: "Indo-Western",
    fabric: "Tulle · Mirror & crystal",
    price: 82000,
    image: img("1571908599538-7e1e6e92b064"),
    alt: "Champagne gold Indo-western gown with mirror work",
  },
  {
    id: "jamdani-lilac-saree",
    name: "Lilac Kanjeevaram Saree",
    category: "Saree",
    fabric: "Kanjeevaram silk · Zari",
    price: 46500,
    tag: "Handwoven",
    image: img("1641699862936-be9f49b1c38d"),
    alt: "Lilac Kanjeevaram silk saree with a zari pallu",
  },
  {
    id: "paisley-bloom-kurta",
    name: "Paisley Bloom Kurta Set",
    category: "Kurta",
    fabric: "Modal silk · Hand block print",
    price: 18900,
    image: img("1763559046515-1b98e82bc6d4"),
    alt: "Maroon paisley printed kurta set with bell sleeves",
  },
  {
    id: "sindoor-bridal-set",
    name: "Sindoor Bridal Ensemble",
    category: "Bridal",
    fabric: "Silk velvet · Gota patti",
    price: 195000,
    tag: "Made to order",
    image: img("1737515024776-03fed700028b"),
    alt: "Sindoor red bridal ensemble with gota patti work",
  },
];

export const lookbook: (Media & { title: string; caption: string; alt: string })[] = [
  { image: img("1756483517695-d0aa21ee1ea1"), title: "Haldi Hues", caption: "Marigold organza for the morning rituals", alt: "Woman in a yellow lehenga in a palace courtyard" },
  { image: img("1756483502816-d7d3547980ad"), video: vid("look-saree"), title: "Six Yards of Sunshine", caption: "Hand-draped silk in marigold & rani pink", alt: "Model draping a yellow and pink silk saree" },
  { image: img("1610047614256-023d7c028d0b"), title: "Rani Haar", caption: "Heritage red for the pheras", alt: "Bride in red and gold lehenga seated on a carved armchair" },
  { image: img("1570212773364-e30cd076539e"), video: vid("look-veil"), title: "Behind the Veil", caption: "Hand-embroidered dupatta for the vows", alt: "Bride revealing her face from behind a red embroidered dupatta" },
  { image: img("1735052713120-2323c8ac72e9"), title: "Sangeet Nights", caption: "Colour, sparkle & twirl", alt: "Woman in a red and gold lehenga" },
  { image: img("1688382654723-a7366006519b"), video: vid("look-nath"), title: "Nath & Noor", caption: "Heirloom jewellery, styled in-house", alt: "Bride in red lehenga wearing a pearl nath" },
];

export const testimonials = [
  {
    quote:
      "My lehenga felt like it was made from my own dreams. Every fitting was a celebration — the team understood exactly the bride I wanted to be.",
    name: "Aanya Mukherjee",
    detail: "Bride · December 2025",
    image: img("1721324807083-e9ddaa99310e"),
  },
  {
    quote:
      "The Banarasi they sourced for my mother's 60th is the most exquisite saree in our family now. The craft, the colour, the drape — pure poetry.",
    name: "Ritika Sen",
    detail: "Client since 2019",
    image: img("1688382654723-a7366006519b"),
  },
  {
    quote:
      "From sketch to sangeet in six weeks, with a virtual fitting from London. Impeccable finishing and the kindest people you'll ever meet.",
    name: "Meher Kapoor",
    detail: "London · Destination wedding",
    image: img("1740431377901-c2f28d50c759"),
  },
  {
    quote:
      "I ordered a Kanjeevaram for Durga Puja and a chikankari kurta set for my sister — both arrived in a keepsake box with a handwritten note. Pure class, every single time.",
    name: "Priyanka Das",
    detail: "Kolkata · Festive client",
    image: img("1759840278276-fe8d58873dc3"),
  },
  {
    quote:
      "They reworked my mother's thirty-year-old Banarasi into my reception lehenga. I cried at the very first fitting — heritage, reimagined with so much love.",
    name: "Ishita Banerjee",
    detail: "Bride · February 2026",
    image: img("1570212773364-e30cd076539e"),
  },
  {
    quote:
      "Three video fittings from Toronto and my sangeet outfit fit like a dream. The styling team even paired the jewellery for me. Worth every rupee.",
    name: "Nandini Rao",
    detail: "Toronto · Sangeet 2025",
    image: img("1707149974686-0c198fdebd51"),
  },
];

export const instagram: (Media & { alt: string })[] = [
  { image: img("1688382654723-a7366006519b"), alt: "Emerald saree styled with polki jewellery" },
  { image: img("1740431377901-c2f28d50c759"), video: vid("ig-necklace"), alt: "Bridal kundan necklace glinting in candlelight" },
  { image: img("1707149974686-0c198fdebd51"), alt: "Smiling woman in a kundan choker necklace" },
  { image: img("1677691257363-eebd2abeafec"), video: vid("ig-hands"), alt: "Bride's mehendi hands with red chooda and haath phool" },
  { image: img("1737514996816-a034a795febe"), alt: "Bride in red and ivory bridal gown" },
  { image: img("1618489335755-e3aa2b16cd7a"), alt: "Woman in a red saree under golden trees" },
];

export const faqs = [
  {
    q: "How early should I book my bridal appointment?",
    a: "We recommend booking 4–6 months before your wedding for bespoke bridal couture. This allows time for design consultations, hand embroidery (which can take 400+ artisan hours) and two to three fittings. Express bridal timelines of 6–8 weeks are available on request.",
  },
  {
    q: "Do you offer customisation on ready-to-wear pieces?",
    a: "Yes. Every Mehrisa piece can be tailored to your measurements, and most designs can be customised in colour, sleeve style, neckline and blouse design at no extra charge.",
  },
  {
    q: "Do you ship internationally?",
    a: "We ship to 27+ countries with fully insured express delivery. Complimentary shipping applies to all orders within India. Virtual consultations and video fittings are available for clients abroad.",
  },
  {
    q: "Are your sarees handwoven and authentic?",
    a: "All our Banarasi, Kanjeevaram and Jamdani sarees are sourced directly from weaver clusters and carry the Silk Mark or Handloom Mark where applicable, so you know exactly where and how your saree was made.",
  },
  {
    q: "What is your return and alteration policy?",
    a: "Ready-to-wear pieces can be exchanged within 7 days of delivery. Made-to-order and bridal pieces are final sale, but include complimentary lifetime alterations at our atelier.",
  },
];

export const formatINR = (n: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
