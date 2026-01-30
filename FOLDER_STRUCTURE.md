# Project Folder Structure

## Overview
This document outlines the organized folder structure for the Axora business website built with Next.js 13+ App Router.

## Folder Structure

```
src/
├── app/                          # Next.js 13+ App Router
│   ├── (site)/                   # Route group for main site pages
│   │   ├── about/                # About page
│   │   ├── blog/                 # Blog listing and detail pages
│   │   ├── contact/              # Contact page
│   │   ├── services/             # Services listing and detail pages
│   │   ├── portfolio/            # Portfolio listing and detail pages
│   │   ├── team/                 # Team page
│   │   ├── career/               # Career page
│   │   ├── faq/                  # FAQ page
│   │   └── why-choose-us/        # Why choose us page
│   ├── api/                      # API routes
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/
│   ├── Layout/                   # Layout components (Header, Footer, etc.)
│   ├── sections/                 # Page sections (moved from Home/)
│   │   └── Home/                 # Home page sections
│   │       ├── Hero/
│   │       ├── Blog/
│   │       ├── Commitment/
│   │       ├── Companies/
│   │       ├── Contact/
│   │       ├── FuturisticTech/
│   │       ├── Pricing/
│   │       ├── Process/
│   │       ├── Projects/
│   │       ├── Solution/
│   │       ├── Team/
│   │       └── Testimonials/
│   ├── common/                   # Common reusable components
│   │   ├── Breadcrumb/
│   │   └── SharedComponents/
│   ├── ui/                       # UI components (buttons, cards, etc.)
│   ├── forms/                    # Form components
│   └── index.ts                  # Component exports
├── lib/                          # Utility functions
│   ├── utils.ts                  # General utilities
│   └── constants.ts              # Site constants
├── hooks/                        # Custom React hooks
│   └── useLocalStorage.ts        # Local storage hook
├── types/                        # TypeScript type definitions
│   └── index.ts                  # Main type definitions
├── data/                         # Static data and configurations
│   └── menu.ts                   # Navigation menu data
└── styles/                       # Additional styles (if needed)
```

## Component Organization

### Layout Components (`components/Layout/`)
- Header, Footer, Sidebar components
- Navigation components

### Section Components (`components/sections/`)
- Page-specific sections
- Reusable content blocks

### Common Components (`components/common/`)
- Breadcrumb navigation
- Shared UI elements

### UI Components (`components/ui/`)
- Basic UI elements (buttons, cards, modals)
- Reusable interface components

### Form Components (`components/forms/`)
- Contact forms
- Newsletter signup
- Quote request forms

## Best Practices

1. **Component Naming**: Use PascalCase for component folders and files
2. **Index Files**: Each component folder should have an `index.tsx` file
3. **Type Safety**: Define interfaces in `types/` folder
4. **Utilities**: Keep helper functions in `lib/` folder
5. **Data**: Store static data in `data/` folder
6. **Hooks**: Custom hooks in `hooks/` folder

## Import Examples

```typescript
// Import from organized structure
import { Hero, About, Services } from '@/components'
import { MenuItem } from '@/types'
import { menuData } from '@/data/menu'
import { cn } from '@/lib/utils'
```

## Migration Notes

- Existing components have been reorganized into appropriate folders
- Original functionality remains unchanged
- Import paths may need updating in some files
- All components are now properly categorized by their purpose