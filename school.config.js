// ═══════════════════════════════════════════════════════════
//  EDUMATRIX — SCHOOL CONFIGURATION FILE
//  Edit this file only to customize for each new school
//  Created by Zyveron Technologies, Faisalabad
// ═══════════════════════════════════════════════════════════

const SCHOOL_CONFIG = {

  // ── SCHOOL IDENTITY ────────────────────────────────────────
  name:         "EduMatrix School",       // Full school name
  short_name:   "EduMatrix",              // Short name for app icon
  tagline:      "School Management System", // Shown under logo
  city:         "Faisalabad",             // City name
  session:      "2025-26",               // Current academic session

  // ── CONTACT ────────────────────────────────────────────────
  phone:        "0300-0000000",           // School phone
  whatsapp:     "0300-0000000",           // WhatsApp number
  email:        "info@school.com",        // School email
  address:      "Faisalabad, Pakistan",   // Full address

  // ── BRANDING COLORS ────────────────────────────────────────
  // Change these to match school colors
  primary:      "#1a56db",               // Main color (buttons, sidebar)
  primary_dark: "#0f2d6e",              // Dark version (sidebar bg)
  primary_light:"#dbeafe",              // Light version (chips, badges)
  accent:       "#00d4ff",              // Accent color (highlights)

  // ── SUPABASE DATABASE ──────────────────────────────────────
  // Get from supabase.com → your project → Settings → API
  supabase_url: "https://mimpmsykusjgvwzeciau.supabase.co",
  supabase_key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pbXBtc3lrdXNqZ3Z3emVjaWF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM3MjIyMTcsImV4cCI6MjA4OTI5ODIxN30._AK9YtdOMGZuOJkufOHNpWG2JG_0dh8b_chPk4dbMKc",
  school_id:    "00000000-0000-0000-0000-000000000001",

  // ── PUSH NOTIFICATIONS ─────────────────────────────────────
  // These are shared across all schools (Zyveron's keys)
  vapid_public: "BKNbHEw95d4wgaP4m0njpXbPcGRrFC7Wy5aEV4s_XrwGA0gQOr0rJUcoHNLA_NwD0y-i9vUNspPWoPv6etOcj6c",

};

// DO NOT EDIT BELOW THIS LINE
if (typeof module !== 'undefined') module.exports = SCHOOL_CONFIG;
