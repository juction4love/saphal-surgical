# Saphal Surgical House (सफल सर्जिकल हाउस)

A production-ready, bilingual (नेपाली & English) medical and surgical equipment supplies website and enquiry catalogue built with **Next.js App Router**, **React**, **TypeScript**, and **Tailwind CSS**. Configured with static export for high-performance hosting on **Vercel**.

---

## 📍 Verified Business Information

- **Business Name:** Saphal Surgical House (सफल सर्जिकल हाउस)
- **Production URL:** [https://saphal-surgical.vercel.app](https://saphal-surgical.vercel.app)
- **Verified Telephones:** Primary `056-596060` (`tel:+97756596060`), Secondary `056-596120` (`tel:+97756596120`)
- **Physical Address:** Kamal Nagar Marg, Narayangarh, Chitwan, Bagmati Province, Nepal (कमल नगर मार्ग, नारायणगढ, चितवन, बागमती प्रदेश, नेपाल)
- **Geographic Coordinates:** `27.69473, 84.42161`
- **Official Facebook Page:** [https://www.facebook.com/1032544950288241](https://www.facebook.com/1032544950288241)

---

## 🎯 Business Positioning & Strict Compliance

- **Surgical & Medical Supplies Distributor:** The website clearly presents Saphal Surgical House as a supplier of surgical instruments, clinical lab equipment, hospital furniture, consumables, and home-care devices.
- **No Fabricated Claims:** Strictly avoids unverified claims such as hospital services, doctor consultations, patient treatments, unverified certifications (ISO/CE), years of experience, or delivery promises.
- **No Fake Interactive Forms:** Inquiries are routed directly to the verified landline phones `056-596060` / `056-596120`, WhatsApp `+977 9855055060`, Google Maps directions, or official Facebook page.

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
| `/ne/order-slip` | `/en/order-slip` | Local order list with quantities, customer details, PDF download, WhatsApp text sharing, and copy fallback |
| `/ne/order` | `/en/order` | Compatibility aliases for the order-slip pages; canonical URLs remain `/order-slip` |
| `/ne/contact` | `/en/contact` | Verified landline, address, directions, Facebook, and interactive map |

---

## 📦 Catalogue Categories

The catalogue contains 339 distinct bilingual enquiry entries across 19 categories in `data/categories.ts`, `data/products.ts`, and `data/catalogue-expansion.ts`. It includes the original 200-item hospital lists plus the requested orthopedic, mobility, pharmacy-retail, physiotherapy, and baby/maternity expansions. Matching existing products retain their existing slugs and routes.

Every entry includes:
- English & Nepali names and concise descriptions
- `Price negotiable — contact us` / `मूल्य कुराकानीमा — सम्पर्क गर्नुहोस्`
- `Contact to confirm availability` / `उपलब्धता बुझ्न सम्पर्क गर्नुहोस्`
- 92 repository-authored schematic SVG illustrations are labelled in English and Nepali. 246 entries use an explicit image-unavailable state after unrelated generic drawings were withheld. One owner-supplied representative glucometer photograph is used with a bilingual notice that the actual model may differ. The image-source manifest records sources, creator/permission details, and bilingual alt text. Original supplied photos are retained separately.
- Product detail navigation and compact Add to order actions on product cards

Regenerate the local product illustrations and source manifest after changing catalogue entries:

```bash
node scripts/generate-product-illustrations.cjs
```

---

## 🧾 Order Slip

The bilingual order slip stores product selections and positive integer quantities in the visitor's browser. Customer name, phone, organization, address, notes, and item specifications are used only for the current page session and are not saved by default. Customers can review and download a PDF, share the PDF through a supported device share sheet, share a text summary to WhatsApp, or copy the summary for another messaging channel. No order is submitted to the business automatically; customers should confirm stock, options, and pricing directly.

Canvas-generated order PDFs contain rasterized page images, not embedded/selectable text. Their Nepali appearance depends on the browser's available Devanagari font shaping. The WhatsApp link sends text only; it does **not** automatically attach the PDF. Attach the downloaded file manually in WhatsApp if needed.

---

## 📲 WhatsApp Configuration (Confirmed & Active)

The business owner has confirmed the WhatsApp number **`9855055060`** (international format `+9779855055060`). WhatsApp direct chat is active and configured in `config/site.ts`:

```typescript
// config/site.ts
whatsapp: {
  enabled: true,
  rawSuppliedNumber: "9855055060",
  confirmedInternationalDigits: "9779855055060",
  display: "+977 9855055060",
}
```

Features enabled with WhatsApp integration:
1. **Product Detail Enquiry**: URL-encoded message prefilled with product title and absolute product URL in the visitor's selected language (Nepali/English).
2. **Order Slip Sharing**: Can share a PDF using the device share sheet where supported; the WhatsApp fallback sends an order-text summary and requires the PDF to be attached manually.
3. **Contact Page**: Dedicated WhatsApp enquiry card linking directly to `https://wa.me/9779855055060`.

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

- **Canonical URLs:** Configured on all routes pointing to `https://saphal-surgical.vercel.app`.
- **Hreflang Tags:** Declared for both `ne`, `en`, and `x-default`.
- **Sitemap & Robots:** Dynamically generated at `/sitemap.xml` and `/robots.txt`.
- **Schema.org:** Accurate `MedicalSupplyStore` / `LocalBusiness` JSON-LD structured data on all pages using only verified coordinates, phone, and address. (No Hospital schema).

---

## 📋 Remaining Owner Inputs for Future Updates

1. **Business Operating Hours:** Specify official weekly opening and closing hours.
2. **Official Email Address:** Add an official domain email (e.g. `info@saphalsurgical.com`).
3. **Specific Authorized Dealerships:** If Saphal Surgical House holds authorized distribution rights for specific medical brands in Chitwan, these can be added with verification documents.
