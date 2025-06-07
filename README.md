# LawyerOfOne 🏛️⚖️

AI-powered legal assistant platform built with modern web technologies. LawyerOfOne democratizes legal assistance by providing intelligent document analysis, case management, and AI-driven legal guidance.

![LawyerOfOne](https://img.shields.io/badge/LawyerOfOne-v1.0.0-4169E1?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=for-the-badge&logo=typescript)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## 🚀 Features

- **AI Legal Assistant**: Powered by GPT-4 for intelligent legal guidance
- **Document Analysis**: Automated contract review and risk assessment
- **Case Management**: Organize and track legal matters efficiently
- **Secure Document Storage**: End-to-end encrypted document management
- **Multi-language Support**: Available in English, Spanish, and French
- **Real-time Collaboration**: Work with legal professionals seamlessly
- **Payment Integration**: Stripe-powered billing and subscriptions

## 🏗️ Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Design System with Utlyze Blue (#4169E1)
- **State Management**: Zustand
- **UI Components**: React with custom design system
- **Authentication**: Supabase Auth

### Backend
- **Runtime**: Node.js with Express
- **Language**: TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Cache**: Redis
- **AI Integration**: OpenAI GPT-4
- **File Storage**: AWS S3 / Cloudflare R2
- **Payment Processing**: Stripe

### Infrastructure
- **Container**: Docker & Docker Compose
- **CI/CD**: GitHub Actions
- **Monitoring**: Sentry
- **Analytics**: PostHog
- **Deployment**: Vercel (Frontend) / AWS ECS (Backend)

## 📁 Project Structure

```
lawyerofone/
├── frontend/               # Next.js frontend application
│   ├── src/
│   │   ├── app/           # App router pages
│   │   ├── components/    # React components
│   │   ├── styles/        # Design system & global styles
│   │   ├── hooks/         # Custom React hooks
│   │   ├── utils/         # Utility functions
│   │   └── types/         # TypeScript type definitions
│   └── public/            # Static assets
├── backend/               # Express API server
│   ├── src/
│   │   ├── api/          # API routes
│   │   ├── models/       # Database models
│   │   ├── services/     # Business logic
│   │   ├── middleware/   # Express middleware
│   │   └── utils/        # Helper functions
│   └── prisma/           # Database schema
├── docs/                 # Documentation
├── scripts/              # Utility scripts
└── docker-compose.yml    # Local development setup
```

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- Docker & Docker Compose
- PostgreSQL 16+
- Redis 7+

### Environment Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/lawyerofone.git
cd lawyerofone
```

2. Copy environment variables:
```bash
cp .env.example .env
```

3. Update `.env` with your configuration:
- Database credentials
- API keys (OpenAI, Stripe, Supabase)
- JWT secrets

### Development with Docker

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### Manual Setup

#### Backend
```bash
cd backend
npm install
npx prisma migrate dev
npm run dev
```

#### Frontend
```bash
cd frontend
npm install
npm run dev
```

Access the application:
- Frontend: http://localhost:3000
- Backend API: http://localhost:3001
- API Documentation: http://localhost:3001/docs

## 🧪 Testing

### Backend Tests
```bash
cd backend
npm test                 # Run all tests
npm run test:watch      # Watch mode
npm run test:coverage   # Coverage report
```

### Frontend Tests
```bash
cd frontend
npm test                # Unit tests
npm run test:e2e       # E2E tests with Playwright
```

## 🎨 Design System

Our design system is built around:
- **Primary Color**: Utlyze Blue (#4169E1)
- **Accent Color**: Dark Slate (#34495E)

View the complete style guide:
```bash
cd frontend
npm run dev
# Navigate to http://localhost:3000/style-guide
```

## 📚 Documentation

- [API Documentation](./docs/API.md)
- [Design System Guide](./frontend/src/styles/README.md)
- [Database Schema](./backend/prisma/schema.prisma)
- [Deployment Guide](./docs/DEPLOYMENT.md)
- [Contributing Guidelines](./docs/CONTRIBUTING.md)

## 🔐 Security

- JWT-based authentication
- End-to-end encryption for sensitive documents
- Rate limiting and DDoS protection
- Regular security audits
- GDPR compliant data handling

## 🚀 Deployment

### Production Build

```bash
# Frontend
cd frontend
npm run build
npm start

# Backend
cd backend
npm run build
npm start
```

### Docker Deployment

```bash
# Build images
docker build -t lawyerofone-frontend ./frontend
docker build -t lawyerofone-backend ./backend

# Run with production config
docker-compose -f docker-compose.prod.yml up -d
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](./docs/CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [OpenAI](https://openai.com) for GPT-4 integration
- [Supabase](https://supabase.com) for authentication
- [Stripe](https://stripe.com) for payment processing
- [Vercel](https://vercel.com) for frontend hosting

## 📞 Support

- Email: support@lawyerofone.com
- Documentation: https://docs.lawyerofone.com
- Community: https://community.lawyerofone.com

---

Built with ❤️ by the LawyerOfOne Team
