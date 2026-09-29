# Saphal Surgical House (सफल सर्जिकल हाउस)

A production-ready, bilingual (नेपाली & English) medical and surgical equipment supplies website and enquiry catalogue built with **Next.js App Router**, **React**, **TypeScript**, and **Tailwind CSS**. Configured with static export for high-performance hosting on **Vercel**.

---

## 📍 Verified Business Information

- **Business Name:** Saphal Surgical House (सफल सर्जिकल हाउस)
- **Intended Domain:** [https://www.saphalsurgical.com](https://www.saphalsurgical.com)
- **Verified Telephone:** `+977 56-572060` (`tel:+97756572060`)
- **Physical Address:** Kamal Nagar Marg, Narayangarh, Chitwan, Bagmati Province, Nepal (कमल नगर मार्ग, नारायणगढ, चितवन, बागमती प्रदेश, नेपाल)
- **Geographic Coordinates:** `27.69473, 84.42161`
- **Official Facebook Page:** [https://www.facebook.com/1032544950288241](https://www.facebook.com/1032544950288241)

---

## 🎯 Business Positioning & Strict Compliance

- **Surgical & Medical Supplies Distributor:** The website clearly presents Saphal Surgical House as a supplier of surgical instruments, clinical lab equipment, hospital furniture, consumables, and home-care devices.
- **No Fabricated Claims:** Strictly avoids unverified claims such as hospital services, doctor consultations, patient treatments, unverified certifications (ISO/CE), years of experience, or delivery promises.
- **No Fake Interactive Forms:** Inquiries are routed directly to the verified landline phone `+977 56-572060`, Google Maps directions, or official Facebook page.

---

## 🌐 Bilingual Architecture & Routes

Default language is **नेपाली (`/ne`)** with a visible language switcher preserving the current page when switching to **English (`/en`)**.

### Main Routes
| Route (Nepali) | Route (English) | Description |
|---|---|---|
| `/ne` | `/en` | Homepage with hero, phone action, directions, and featured catalogue |
| `/ne/about` | `/en/about` | Business facts, geographical location, and scope of supplies |
| `/ne/products` | `/en/products` | Live bilingual search and category filtering |
| `/ne/products/[slug]` | `/en/products/[slug]` | Bilingual individual product detail and enquiry pages |
| `/ne/contact` | `/en/contact` | Verified landline, address, directions, Facebook, and interactive map |

---

## 📦 Catalogue Categories

The catalogue is organized into 8 proposed enquiry categories in `data/categories.ts` and `data/products.ts`:

1. **Laboratory Equipment & Supplies (`laboratory`):** Hematology analyzers, biochemistry analyzers, electrolyte analyzers, immunoassay platforms, urine analyzers, microscopes, centrifuges, bacteriological incubators, hot-air ovens, water baths, micropipettes, and specimen containers.
2. **Surgical Instruments (`surgical-instruments`):** Mayo & Metzenbaum scissors, dissecting forceps, hemostatic clamps, artery forceps, needle holders, retractors, scalpel handles, and surgical trays.
3. **Sterilization & Infection Control (`sterilization`):** High-pressure steam autoclaves, sterilization pouches, indicator rolls, and chemical test strips.
4. **Monitoring & Diagnostics (`monitoring-diagnostics`):** Multi-parameter patient monitors, ECG machines, pulse oximeters, digital/mercury BP machines, clinical thermometers, and glucometers.
5. **Respiratory Care (`respiratory-care`):** Medical oxygen concentrators (5L/10L), oxygen cylinder regulators/flowmeters, compressor nebulizers, and electric suction machines.
6. **Hospital Furniture (`hospital-furniture`):** Fowler/semi-fowler patient beds, examination tables/couches, dressing trolleys, wheelchairs, emergency stretchers, and IV drip stands.
7. **Consumables & PPE (`consumables-ppe`):** Latex/nitrile gloves, 3-ply surgical masks, disposable surgical gowns, sterile syringes, IV cannulas, Foley catheters, and gauze dressings.
8. **Rehabilitation & Home Care (`rehabilitation-home-care`):** Adjustable walking frames, crutches, walking sticks, orthopedic braces/collars, anti-decubitus air mattresses, and commode chairs.

Every entry includes:
- English & Nepali names and concise descriptions
- `Price negotiable — contact us` / `मूल्य कुराकानीमा — सम्पर्क गर्नुहोस्`
- `Contact to confirm availability` / `उपलब्धता बुझ्न सम्पर्क गर्नुहोस्`
- Illustrative image with clear licensing attribution label
- Direct phone enquiry action `tel:+97756572060`

---

## 📲 WhatsApp Configuration Note (Owner Input Required)

The raw WhatsApp number supplied was `98550055060` (11 digits). Because standard Nepal mobile numbers are 10 digits (e.g. `9855005506` or `9855005500`), **active WhatsApp links are disabled by default** in `config/site.ts` to prevent broken links:

```typescript
// config/site.ts
whatsapp: {
  enabled: false, // Change to true once confirmed by owner
  rawSuppliedNumber: "98550055060",
  confirmedInternationalDigits: "", // e.g. "9779855005506"
}
```

Once confirmed:
1. Set `enabled: true`.
2. Provide the confirmed number format in `confirmedInternationalDigits` (e.g., `"9779855005506"`).
3. The site will automatically activate pre-filled WhatsApp enquiry buttons across the catalogue in the user's active language.

---

## 🛠️ Local Development & Build

### Prerequisites
- Node.js (v18 or higher, tested on Node v26)
- npm (v9 or higher)

### Installation
```bash
npm install
```

### Run Dev Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build & Static Export
```bash
npm run build
```
The static export will be generated in the `out/` folder, ready for zero-configuration hosting.

---

## 🚀 Vercel Deployment & Custom Domain Setup

### Option 1: Deploy via Vercel CLI
```bash
npx vercel
```

### Option 2: Import via GitHub / GitLab
1. Push this repository to GitHub or GitLab.
2. In the [Vercel Dashboard](https://vercel.com/new), select **Import Project** and choose your repository.
3. Framework Preset will be automatically detected as **Next.js**.
4. Click **Deploy**.

### Custom Domain Configuration
1. In Vercel Project Settings, navigate to **Domains**.
2. Add `www.saphalsurgical.com` and `saphalsurgical.com`.
3. In your DNS registrar (e.g., Cloudflare, Namecheap, GoDaddy):
   - Add a `CNAME` record for `www` pointing to `cname.vercel-dns.com`.
   - Add an `A` record for `@` pointing to `76.76.21.21` (or redirect apex to `www`).
4. SSL certificates are provisioned automatically by Vercel.

---

## 🔍 SEO & Structured Data

- **Canonical URLs:** Configured on all routes pointing to `https://www.saphalsurgical.com`.
- **Hreflang Tags:** Declared for both `ne`, `en`, and `x-default`.
- **Sitemap & Robots:** Dynamically generated at `/sitemap.xml` and `/robots.txt`.
- **Schema.org:** Accurate `MedicalSupplyStore` / `LocalBusiness` JSON-LD structured data on all pages using only verified coordinates, phone, and address. (No Hospital schema).

---

## 📋 Remaining Owner Inputs for Future Updates

1. **WhatsApp Mobile Number:** Confirm exact 10-digit number to activate WhatsApp inquiry buttons.
2. **Business Operating Hours:** Specify official weekly opening and closing hours.
3. **Official Email Address:** Add an official domain email (e.g. `info@saphalsurgical.com`).
4. **Specific Authorized Dealerships:** If Saphal Surgical House holds authorized distribution rights for specific medical brands in Chitwan, these can be added with verification documents.
