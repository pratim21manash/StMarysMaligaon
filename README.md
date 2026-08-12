# St. Mary's Sr. Secondary School — Website

A React + Vite + Tailwind CSS site for St. Mary's Sr. Secondary School, Maligaon.

## Getting Started

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## What to customize

- `src/data/seedData.js` — school name, address, phone, stats, gallery images, staff, circulars, downloads. Everything here is placeholder/sample data.
- `src/components/home/PrincipalMessage.jsx` — replace the principal's photo, name, and message.
- `src/pages/cbse/MandatoryPublicDisclosure.jsx` — replace with the school's actual CBSE affiliation number, code, and disclosure details.
- `src/pages/students/Fees.jsx` — replace sample fee figures with actual fee structure.
- `.env.example` — copy to `.env` and point `VITE_API_BASE_URL` at your real backend if/when you add one. Rename to `.env` (do not commit real secrets).
- `src/assets/` — add your logo and hero images here, then reference them in `Navbar.jsx` and `seedData.js`.

## Project Structure

```
src/
├── assets/            # your logo/images go here
├── components/
│   ├── common/        # Button, Card, Badge, StaffCard, PageHeader, Loader, SectionWrapper
│   ├── layout/         # TopBar, Navbar, Footer, NavDropdown
│   └── home/           # HeroCarousel, StatsCounter, WelcomeSection, FeatureCard,
│                        # PrincipalMessage, CircularsPanel
├── pages/
│   ├── about/, administration/, cbse/, students/, infrastructure/, activities/
│   └── Home.jsx, Login.jsx, Gallery.jsx, Downloads.jsx, ContactUs.jsx, NotFound.jsx
├── routes/AppRoutes.jsx
├── context/AuthContext.jsx
├── services/api.js
├── utils/helpers.js
└── data/seedData.js
```

## Notes

- Authentication in `AuthContext.jsx` is a placeholder (no real backend) — wire `login()` up to your API via `services/api.js` when ready.
- The contact form on `ContactUs.jsx` doesn't send anywhere yet — wire it to a backend or a service like Formspree.
- Images currently come from Unsplash placeholders — swap in real campus photos when available.
