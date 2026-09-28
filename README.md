# Property Pulse

A full-stack rental property catalog built with Next.js. This is an earlier portfolio project focused on listing workflows, user accounts, search, maps, and image handling.

[Open the deployed app](https://property-pulse-ten-mu.vercel.app/)

## What is implemented

- Property listing pages and routes for managing listings
- Search and filtering for rental properties
- Account and profile flows using NextAuth
- Message pages for communication between users
- Map views and geolocation-related UI
- Cloudinary integration for property images
- MongoDB and Mongoose persistence

The app uses Next.js 14, React 18, Tailwind CSS, NextAuth, MongoDB/Mongoose, Cloudinary, and Mapbox. The repository includes `app/`, `components/`, `models/`, and `utils/` to separate routes, UI, data models, and helpers.

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
