import express, { Express, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';

dotenv.config();

const app: Express = express();

// ==================================
// Middleware
// ==================================
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ==================================
// API Routes
// ==================================

// Root
app.get('/', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'ok', message: 'Lawyer of One API is running' });
});

// Health
app.get('/api/v1/health', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'ok' });
});

// Contact
app.post('/api/v1/contact', (req: Request, res: Response) => {
  const { name, email, message } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }
  console.log('Contact form submission:', { name, email, message });
  return res.status(200).json({ success: true, message: 'Form submitted.' });
});

// ==================================
// Error Handling
// ==================================
app.use((_err: Error, _req: Request, res: Response, _next: NextFunction) => {
  res.status(500).json({ error: 'Internal Server Error' });
});

// ==================================
// Server Initialization
// ==================================
const PORT = process.env.PORT || 3001;
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
  });
}

export default app;