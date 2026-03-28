# Quick Start Guide

Get DEEPSEA FINVEST up and running in 5 minutes.

## Prerequisites

- Node.js 18+ installed
- MongoDB database (local or Atlas)
- npm or yarn

## Step 1: Install Dependencies

```bash
cd deepsea-finvest
npm install
```

## Step 2: Setup Environment

Run the interactive setup script:

```bash
npm run setup
```

Or manually create `.env` file:

```bash
cp .env.example .env
```

Edit `.env` with your values:

```env
MONGODB_URI=mongodb://localhost:27017/deepsea-finvest
JWT_SECRET=your-secret-key
ADMIN_USERNAME=admin
ADMIN_PASSWORD_HASH=<generated-hash>
WHATSAPP_NUMBER=919136242706
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Step 3: Generate Admin Password

```bash
npm run create-admin
```

Copy the generated hash to your `.env` file.

## Step 4: Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Step 5: Verify Setup

- ✅ Home page loads
- ✅ Contact form works
- ✅ Admin login works (if implemented)
- ✅ No console errors

## Common Issues

### MongoDB Connection Error
- Check MONGODB_URI is correct
- Ensure MongoDB is running
- Check network access (for Atlas)

### Build Errors
```bash
npm run type-check
npm run lint
```

### Port Already in Use
```bash
# Use different port
PORT=3001 npm run dev
```

## Next Steps

1. Read [README.md](./README.md) for full documentation
2. Check [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md) for architecture
3. Review [docs/API.md](./docs/API.md) for API documentation
4. See [CONTRIBUTING.md](./CONTRIBUTING.md) for development guidelines

## Need Help?

- Check documentation in `/docs` folder
- Review code comments
- Contact: info@deepseafinvest.com
