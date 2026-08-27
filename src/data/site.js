/**
 * Single source of truth for the hospital's NAP (Name / Address / Phone).
 *
 * Local SEO depends on this data matching, character-for-character, what is on
 * the Google Business Profile, Facebook, Justdial and magicpin. Change it here
 * and it updates every page, the footer, and the JSON-LD structured data.
 *
 * Anything marked VERIFY is drawn from public listings that disagree with each
 * other and has NOT been confirmed by the hospital. See docs/business-profile.md.
 */

export const site = {
  name: 'Kasturi Ayurveda Hospital',
  nameTe: 'కస్తూరి ఆయుర్వేద హాస్పిటల్',
  tagline: 'Piles, Fistula & Fissure Cure Centre',
  taglineTe: 'మూలవ్యాధి, భగందరం, పాయువు పగుళ్ల చికిత్సా కేంద్రం',
  url: 'https://kasturiayurvedahospital.com',

  /**
   * The Kasturi family have practised Ayurveda for four generations — the claim
   * appears on the hospital's own banner in Telugu. It is the single strongest
   * trust asset the practice has, so it leads the About page.
   */
  heritage: {
    generations: 4,
    establishedCentre: 2019, // "One year completion" post dated Aug 2020
  },

  doctor: {
    name: 'Dr. Venkatesh Kasturi',
    qualification: 'MS (Ayurveda)',
    // VERIFY: AYUSH / state council registration number — required on the site
    // as a medical trust signal and for Google's E-E-A-T assessment.
    registration: null,
  },

  phone: {
    // Confirmed: appears on the signage, Facebook, Justdial and magicpin.
    primary: '+919246565535',
    primaryDisplay: '+91 92465 65535',
    // Read off a clinic banner on the doctor's Facebook profile. VERIFY before launch.
    secondary: '+916281968685',
    secondaryDisplay: '+91 62819 68685',
    // VERIFY: confirm whether the primary number is on WhatsApp Business.
    whatsapp: '919246565535',
  },

  address: {
    // VERIFY: sources disagree. Facebook gives "12-134, Sri Venkateshwara
    // Nilayam, Medipalli ... 500092"; Justdial gives "Road No 2, Medipalli";
    // the Google Business Profile gives a Kamala Nagar Colony / Buddha Nagar
    // address with pincode 500098, which may be a stale duplicate listing.
    street: 'Sri Venkateshwara Nilayam, 12-134, Road No. 2',
    locality: 'Medipally',
    city: 'Hyderabad',
    region: 'Telangana',
    postalCode: '500092',
    country: 'IN',
    // Coordinates read off the Google Maps listing.
    lat: 17.410125,
    lng: 78.5988173,
    mapsUrl: 'https://www.google.com/maps/place/Kasturi+Ayurveda+Hospital/@17.410125,78.5988173,17z',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Kasturi+Ayurveda+Hospital+Medipally+Hyderabad',
    reviewUrl: 'https://search.google.com/local/writereview?placeid=REPLACE_WITH_PLACE_ID',
  },

  /** VERIFY: Google Business Profile hours. Justdial lists a flat 9am–8pm daily. */
  hours: [
    { day: 'Monday', short: 'Mon', open: '09:00', close: '20:00', display: '9:00 am – 8:00 pm' },
    { day: 'Tuesday', short: 'Tue', open: '09:00', close: '20:00', display: '9:00 am – 8:00 pm' },
    { day: 'Wednesday', short: 'Wed', open: '09:00', close: '20:00', display: '9:00 am – 8:00 pm' },
    { day: 'Thursday', short: 'Thu', open: '09:00', close: '20:00', display: '9:00 am – 8:00 pm' },
    { day: 'Friday', short: 'Fri', open: '17:30', close: '20:00', display: '5:30 pm – 8:00 pm' },
    { day: 'Saturday', short: 'Sat', open: null, close: null, display: 'Closed' },
    { day: 'Sunday', short: 'Sun', open: '09:00', close: '13:00', display: '9:00 am – 1:00 pm' },
  ],

  rating: {
    value: '5.0',
    count: 21,
    source: 'Google',
  },

  social: {
    facebook: 'https://www.facebook.com/p/Kasturi-Ayurveda-Hospital',
  },
};

/** Areas the hospital realistically draws patients from — used for local SEO copy. */
export const serviceAreas = [
  'Medipally',
  'Boduppal',
  'Uppal',
  'Peerzadiguda',
  'Ghatkesar',
  'Nacharam',
  'LB Nagar',
  'Habsiguda',
];

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/conditions/piles/', label: 'Piles' },
  { href: '/conditions/fistula/', label: 'Fistula' },
  { href: '/conditions/fissure/', label: 'Fissure' },
  { href: '/kshara-sutra/', label: 'Kshara Sutra' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Visit Us' },
];

/** Builds the `tel:` / WhatsApp links with a pre-filled message. */
export function whatsappLink(message = "Hello, I'd like to book a consultation at Kasturi Ayurveda Hospital.") {
  return `https://wa.me/${site.phone.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function formatAddress(sep = ', ') {
  const a = site.address;
  return [a.street, a.locality, a.city, `${a.region} ${a.postalCode}`].join(sep);
}
