# Triton Web - Design System & Mobile Responsiveness Guidelines

Always apply the visual identity, design system, and mobile responsiveness guidelines below when creating or modifying components and pages in this project:

## 1. Color Palette (`app/globals.css`)
Tokens defined in `:root` and exposed in Tailwind v4 `@theme`:
- **`triton-red` (`#df1f26`)**: Primary brand color. Used for main CTAs, badges, accent subtitles (`Heading`), divider lines (`RedLine`), and active/hover states.
- **`triton-dark` (`#0a0a0a`)**: Primary dark background for sections and event pages (`bg-black`, `bg-black/90`, `bg-triton-dark`).
- **`triton-gray` (`#1f1f1f`)**: Secondary surfaces, cards, and dark containers (`bg-triton-gray`, `bg-neutral-800`, `bg-neutral-900`).
- **Base Light (`--background: #ffffff` / `--foreground: #171717`)**: Default `body` variables.
- **Text & Contrast on Dark Backgrounds:**
  - Headings and highlights: `text-white`
  - Secondary text / descriptions: `text-gray-300`, `text-gray-400`, or `text-white/60` (ensure high contrast on dark backgrounds).
  - Subtle borders: `border-white/5`, `border-white/10`, `border-white/20`.

## 2. Typography (`app/layout.tsx` & `app/globals.css`)
- **Primary Font (`--font-sans` / `--font-montserrat`):** `Montserrat` (Google Fonts, `subsets: ["latin"]`, weights `400` and `700`, applied with `antialiased` on `body`).
- **Monospace / Data Font:** `font-mono` for tables, times, countdowns, and numeric metrics.
- **Responsive Type Scale:**
  - **Main Headings (`h1`):** `text-3xl sm:text-5xl md:text-7xl font-black uppercase leading-tight tracking-tight break-words`
  - **Section Subheadings (`h2` / `h3`):** `text-2xl sm:text-3xl md:text-5xl font-black uppercase leading-tight`
  - **Sub-headers / Badges:** `text-xs sm:text-sm font-bold tracking-widest uppercase text-triton-red`
  - **Paragraphs / Body Copy:** `text-xs sm:text-base md:text-lg text-gray-400` (never use static `text-lg` on mobile).

## 3. Visual Style & UI Patterns
- **Overall Aesthetic:** High-contrast dark-first, athletic/competitive look with uppercase typography (`uppercase`), heavy weights (`font-bold` / `font-black`), and wide letter spacing (`tracking-wider` / `tracking-widest`).
- **Cards & Containers:**
  - Generous rounded corners on featured cards (`rounded-3xl sm:rounded-4xl` or `rounded-xl`) with subtle borders (`border border-white/5` or `border border-white/10`).
  - Image overlays with dark gradients (`bg-gradient-to-t from-black via-black/60 to-black/20`).
- **Buttons (`app/ui/MainButton.tsx`):**
  - Primary: `bg-triton-red hover:bg-white text-white hover:text-black rounded-xl font-black uppercase tracking-wider sm:tracking-widest transition-all duration-300` with subtle glow (`shadow-[0_0_20px_rgba(234,30,36,0.3)]`).
  - Disabled: `bg-neutral-800 text-gray-500 border border-white/10 opacity-60 cursor-not-allowed`.
- **Dividers (`app/ui/RedLine.tsx`):** Horizontal line `h-1 bg-gradient-to-r from-transparent via-triton-red to-transparent`.
- **Icons:** `lucide-react` library.
- **Scrollbars (`app/globals.css`):** `.custom-scrollbar` (thin translucent `triton-red` thumb) and `.no-scrollbar` / `.scrollbar-hide` utilities.

## 4. Mobile Alignment & Hierarchy
- On small screens (`< 768px`), use responsive alignment (`text-left md:text-right` or `items-start md:items-end`). Avoid right-aligning paragraphs on mobile under left-aligned headings.
- Ensure high contrast on dark backgrounds (`text-white/60` or higher).

## 5. Spacing (Paddings & Margins)
- **Section Vertical Padding:** `py-8 sm:py-12 md:py-20` (never use fixed `py-20` or `py-32` that create large gaps on mobile).
- **Block Margins:** `mb-6 sm:mb-10 md:mb-12` and `space-y-4 sm:space-y-6 md:space-y-8`.
- **Card Inner Padding:** `p-4 sm:p-6 md:p-8` (to avoid wasted space on mobile).
- **CTA Button Top Margin:** `mt-8 sm:mt-12 md:mt-20`.

## 6. Interactive Elements & Tables
- **Cards & Links on Mobile:** Interactive elements must keep buttons/links visible on mobile without relying on hover (`opacity-100 sm:opacity-0 sm:group-hover:opacity-100`).
- **Responsive Tables:** Use `overflow-x-auto`, compact cell padding (`px-2.5 sm:px-4 py-2.5 sm:py-3`), numeric `font-mono` (`text-xs sm:text-sm`), and `whitespace-nowrap`.
- **Countdowns / 4-Column Grids:** Ensure a safe minimum box width (`min-w-[64px] sm:min-w-[80px]`) so layouts do not break on 320px/375px screens.
