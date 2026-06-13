/**
 * Shared business / contact info for MetalHead Mechanical.
 * Single source of truth so the phone number, email, etc. stay consistent
 * across the navbar, CTA, and footer.
 *
 * NOTE: phone/email are demo placeholders — swap in the real values.
 */
export const SITE = {
  name: "MetalHead Mechanical",
  tagline: "Heating & Cooling",
  phoneDisplay: "(208) 555-0199",
  phoneHref: "tel:+12085550199",
  email: "service@metalheadmechanical.com",
  emailHref: "mailto:service@metalheadmechanical.com",
  city: "Nampa, Idaho",
  serviceArea: "Serving Nampa & the Treasure Valley",
  licenses: ["RCE# 69797", "LIC# 070139"],
} as const;
