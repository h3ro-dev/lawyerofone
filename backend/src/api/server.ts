import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import path from 'path';

// Import routes
import healthRouter from '../routes/health';
import contactRouter from '../routes/contact';
import legalCheckRouter from '../routes/legal-check';
import contractRouter from '../routes/contract';

// Load environment variables
dotenv.config({ path: path.join(__dirname, '../../../.env') });

// Create Express app
const app: Application = express();

// Port configuration
const PORT = process.env.PORT || 3001;
const isDevelopment = process.env.NODE_ENV !== 'production';

// Basic rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
});

// Middleware
app.use(helmet()); // Security headers
app.use(cors({
  origin: isDevelopment 
    ? ['http://localhost:3000', 'http://localhost:3001'] 
    : ['https://lawyerofone.ai', 'https://www.lawyerofone.ai'],
  credentials: true,
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(morgan(isDevelopment ? 'dev' : 'combined'));
app.use('/api/', limiter);

// Routes
app.use('/api/health', healthRouter);
app.use('/api/contact', contactRouter);
app.use('/api/legal-check', legalCheckRouter);
app.use('/api/contract', contractRouter);

// Root endpoint
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Lawyer of One API',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      contact: '/api/contact',
      legalCheck: '/api/legal-check',
      contract: '/api/contract',
    },
  });
});

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    error: 'Not Found',
    message: `The requested resource ${req.url} was not found on this server.`,
  });
});

// Global error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Error:', err);
  
  const status = (err as any).status || 500;
  const message = isDevelopment ? err.message : 'Internal Server Error';
  
  res.status(status).json({
    error: true,
    message,
    ...(isDevelopment && { stack: err.stack }),
  });
});

// Start server (only if not in Vercel environment)
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`🚀 Lawyer of One API running on port ${PORT}`);
    console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`);
  });
}

// Export for Vercel
export default app;