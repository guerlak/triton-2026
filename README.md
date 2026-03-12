# 🔱 TRITON World Series 2026

![TRITON Banner](https://raw.githubusercontent.com/tritonworldseries/assets/main/banner.jpg) <!-- Note: Replace with actual banner URL if available -->

> A premium, high-performance landing page for the **TRITON World Series 2026**. Built with Next.js 16 and React 19, featuring a cutting-edge dark aesthetic and seamless user experience.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-ff69b4?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

---

## ✨ Key Features

- **🏆 Global Ranking System**: Dynamic athlete ranking dashboard with complex scoring logic (Top 3 results + Championships).
- **🌗 Premium Aesthetics**: Stunning dark mode interface utilizing **Glassmorphism**, vibrant red accents, and high-end typography (Montserrat).
- **📱 Ultra-Responsive**: Fully optimized for mobile, tablet, and desktop with a focus on endurance sports enthusiasts.
- **🧭 Advanced Navigation**: Sticky sidebars and category-based navigation for Info pages (FAQ, Terms & Conditions).
- **🎭 Smooth Interactions**: Sophisticated micro-animations powered by **Framer Motion** for a premium feel.
- **🌍 Multi-language Ready**: Underlying architecture for internationalization (i18n).

## 🛠️ Technology Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://reactjs.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion 12](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Google Fonts (Montserrat)](https://fonts.google.com/specimen/Montserrat)

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm / yarn / pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/triton-landing-page-2026.git
   cd triton-landing-page-2026
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📂 Project Structure

```text
├── app/
│   ├── (info)/           # FAQ and Terms & Conditions pages
│   ├── components/       # Reusable UI components (Navbar, Footer, etc.)
│   ├── ranking/          # Global Ranking business logic
│   └── globals.css       # Tailwind & Global styles
├── public/               # Static assets (images, icons)
└── package.json          # Dependencies and scripts
```

## ⚙️ Data Fetching Strategy

The project utilizes **Next.js Server Components** for efficient data handling:
- **Global Ranking**: Fetched server-side with a 1-hour revalidation window (`revalidate: 3600`) to ensure fresh data while optimizing performance and respecting API rate limits.
- **Client Interactivity**: Components like `RankingClientWrapper` use React's client-side hooks to handle modals, animations, and detailed athlete views.

## 🎨 Design Philosophy

The project follows the **Triton Brand Identity**:
- **Black Background**: Representing strength and depth.
- **Triton Red (#E11D48)**: Symbolizing passion, energy, and the "Red Zone" of endurance.
- **Glassmorphism**: Using `backdrop-blur` and subtle borders to create a layered, modern architectural feel.

---

<p align="center">
  Developed with ❤️ for the TRITON World Series Community.
</p>
