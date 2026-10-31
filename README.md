# Sagar Pare – Sea Facing Stay in Puri

A modern, responsive web application for **Sagar Pare**, a premier luxury beachfront accommodation located on New Marine Drive Road, Puri, Odisha (3-minute walk from Swargadwar Sea Beach).

## Features

- **Responsive Design**: Mobile-first luxury experience optimized across phones, tablets, and desktops.
- **Room Showcase**: Detailed catalog of sea-facing double bed and family rooms with high-resolution galleries and transparent tariff details.
- **Facilities & Amenities**: Comprehensive list of amenities including sea view balconies, kitchen access, Wi-Fi, laundry, and parking.
- **Interactive Lightbox Gallery**: Full-screen image viewer with keyboard navigation (Previous/Next/Escape).
- **Direct Booking & Quick Contact**: Instant WhatsApp messaging with pre-formatted inquiry details and one-click calling.
- **Google Maps Integration**: Direct interactive location map showing proximity to Swargadwar Beach and Marine Drive.
- **Fast Performance**: Powered by Vite and React with lazy image loading and smooth transitions.

## Tech Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router DOM v6](https://reactrouter.com/)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/)

## Getting Started

### Prerequisites

- Node.js (v18.0.0 or later)
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start the local development server
npm run dev

# Run ESLint
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
├── public/              # Static assets (images, favicon, robots.txt)
├── src/
│   ├── assets/          # Room and property photography
│   ├── components/      # Reusable components (Navbar, Footer, FloatingButton, etc.)
│   │   └── ui/          # Radix UI / shadcn component library
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── pages/           # Route views (Home, Rooms, Facilities, About, Gallery, etc.)
│   ├── App.tsx          # Router configuration and global providers
│   └── main.tsx         # Application entry point
├── index.html           # HTML entry point with SEO metadata
├── tailwind.config.ts   # Tailwind theme design tokens
└── vite.config.ts       # Vite configuration
```

## Contact & Location

- **Location**: New Marine Drive Road, Puri, Odisha 752001
- **Contact**: Pankaj Datta (+91 9830852640 / +91 7980037544)
- **Email**: pankaj61.pd@gmail.com
