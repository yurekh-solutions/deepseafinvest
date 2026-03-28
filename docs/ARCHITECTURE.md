# Architecture Documentation

## Overview

DEEPSEA FINVEST is a modern Next.js application built with the App Router, featuring a glassmorphic UI design and comprehensive lead management system.

## Technology Stack

### Frontend
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Animations
- **GSAP**: Advanced animations
- **Three.js**: 3D graphics

### Backend
- **Next.js API Routes**: Serverless API endpoints
- **MongoDB**: NoSQL database
- **Mongoose**: ODM for MongoDB
- **JWT**: Authentication tokens
- **bcryptjs**: Password hashing

## Project Structure

```
deepsea-finvest/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── api/            # API routes
│   │   ├── contact/        # Contact page
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/          # React components
│   │   ├── glassmorphism/  # Glass UI components
│   │   ├── layout/         # Layout components
│   │   └── sections/       # Page sections
│   ├── lib/                 # Utilities
│   │   ├── models/         # Database models
│   │   ├── api-client.ts   # Frontend API client
│   │   ├── api-error.ts    # Error handling
│   │   ├── constants.ts    # App constants
│   │   ├── env.ts          # Environment config
│   │   ├── format.ts       # Formatting utils
│   │   ├── logger.ts       # Logging utility
│   │   ├── mongodb.ts      # DB connection
│   │   ├── utils.ts        # Helper functions
│   │   └── validation.ts   # Validation utils
│   ├── hooks/               # Custom React hooks
│   └── types/               # TypeScript types
├── public/                  # Static assets
├── scripts/                 # Utility scripts
└── docs/                    # Documentation
```

## Data Flow

### Lead Creation Flow
1. User fills contact form
2. Frontend validates input
3. API client sends POST to `/api/leads`
4. API route validates data
5. Lead saved to MongoDB
6. Response sent to frontend
7. Success message displayed

### Authentication Flow
1. Admin enters credentials
2. POST to `/api/auth/login`
3. Credentials validated against DB
4. JWT token generated
5. Token returned to client
6. Token stored in localStorage
7. Token sent with authenticated requests

## Database Schema

### Admin Collection
```typescript
{
  username: string (unique)
  password: string (hashed)
  createdAt: Date
  updatedAt: Date
}
```

### Lead Collection
```typescript
{
  name: string
  email: string
  phone: string
  source: enum
  status: enum
  message?: string
  pageSource?: string
  createdAt: Date
  updatedAt: Date
}
```

## API Endpoints

### POST /api/auth/login
Authenticate admin user
- Body: `{ username, password }`
- Returns: `{ token, message }`

### POST /api/leads
Create new lead
- Body: `{ name, email, phone, message?, source?, pageSource? }`
- Returns: `{ lead, message }`

### GET /api/leads
Get all leads
- Query: `?status=new&source=website`
- Returns: `{ leads: Lead[] }`

## Security

- JWT tokens for authentication
- Password hashing with bcryptjs
- Environment variable validation
- API input validation
- Security headers via middleware
- HTTPS in production

## Performance

- Static generation where possible
- Image optimization
- Code splitting
- Lazy loading
- MongoDB connection pooling
- Efficient queries with indexes

## Deployment

### Environment Variables
All required env vars must be set in production:
- MONGODB_URI
- JWT_SECRET
- ADMIN_PASSWORD_HASH

### Build Process
1. `npm run build` - Creates production build
2. `npm run start` - Starts production server

### Recommended Platforms
- Vercel (recommended)
- AWS Amplify
- Railway
- Render
