# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production application  
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Database Commands (Drizzle ORM)

- `npm run db:push` - Push schema changes to database
- `npm run db:generate` - Generate migration files
- `npm run db:migrate` - Run database migrations  
- `npm run db:studio` - Open Drizzle Studio for database management

## Inngest Commands

- `npm run inngest` - Start Inngest development server (connects to localhost:3000/api/inngest)

## Architecture Overview

This is a Next.js 15 job board application using the App Router with the following key technologies:

### Authentication & User Management
- **Clerk**: Complete authentication system integrated throughout the app
- Middleware protection for non-public routes (src/middleware.ts:3-8)
- Public routes: `/sign-in`, `/`, `/api`
- Clerk webhooks integrated with Inngest for user lifecycle events

### Database & Schema
- **Drizzle ORM** with PostgreSQL
- Schema organized by entity in `src/drizzle/schema/`:
  - Users, Organizations, Job Listings, Applications, Resumes, Notification Settings
- Database configuration in `drizzle.config.ts` connects to PostgreSQL via environment variables

### Background Jobs & Events
- **Inngest** for handling asynchronous jobs and events
- Clerk user lifecycle events (create/update/delete) processed via Inngest
- Event schemas defined in `src/app/services/inngest/client.ts:12-16`

### Environment Configuration  
- **@t3-oss/env-nextjs** for type-safe environment variables
- Database URL automatically constructed from individual DB components
- Separate client/server environment validation in `src/data/env/`

### UI & Styling
- **shadcn/ui** components with Radix UI primitives
- **Tailwind CSS** for styling with dark mode support
- Sidebar layout pattern with user authentication integration

### Project Structure
- `src/app/` - Next.js App Router pages and API routes
- `src/components/` - Reusable UI components  
- `src/drizzle/` - Database schema, migrations, and connection
- `src/features/` - Feature-specific components and logic
- `src/services/` - External service integrations (Clerk, Inngest)