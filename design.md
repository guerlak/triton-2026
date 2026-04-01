# Triton World Series Design System

This document outlines the design system for the Triton World Series 2026 website, ensuring visual consistency across all components and pages.

## 🎨 Color Palette

### Primary Colors
- **Triton Red**: `#df1f26` — Used for calls to action, highlights, and primary branding elements.
- **Triton Dark**: `#0a0a0a` — Primary background color for deep sections.
- **Triton Gray**: `#1f1f1f` — Used for secondary backgrounds and card surfaces.
- **Pure Black**: `#000000` — Main background color.

### Neutral Colors
- **White**: `#ffffff` — Primary text color on dark backgrounds.
- **Foreground**: `#171717` — Primary text color on light backgrounds (rarely used as the site is dark-themed).
- **Gray 300**: High readability body text.
- **Gray 400**: Secondary information and captions.
- **Gray 500**: Disabled or tertiary information.

---

## 🔡 Typography

### Font Family
- **Primary Font**: `Montserrat` (Sans-serif)
- **Secondary Font**: System default (Fallback)

### Type Hierarchy

#### Headings
- **H1 / Hero Title**: `text-5xl` to `text-6xl`, `font-black`, `uppercase`, `italic`, `white`.
- **Section Title (Secondary)**: `text-3xl` to `text-5xl`, `font-black`, `uppercase`, `white`, `leading-tight`.
- **Label / Overline**: `text-triton-red`, `font-bold`, `tracking-widest`, `uppercase`.
- **Card Title**: `text-lg` to `text-2xl`, `font-bold`, `uppercase`, `white`.

#### Body Text
- **Lead Text**: `text-lg`, `text-gray-400`, `max-w-2xl`.
- **Standard Body**: `text-sm` to `text-base`, `text-gray-300`.
- **Small Text**: `text-xs`, `text-gray-500`.

---

## 🧱 UI Components

### Buttons
- **Primary (Red)**: `bg-triton-red`, `text-white`, `rounded-full`, `font-bold`, `uppercase`, `px-5 py-2`.
- **Secondary (White)**: `bg-white`, `text-black`, `hover:text-triton-red`, `rounded-full`, `font-bold`, `uppercase`.
- **Action Scale**: Hover state often includes `scale-105` or `bg-red-700`.

### Cards
- **Container**: `bg-white/5` (glass-morphism effect), `rounded-xl`, `border border-white/10`.
- **Interaction**: `hover:border-triton-red/50`, `transition-all`.
- **Internal Spacing**: `p-6` or `p-8`.

### Navigation
- **Navbar**: `fixed top-0`, `h-20`, `bg-black/95` or `bg-black/80`.
- **Effect**: `backdrop-blur-md` and `border-b border-white/10`.
- **Links**: `text-gray-300`, `hover:text-triton-red`, `text-sm font-bold uppercase`.

### Tables
- **Border Style**: `border-b border-white/20` (Header), `border-b border-white/10` (Rows).
- **Row Hover**: `hover:bg-white/5 transition-colors`.
- **Cell Style**: `font-black text-xl italic uppercase` for main row identifiers.

### Forms & Input (Toggles)
- **Toggle Container**: `bg-neutral-900`, `p-1`, `rounded-full`, `border border-white/10`.
- **Active Tab**: `bg-triton-red`, `text-white`, `shadow-lg`.
- **Inactive Tab**: `text-gray-400`, `hover:text-white`.

---

## 🎨 Iconography

- **Library**: `lucide-react`.
- **Usage**: Standard size `24px` (Lucide `size={24}`).
- **Colors**: Primarily `text-triton-red` or `text-white` on hover/active states.
- **Backgrounds**: Often placed in a `bg-triton-red/10` rounded container.

---

## 📐 Layout & Spacing

- **Max Container Width**: `max-w-7xl` (1280px) for standard sections, `max-w-[1600px]` for high-density sections.
- **Vertical Spacing**: `py-24` (Standard section vertical padding).
- **Horizontal Spacing**: `px-4 sm:px-6 lg:px-8`.
- **Grid Systems**: `grid-cols-1 md:grid-cols-3` is common for feature lists.

---

## ✨ Visual Language

- **Dynamic Transitions**: `duration-300` or `duration-700` (for images).
- **Image Treatments**: `rounded-2xl`, `overflow-hidden`, `object-cover`.
- **Gradients**: `bg-linear-to-t from-black/80 to-transparent` for text overlays on images.
- **Scroll Behavior**: `scroll-behavior: smooth`.
- **Custom Scrollbar**: Hidden or narrow with custom thumb coloring (`rgba(223, 31, 38, 0.3)`).
