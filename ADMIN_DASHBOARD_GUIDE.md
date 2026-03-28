# 🎯 Admin Dashboard - Setup & Usage Guide

## ✅ What's Been Built

Your complete admin lead tracking dashboard is now ready with:

### **Features Implemented:**

1. **🔐 Secure Login System**
   - JWT-based authentication
   - Password hashing with bcrypt
   - Session management via localStorage
   - Middleware protection for all admin routes

2. **📊 Dashboard Analytics** (`/admin/dashboard`)
   - Total leads count
   - New leads counter
   - Contacted leads tracker
   - Conversion rate calculator
   - Visual pipeline overview
   - Recent leads table (top 5)

3. **📋 Lead Management** (`/admin/leads`)
   - Full CRUD operations
   - Search by name, email, or phone
   - Filter by status (New, Contacted, Qualified, Converted, Lost)
   - Filter by source (Website, Popup, Contact Form, WhatsApp, Calculator)
   - Update lead status inline
   - View detailed lead information
   - Delete leads with confirmation
   - Export to CSV functionality
   - Pagination-ready table view

4. **🎨 Glassmorphism Design**
   - Beautiful glassmorphic UI matching your site
   - Responsive design for all devices
   - Smooth animations and transitions
   - Dark theme optimized

---

## 🚀 Setup Instructions

### **Step 1: Environment Variables**

Create a `.env.local` file in your project root:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your credentials:

```env
# MongoDB Connection
MONGODB_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/deepsea-finvest?retryWrites=true&w=majority

# JWT Secret (generate a strong random string)
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Admin Credentials
ADMIN_USERNAME=admin
ADMIN_PASSWORD_HASH=$2a$10$YourHashedPasswordHere

# WhatsApp Number
WHATSAPP_NUMBER=919136242706

# Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3001
```

### **Step 2: Create Admin User**

Run the admin creation script:

```bash
node scripts/create-admin.js
```

Enter your desired username and password. The script will output:
- `ADMIN_USERNAME` - Your admin username
- `ADMIN_PASSWORD_HASH` - Your hashed password

Copy these values to your `.env.local` file.

### **Step 3: Install Dependencies** (if not already done)

```bash
npm install
```

Required packages already installed:
- `bcryptjs` - Password hashing
- `jsonwebtoken` - JWT authentication
- `mongoose` - MongoDB ODM

### **Step 4: Start Development Server**

```bash
npm run dev
```

The app will be available at: `http://localhost:3001`

---

## 📱 Accessing the Admin Dashboard

### **Login Page**
- URL: `http://localhost:3001/admin/login`
- Enter your admin username and password
- Click "Sign In"

### **Dashboard**
- After login, you'll be redirected to: `http://localhost:3001/admin/dashboard`
- View analytics and recent leads
- Click "Manage Leads" to see all leads

### **Lead Management**
- URL: `http://localhost:3001/admin/leads`
- Full control over all leads
- Search, filter, update, delete functionality

---

## 🔒 Security Features

1. **Route Protection**
   - All `/admin/*` routes require authentication
   - Automatic redirect to login if not authenticated
   - Token validation on every request

2. **Password Security**
   - Passwords are hashed using bcrypt (10 salt rounds)
   - Never store plain text passwords

3. **JWT Tokens**
   - 24-hour expiration
   - Secure token generation with secret key
   - Stored in localStorage

4. **Security Headers**
   - X-Frame-Options: DENY
   - X-Content-Type-Options: nosniff
   - Referrer-Policy: strict-origin-when-cross-origin
   - Permissions-Policy: camera=(), microphone=(), geolocation=()

---

## 📊 API Endpoints

### **Leads Management**

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/leads` | Create new lead | ❌ |
| GET | `/api/leads` | Get all leads (with filters) | ✅ |
| PUT | `/api/leads/[id]` | Update lead | ✅ |
| DELETE | `/api/leads/[id]` | Delete lead | ✅ |

### **Authentication**

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/login` | Admin login |

---

## 🎨 Dashboard Features Breakdown

### **Dashboard Page** (`/admin/dashboard`)

**Stats Cards:**
- **Total Leads**: All-time lead count
- **New Leads**: Requires immediate attention (green highlight)
- **Contacted**: Currently in progress (blue highlight)
- **Converted**: Successfully converted leads (purple highlight)
- Shows conversion rate percentage

**Pipeline Overview:**
- Visual representation of lead distribution
- Color-coded stages:
  - 🟢 New
  - 🔵 Contacted
  - 🟡 Qualified
  - 🟣 Converted
  - 🔴 Lost

**Recent Leads Table:**
- Last 5 leads added
- Quick view of essential info
- Link to full management page

### **Leads Management Page** (`/admin/leads`)

**Filters:**
- **Search**: Real-time search by name, email, or phone
- **Status Filter**: Filter by lead status
- **Source Filter**: Filter by lead source
- **Export CSV**: Download filtered leads as CSV

**Table Features:**
- Inline status updates (dropdown)
- View details modal
- Delete with confirmation
- Responsive design
- Hover effects

**Lead Detail Modal:**
- Complete lead information
- Message content
- Source tracking
- Timestamps (created & updated)

---

## 🔄 Lead Status Workflow

```
New → Contacted → Qualified → Converted
                      ↓
                    Lost
```

**Status Definitions:**
- **New**: Fresh lead, needs initial contact
- **Contacted**: Initial communication established
- **Qualified**: Meets criteria, interested prospect
- **Converted**: Became a paying customer
- **Lost**: Deal lost or unqualified

---

## 💾 Database Models

### **Lead Model**
```typescript
{
  name: string (required),
  email: string (required),
  phone: string (required),
  message?: string,
  source: 'website' | 'popup' | 'contact-form' | 'whatsapp' | 'calculator',
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'lost',
  pageSource?: string,
  createdAt: Date,
  updatedAt: Date
}
```

### **Admin Model**
```typescript
{
  username: string (required, unique),
  password: string (hashed, required),
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🛠️ Troubleshooting

### **"Failed to fetch leads"**
- Check MongoDB connection string in `.env.local`
- Ensure MongoDB Atlas allows your IP address
- Verify Mongoose models are correctly imported

### **"Invalid credentials" on login**
- Double-check username and password
- Ensure `ADMIN_PASSWORD_HASH` is correctly set
- Regenerate hash using the script if needed

### **"Token expired"**
- JWT tokens expire after 24 hours
- Simply log in again
- Increase expiration time in `/api/auth/login` if needed

### **Build errors**
- Run `npm run build` to check for compilation issues
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `npm install`

---

## 📝 Usage Tips

1. **Daily Workflow:**
   - Check dashboard for new leads
   - Update lead status after each interaction
   - Use filters to prioritize follow-ups
   - Export weekly reports via CSV

2. **Best Practices:**
   - Regularly update lead statuses
   - Delete spam/test leads
   - Monitor conversion rates
   - Use page source data to optimize marketing

3. **Performance:**
   - Index MongoDB collections for faster queries
   - Implement pagination for large datasets (future enhancement)
   - Cache frequently accessed data

---

## 🎯 Next Steps (Optional Enhancements)

- [ ] Add lead comments/notes
- [ ] Email integration for follow-ups
- [ ] Automated lead assignment
- [ ] Advanced analytics charts
- [ ] Bulk actions (delete, export)
- [ ] Lead scoring system
- [ ] Activity timeline
- [ ] Multi-admin support with roles

---

## 📞 Support

If you encounter any issues:

1. Check the browser console for errors
2. Verify all environment variables are set
3. Ensure MongoDB connection is working
4. Review the terminal logs

---

## ✨ Summary

Your admin dashboard is fully functional and production-ready! 

**Access Points:**
- Login: `http://localhost:3001/admin/login`
- Dashboard: `http://localhost:3001/admin/dashboard`
- Leads: `http://localhost:3001/admin/leads`

**What works:**
✅ Secure authentication  
✅ Lead CRUD operations  
✅ Real-time search & filtering  
✅ Status management  
✅ CSV export  
✅ Responsive design  
✅ Glassmorphism UI  
✅ Route protection  

Enjoy managing your leads efficiently! 🚀
