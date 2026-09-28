# Property Pulse

A full-stack rental marketplace demo built with Next.js for listing, discovering, saving, and contacting property owners about rental homes.

[Open the deployed app](https://property-pulse-ten-mu.vercel.app/)

Property Pulse is an earlier portfolio project. Its value is in showing a complete product surface around real estate workflows: authenticated listing management, searchable property discovery, image handling, maps, saved properties, and user messaging routes.

## What is implemented

- public property catalog with detail pages
- search and filtering for rental properties
- authenticated account and profile flows with NextAuth
- create/edit/manage listing workflows
- saved property experience
- message pages for owner/renter communication
- Mapbox-based location UI
- Cloudinary integration for property images
- MongoDB and Mongoose persistence

## What this demonstrates

- building a multi-route Next.js product around a recognizable marketplace domain
- connecting UI flows to authentication, database models, image hosting, and maps
- keeping an older portfolio project honest about its scope while still showing the implemented product breadth
- separating routes, UI, data models, and helpers through `app/`, `components/`, `models/`, and `utils/`

The app uses Next.js 14, React 18, Tailwind CSS, NextAuth, MongoDB/Mongoose, Cloudinary, and Mapbox.

## Run locally

```bash
git clone https://github.com/MykolaDotsenko/property-pulse.git
cd property-pulse
npm install
npm run dev
```

Open `http://localhost:3000`. Database, authentication, image hosting, and map features require their respective service credentials; consult the configuration in the source before using those integrations. Run `npm run build` to build for production.

## Scope

This repository records a full-stack learning and portfolio iteration. Messaging is represented by application routes; it is not described here as a real-time chat service.
