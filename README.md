# DEEPSEA FINVEST

A modern, glassmorphic wealth management website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern glassmorphic UI design
- 📱 Fully responsive layout
- 🔐 Admin authentication system
- 📊 Lead management system
- 💾 MongoDB database integration
- 🎭 Smooth animations with Framer Motion & GSAP
- 🎯 Type-safe API routes
- 📧 Contact form with lead capture
- 🔒 Secure JWT authentication

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT + bcryptjs
- **Animations:** Framer Motion, GSAP
- **UI Components:** Radix UI, Lucide Icons
- **3D Graphics:** Three.js, React Three Fiber

## Getting Started

### Prerequisites

- Node.js 18+ 
- MongoDB database (local or Atlas)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd deepsea-finvest
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and add your configuration:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/deepsea-finvest
JWT_SECRET=your-super-secret-jwt-key
ADMIN_USERNAME=admin
ADMIN_PASSWORD_HASH=$2a$10$YourHashedPasswordHere
WHATSAPP_NUMBER=919136242706
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. Generate admin password hash:
```bash
node -e "console.log(require('bcryptjs').hashSync('your-password', 10))"
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Project Structure

```
deepsea-finvest/
├── src/
│   ├── app/                    # Next.js app router
│   │   ├── api/               # API routes
│   │   │   ├── auth/         # Authentication endpoints
│   │   │   └── leads/        # Lead management endpoints
│   │   ├── contact/          # Contact page
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Home page
│   ├── components/            # React components
│   │   ├── glassmorphism/    # Glassmorphic UI components
│   │   ├── layout/           # Layout components (Navbar, Footer)
│   │   ├── sections/         # Page sections
│   │   └── ui/               # Reusable UI components
│   ├── lib/                   # Utilities and configurations
│   │   ├── models/           # Mongoose models
│   │   ├── api-client.ts     # Frontend API client
│   │   ├── api-error.ts      # Error handling utilities
│   │   ├── constants.ts      # App constants
│   │   ├── env.ts            # Environment validation
│   │   ├── mongodb.ts        # Database connection
│   │   └── utils.ts          # Helper functions
│   └── types/                 # TypeScript type definitions
├── public/                    # Static assets
├── .env.example              # Environment variables template
├── next.config.mjs           # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## API Routes

### Authentication
- `POST /api/auth/login` - Admin login

### Leads
- `POST /api/leads` - Create new lead
- `GET /api/leads` - Get all leads (with optional filters)

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `MONGODB_URI` | MongoDB connection string | Yes |
| `JWT_SECRET` | Secret key for JWT tokens | Yes |
| `ADMIN_USERNAME` | Admin username | No (default: admin) |
| `ADMIN_PASSWORD_HASH` | Bcrypt hashed admin password | Yes |
| `WHATSAPP_NUMBER` | WhatsApp contact number | No |
| `NEXT_PUBLIC_SITE_URL` | Public site URL | No |

## Development Guidelines

### Code Style
- Use TypeScript for type safety
- Follow ESLint and Prettier configurations
- Use functional components with hooks
- Implement proper error handling
- Add JSDoc comments for complex functions

### Component Structure
- Keep components small and focused
- Use composition over inheritance
- Implement proper prop types
- Handle loading and error states

### API Development
- Use type-safe API client
- Implement proper validation
- Handle errors consistently
- Return appropriate status codes

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms
1. Build the project: `npm run build`
2. Start the server: `npm run start`
3. Ensure environment variables are set

## Security Considerations

- Never commit `.env` files
- Use strong JWT secrets in production
- Implement rate limiting for API routes
- Validate all user inputs
- Use HTTPS in production
- Keep dependencies updated

## Contributing

1. Create a feature branch
2. Make your changes
3. Run tests and linting
4. Submit a pull request

## License

Private - All rights reserved

## Support

For support, contact: info@deepseafinvest.com
