import { Router, Request, Response } from 'express';
import { z } from 'zod';
import { validateRequest } from '../middleware/validation';

const router = Router();

// Legal check request schema
const legalCheckSchema = z.object({
  businessName: z.string().min(2, 'Business name is required'),
  businessType: z.enum(['sole-proprietorship', 'llc', 'corporation', 'partnership', 'other']),
  industry: z.string().min(2, 'Industry is required'),
  employees: z.number().min(0).max(10000),
  annualRevenue: z.enum(['0-50k', '50k-250k', '250k-1m', '1m-5m', '5m+']),
  email: z.string().email('Valid email required'),
  concerns: z.array(z.string()).optional(),
});

// Submit legal health check request
router.post('/request', validateRequest(legalCheckSchema), async (req: Request, res: Response) => {
  try {
    const checkData = req.body;
    
    // Generate a unique check ID
    const checkId = `LHC-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    // TODO: Store in database and trigger AI analysis
    console.log('New legal health check request:', { checkId, ...checkData });
    
    res.status(201).json({
      success: true,
      message: 'Your legal health check has been initiated. You will receive results within 48 hours.',
      data: {
        checkId,
        estimatedCompletionTime: '48 hours',
        nextSteps: [
          'We will analyze your business profile',
          'Identify potential legal risks and opportunities',
          'Prepare a comprehensive report',
          'Email you the results with recommendations',
        ],
      },
    });
  } catch (error) {
    console.error('Legal check request error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit legal health check request. Please try again.',
    });
  }
});

// Get legal check categories
router.get('/categories', (req: Request, res: Response) => {
  res.json({
    categories: [
      {
        id: 'contracts',
        name: 'Contracts & Agreements',
        description: 'Review your standard contracts and terms',
        commonIssues: ['Missing clauses', 'Unclear terms', 'Liability gaps'],
      },
      {
        id: 'compliance',
        name: 'Regulatory Compliance',
        description: 'Check compliance with industry regulations',
        commonIssues: ['License requirements', 'Data privacy', 'Industry-specific rules'],
      },
      {
        id: 'intellectual-property',
        name: 'Intellectual Property',
        description: 'Protect your business assets',
        commonIssues: ['Trademark needs', 'Copyright protection', 'Trade secrets'],
      },
      {
        id: 'employment',
        name: 'Employment Law',
        description: 'Employee agreements and policies',
        commonIssues: ['Worker classification', 'Handbook updates', 'Wage compliance'],
      },
      {
        id: 'business-structure',
        name: 'Business Structure',
        description: 'Ensure optimal legal structure',
        commonIssues: ['Personal liability', 'Tax efficiency', 'Growth planning'],
      },
    ],
  });
});

export default router;