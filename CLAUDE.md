# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Kids Calendar — a NestJS REST API backend using PostgreSQL with Prisma ORM. Manages calendar events (school, sports, birthday, doctor, play, music, other) for children.

## Commands

- **Build:** `npx nest build`
- **Dev server:** `npm run start:dev` (runs on port 3000)
- **Production:** `npm run start:prod`
- **Lint:** `npm run lint`
- **Test:** `npm run test` / single test: `npx jest path/to/file.spec.ts`
- **e2e tests:** `npm run test:e2e`
- **Prisma generate:** `npx prisma generate` (run after schema changes)
- **Prisma migrate:** `npx prisma migrate dev --name <name>`

## Architecture

```
src/
  main.ts              — Bootstrap with ValidationPipe (whitelist + transform) and CORS
  app.module.ts        — Root module importing PrismaModule (global) and EventsModule
  prisma/              — Global PrismaService extending PrismaClient with lifecycle hooks
  events/
    events.controller  — REST endpoints under /events with UUID param validation
    events.service     — CRUD + findByDate/findByCategory queries
    dto/               — CreateEventDto (class-validator) and UpdateEventDto (PartialType)
prisma/
  schema.prisma        — CalendarEvent model with EventCategory enum, mapped to calendar_events table
```

## Key Conventions

- Prisma schema uses `prisma-client-js` generator with classic engine (`prisma.config.ts` sets `engine: "classic"`)
- DTOs enforce date format `YYYY-MM-DD` and time format `HH:MM` via regex validation
- `EventCategory` enum is defined both in Prisma schema and as a TypeScript enum in the DTO for validation
- PrismaModule is `@Global()` — no need to import it in feature modules
- All event query endpoints support `?date=` and `?category=` query filters on `GET /events`
- Database connection string is configured via `DATABASE_URL` in `.env`
