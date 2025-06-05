import { Router, Request, Response } from 'express';

const router = Router();

// Health check endpoint
router.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'healthy',
    message: 'Lawyer of One API is running',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
  });
});

// Detailed health check
router.get('/detailed', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'healthy',
    message: 'Lawyer of One API is running',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
    memory: {
      usage: process.memoryUsage(),
      free: process.memoryUsage().heapTotal - process.memoryUsage().heapUsed,
    },
    nodejs: {
      version: process.version,
      platform: process.platform,
    },
  });
});

export default router;