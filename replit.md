# WaverleyIT Solutions - Website

## Overview
A React + TypeScript + Vite frontend application for WaverleyIT Solutions, featuring a modern corporate website with services, products, courses, and contact information. The project uses TailwindCSS for styling and Shadcn/ui components for the UI.

## Recent Changes (September 19, 2025)
- Successfully imported GitHub repository to Replit
- Configured Vite dev server for Replit environment (host: 0.0.0.0, port: 5000)
- Set up Frontend workflow for development
- Configured deployment settings for production (autoscale with static file serving)
- All dependencies installed and TypeScript compilation working correctly

## Project Architecture

### Frontend Stack
- **Framework**: React 19.1.0 with TypeScript
- **Build Tool**: Vite 6.3.5
- **Styling**: TailwindCSS 4.1.10 with custom theme
- **UI Components**: Shadcn/ui with Radix UI primitives
- **Routing**: React Router v7
- **Icons**: Lucide React, Tabler Icons, React Icons
- **Animations**: Framer Motion
- **Notifications**: Sonner

### Key Features
- Multi-page website with navigation
- Services showcase
- Products display
- Courses section
- Contact forms
- Events and internship pages
- Career opportunities
- Quote request functionality

### Development Setup
- Development server runs on port 5000
- Hot module replacement enabled
- TypeScript configuration with path aliases (@/* → ./src/*)
- ESLint for code quality

### Deployment Configuration
- **Type**: Autoscale deployment
- **Build**: `npm run build` (TypeScript compilation + Vite build)
- **Runtime**: Static file serving using `serve` package
- **Port**: 5000

### File Structure
```
src/
├── components/         # Reusable UI components
│   ├── ui/            # Shadcn/ui components
│   └── eldoraui/      # Custom components
├── utils/             # Page components and utilities
├── lib/               # Utility functions
├── assets/            # Static assets
├── App.tsx            # Main app component with routing
├── main.tsx           # React application entry point
└── index.css          # Global styles and Tailwind imports

public/                # Static assets (images, documents)
```

## User Preferences
- Keep existing project structure and conventions
- Use TypeScript for type safety
- Maintain TailwindCSS for styling
- Preserve Shadcn/ui component library usage