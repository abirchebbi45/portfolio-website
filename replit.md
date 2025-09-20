# Overview

This is a professional portfolio website for Abir Chebbi, a Software Engineer and AI & Machine Learning specialist. The application is built as a full-stack web application using React for the frontend and Express.js for the backend, designed to showcase professional experience, skills, projects, and education in an interactive and responsive format.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter library for lightweight client-side routing
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for accessibility and consistency
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **State Management**: TanStack React Query for server state management and data fetching
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework for the server
- **Language**: TypeScript with ES modules for modern JavaScript features
- **Storage**: In-memory storage implementation with interface for easy database migration
- **Development**: Custom Vite integration for seamless full-stack development

## Component Structure
The frontend follows a modular component architecture with:
- Page-level components in `/pages`
- Feature-specific sections as separate components
- Reusable UI components from Shadcn/ui library
- Shared data models and utilities

## Data Management
- Portfolio data is statically defined in TypeScript files
- Type-safe interfaces for all data structures (Experience, Project, Education, etc.)
- Centralized data management for easy content updates

## Development Environment
- Hot module replacement and live reloading via Vite
- TypeScript compilation checking
- Path aliases configured for clean imports
- Replit-specific plugins for development banner and error handling

# External Dependencies

## UI and Styling
- **Radix UI**: Headless UI components for accessibility (@radix-ui/react-*)
- **Tailwind CSS**: Utility-first CSS framework with PostCSS and Autoprefixer
- **Lucide React**: Icon library for consistent iconography
- **Inter Font**: Google Fonts integration for typography

## Database and ORM
- **Drizzle ORM**: Type-safe SQL ORM with PostgreSQL dialect support
- **Neon Database**: Serverless PostgreSQL database (@neondatabase/serverless)
- **Drizzle Kit**: Database migrations and schema management tool

## Development Tools
- **Vite**: Build tool and development server
- **ESBuild**: Fast JavaScript bundler for production builds
- **TSX**: TypeScript execution for development server
- **Replit Plugins**: Development environment enhancements

## Form and Data Handling
- **React Hook Form**: Form state management with validation
- **Zod**: Schema validation library integrated with Drizzle
- **Date-fns**: Date manipulation and formatting utilities

## Session Management
- **Connect-pg-simple**: PostgreSQL session store for Express sessions
- **Express Session**: Session middleware (implied by pg-simple dependency)

The application is configured for deployment on Replit with environment-specific optimizations and development tools that enhance the coding experience in the Replit environment.