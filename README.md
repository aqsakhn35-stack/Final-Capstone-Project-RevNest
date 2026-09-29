# RevNest — Car Marketplace

Final Capstone Project (Week 8) — Frontend Development Internship, Pro Edge Solutions

RevNest is a modern, responsive car marketplace where users can browse vehicles, search and filter listings, view detailed car information, save favorites, calculate EMI payments, submit inquiries, and read customer reviews.

## Live Demo
- **Deployed Project:** https://YOUR-VERCEL-LINK.vercel.app
- **GitHub Repository:** https://github.com/YOUR-USERNAME/revnest

## Features
- **Home page:** animated hero section, featured vehicles, testimonials, theme toggle, responsive navigation
- **Car listings:** search by model, filter by make, body type and price, sort by price or year
- **Car detail page:** image gallery, specifications, pricing, EMI calculator, inquiry form, ratings and reviews
- **Favorites:** add or remove cars with a heart icon, saved in localStorage, dedicated Favorites page
- **EMI calculator:** enter down payment and loan tenure to get monthly installment and remaining loan amount
- **Testimonials:** customer names, ratings, photos and messages
- **Theme management:** Light and Dark theme, preference saved in localStorage
- **Antique cars page:** classic and vintage vehicles with year, rarity and collector value
- **Footer:** company description, quick links, contact info, social links, copyright
- **Animations:** Framer Motion (hero entrance, card hover, page elements) with reduced-motion support

## Technologies Used
- React 18 (Vite)
- React Router
- Context API (theme and favorites)
- Custom hooks (`useLocalStorage`, `useVehicles`)
- Axios
- Framer Motion
- Vitest + React Testing Library
- Vercel (deployment)

## Data Source
`db.json` is placed in the `public/` folder and fetched once with `axios.get('/db.json')`.
This works identically in local development and after deployment, with no port or base URL needed.
All filtering, sorting and single-vehicle lookups are done client-side in JavaScript after that one fetch.
Favorites, ratings/reviews and inquiry submissions are **not** written back to `db.json`; they are persisted in `localStorage`.

## Project Structure
```
src/
  components/   reusable UI components (CarCard, CarImage, EMICalculator, forms, etc.)
  context/      ThemeContext, FavoritesContext
  hooks/        useLocalStorage, useVehicles
  pages/        Home, CarListings, CarDetail, Favorites, AntiqueCars
  services/     api.js (Axios)
  utils/        emiCalculator.js
  tests/        unit tests
public/
  db.json       vehicle and testimonial data
```

## Setup Instructions
1. Clone the repository
   ```bash
   git clone https://github.com/YOUR-USERNAME/revnest.git
   cd revnest
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Start the development server
   ```bash
   npm run dev
   ```
4. Open http://localhost:5173 in your browser

## Testing
Run the unit tests:
```bash
npm run test
```
Tested flows: EMI calculator calculations and the favorites add/remove functionality.

## Deployment
The app is deployed on Vercel.
1. Push the code to GitHub
2. Import the repository on vercel.com
3. Vercel detects Vite automatically, then click Deploy

## Screenshots

### Home Page


![Home Page](screenshots/Home%20page.png)




![Home Page 2](screenshots/Home%20page1.png)



### Dark Theme


![Dark Theme](screenshots/Dark%20theme.png)



### Cars Page (Search and Filters)


![Cars Page](screenshots/cars%20page.png)




![Cars Page 2](screenshots/cars%20page1.png)



### Car Detail Page


![Car Detail](screenshots/car%20detail.png)




![Car Detail 2](screenshots/car%20detail1.png)




![Car Detail 3](screenshots/car%20detail2.png)



### Inquiry Form Submission


![Inquiry Success](screenshots/inquiry%20success.png)



### Favorites Page


![Favorites](screenshots/favorite%20page.png)



### Antique Cars Page


![Antique Cars](screenshots/antiques%20page.png)



### Mobile View


![Mobile View](screenshots/mobile%20view.png)