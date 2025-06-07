# Lawyer of One - Backend API

Express.js + TypeScript backend API for the Lawyer of One platform.

## 🚀 Features

- **RESTful API** with Express.js and TypeScript
- **Request Validation** using Zod schemas
- **Security** with Helmet, CORS, and rate limiting
- **Vercel-ready** deployment configuration
- **Modular architecture** with organized routes and services

## 📋 API Endpoints

### Health Check
- `GET /api/health` - Basic health check
- `GET /api/health/detailed` - Detailed system information

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact/info` - Get contact information

### Legal Health Check
- `POST /api/legal-check/request` - Submit legal health check request
- `GET /api/legal-check/categories` - Get available check categories

### Contract Services
- `POST /api/contract/review` - Submit contract for review
- `POST /api/contract/quick-analysis` - Quick AI analysis (free tier)
- `GET /api/contract/templates` - Get available contract templates

## 🛠️ Setup

1. Install dependencies:
```bash
cd backend
npm install
```

2. Create `.env` file:
```bash
cp .env.example .env
# Edit .env with your configuration
```

3. Run development server:
```bash
npm run dev
```

## 📦 Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - TypeScript type checking

## 🏗️ Project Structure

```
backend/
├── src/
│   ├── api/
│   │   └── server.ts      # Main Express server
│   ├── routes/            # API route handlers
│   │   ├── health.ts
│   │   ├── contact.ts
│   │   ├── legal-check.ts
│   │   └── contract.ts
│   ├── middleware/        # Custom middleware
│   │   └── validation.ts
│   ├── services/          # Business logic & external services
│   │   └── email.ts
│   ├── types/            # TypeScript type definitions
│   └── utils/            # Utility functions
├── dist/                 # Compiled JavaScript (gitignored)
├── .env                  # Environment variables (gitignored)
├── .env.example          # Example environment variables
├── .eslintrc.json        # ESLint configuration
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── vercel.json          # Vercel deployment config
```

## 🚀 Deployment

### Vercel Deployment

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Set environment variables in Vercel dashboard

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Start the server:
```bash
NODE_ENV=production npm start
```

## 🔒 Security Features

- **Helmet** for security headers
- **CORS** configured for production domains
- **Rate limiting** to prevent abuse
- **Input validation** on all endpoints
- **Error handling** without exposing internals

## 🔄 Future Enhancements

- [ ] Database integration (PostgreSQL)
- [ ] Authentication & authorization (JWT)
- [ ] Email service integration (SendGrid/AWS SES)
- [ ] AI integration for contract analysis
- [ ] Payment processing (Stripe)
- [ ] WebSocket support for real-time updates
- [ ] Comprehensive API documentation (OpenAPI/Swagger)
- [ ] Automated testing suite

## 📝 Environment Variables

See `.env.example` for all available environment variables.

Key variables:
- `PORT` - Server port (default: 3001)
- `NODE_ENV` - Environment (development/production)
- `ADMIN_EMAIL` - Admin email for notifications

## 🧪 Testing

```bash
# Run tests (when implemented)
npm test
```

## 📄 License

Part of the Lawyer of One platform by Utlyze.