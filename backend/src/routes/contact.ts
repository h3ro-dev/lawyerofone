import { Router, Request, Response } from 'express';
import { z } from 'zod';
import { validateRequest } from '../middleware/validation';
import { sendContactEmail } from '../services/email';

const router = Router();

// Contact form schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  type: z.enum(['general', 'consultation', 'support']).default('general'),
});

// Contact form submission
router.post('/', validateRequest(contactSchema), async (req: Request, res: Response) => {
  try {
    const contactData = req.body;
    
    // TODO: Implement email service
    // await sendContactEmail(contactData);
    
    // For now, just log the contact
    console.log('New contact submission:', contactData);
    
    res.status(200).json({
      success: true,
      message: 'Thank you for contacting us. We will get back to you within 24 hours.',
      data: {
        submittedAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit contact form. Please try again later.',
    });
  }
});

// Get contact information
router.get('/info', (req: Request, res: Response) => {
  res.json({
    email: 'support@lawyerofone.ai',
    phone: '+1 (555) 123-4567',
    hours: {
      weekdays: '9:00 AM - 6:00 PM EST',
      weekends: 'Closed',
    },
    responseTime: '24 hours',
  });
});

export default router;