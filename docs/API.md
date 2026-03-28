# API Documentation

## Base URL
- Development: `http://localhost:3000`
- Production: `https://deepseafinvest.com`

## Authentication

### Login
Authenticate admin user and receive JWT token.

**Endpoint:** `POST /api/auth/login`

**Request Body:**
```json
{
  "username": "admin",
  "password": "your-password"
}
```

**Success Response (200):**
```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Error Responses:**
- `400`: Missing username or password
- `401`: Invalid credentials
- `500`: Server error

## Leads

### Create Lead
Create a new lead from contact form submission.

**Endpoint:** `POST /api/leads`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "message": "Interested in mutual funds",
  "source": "contact-form",
  "pageSource": "/contact"
}
```

**Required Fields:**
- `name` (string)
- `email` (string, valid email)
- `phone` (string, 10 digits)

**Optional Fields:**
- `message` (string)
- `source` (enum: website, popup, contact-form, whatsapp, calculator)
- `pageSource` (string)

**Success Response (201):**
```json
{
  "message": "Lead created successfully",
  "lead": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "9876543210",
    "status": "new",
    "source": "contact-form",
    "createdAt": "2024-03-27T10:00:00.000Z"
  }
}
```

**Error Responses:**
- `400`: Missing required fields or invalid data
- `500`: Server error

### Get Leads
Retrieve all leads with optional filtering.

**Endpoint:** `GET /api/leads`

**Query Parameters:**
- `status` (optional): Filter by status (new, contacted, qualified, converted, lost)
- `source` (optional): Filter by source (website, popup, contact-form, whatsapp, calculator)

**Examples:**
```
GET /api/leads
GET /api/leads?status=new
GET /api/leads?source=contact-form
GET /api/leads?status=new&source=website
```

**Success Response (200):**
```json
{
  "leads": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "9876543210",
      "status": "new",
      "source": "contact-form",
      "message": "Interested in mutual funds",
      "createdAt": "2024-03-27T10:00:00.000Z",
      "updatedAt": "2024-03-27T10:00:00.000Z"
    }
  ]
}
```

**Error Responses:**
- `500`: Server error

## Error Format

All error responses follow this format:

```json
{
  "error": "Error message describing what went wrong"
}
```

## Rate Limiting

Currently no rate limiting is implemented. Consider adding rate limiting in production using:
- `express-rate-limit`
- Cloudflare
- API Gateway rate limiting

## CORS

CORS is handled by Next.js. For custom CORS configuration, modify `next.config.mjs`.

## Authentication Headers

For protected routes (future implementation), include JWT token:

```
Authorization: Bearer <token>
```
