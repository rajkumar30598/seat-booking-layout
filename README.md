# Seat Booking Layout

An interactive cinema-style seat selection screen built with Angular, with classic and premium seating tiers and a live booking summary.

**Live demo:** https://seat-booking-layout.vercel.app

![Angular](https://img.shields.io/badge/Angular-16-DD0031?logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.1-3178C6?logo=typescript&logoColor=white)

## Features

- Seat grid generated from a single config object (rows, seats per row, premium rows, occupied seats, prices)
- Two seat tiers: **Classic** and **Premium**, each with its own price
- Pre-occupied seats are shown and cannot be selected
- Click to select / deselect seats; tooltips show seat ID, tier and price
- Screen indicator, row labels on both sides and a legend (available, selected, occupied, premium)
- Booking summary listing selected seats sorted by row and number, with seat count and total price

## Tech stack

- Angular 16.1 (NgModule-based)
- TypeScript 5.1
- SCSS
- Karma + Jasmine for unit tests

## Getting started

Requires Node.js 16.14+ / 18 and npm.

```bash
npm install
npm start        # ng serve -> http://localhost:4200
```

Other scripts:

```bash
npm run build    # production build in dist/
npm test         # unit tests via Karma
```

## Configuration

The hall layout lives in `src/app/app.component.ts`:

```ts
config: ComponentConfig = {
  rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
  seatsPerRow: 12,
  premiumRows: ['E', 'F', 'G', 'H'],
  occupiedSeats: ['A3', 'B7', 'C1', 'D10', 'E5', 'F2', 'G12', 'H1'],
  classicPrice: 10,
  premiumPrice: 15
};
```

Change these values to model a different hall.

## Project structure

```
src/app/
├── app.component.*              # page shell and layout config
└── components/
    ├── models/models.ts         # Seat, SeatType, ComponentConfig
    ├── seat-layout/             # seat grid, selection logic, legend
    └── booking-summary/         # selected seats, count and total
```
