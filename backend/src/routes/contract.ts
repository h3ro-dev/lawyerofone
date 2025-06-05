import { Router, Request, Response } from 'express';
import { z } from 'zod';
import { validateRequest } from '../middleware/validation';

const router = Router();

// Contract review request schema
const contractReviewSchema = z.object({
  contractType: z.enum(['service', 'nda', 'employment', 'vendor', 'lease', 'other']),
  urgency: z.enum(['standard', 'urgent', 'emergency']),
  contractText: z.string().min(100, 'Contract text must be at least 100 characters'),
  specificConcerns: z.array(z.string()).optional(),
  email: z.string().email('Valid email required'),
});

// Quick contract analysis schema  
const quickAnalysisSchema = z.object({
  contractSnippet: z.string().min(50).max(5000),
  questionType: z.enum(['clarity', 'risk', 'fairness', 'general']),
});

// Submit contract for review
router.post('/review', validateRequest(contractReviewSchema), async (req: Request, res: Response) => {
  try {
    const reviewData = req.body;
    
    // Generate review ID
    const reviewId = `CR-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    // Calculate estimated time based on urgency
    const estimatedHours = {
      standard: 48,
      urgent: 24,
      emergency: 4,
    };
    
    // TODO: Store in database and queue for AI + attorney review
    console.log('New contract review request:', { reviewId, ...reviewData });
    
    res.status(201).json({
      success: true,
      message: 'Your contract has been submitted for review.',
      data: {
        reviewId,
        estimatedCompletionHours: estimatedHours[reviewData.urgency],
        process: [
          'AI analysis for initial issues',
          'Attorney review for legal accuracy',
          'Plain-English summary preparation',
          'Risk assessment and recommendations',
        ],
        pricing: {
          standard: '$99',
          urgent: '$199',
          emergency: '$399',
        }[reviewData.urgency],
      },
    });
  } catch (error) {
    console.error('Contract review error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit contract for review. Please try again.',
    });
  }
});

// Quick AI analysis (free tier)
router.post('/quick-analysis', validateRequest(quickAnalysisSchema), async (req: Request, res: Response) => {
  try {
    const { contractSnippet, questionType } = req.body;
    
    // TODO: Implement AI analysis
    // For now, return mock response
    const mockAnalysis = {
      clarity: 'This clause appears to have ambiguous language that could be interpreted multiple ways.',
      risk: 'Potential risk identified: unlimited liability clause detected.',
      fairness: 'This term appears one-sided and may benefit the other party disproportionately.',
      general: 'This contract section contains standard business terms commonly seen in service agreements.',
    };
    
    res.json({
      success: true,
      analysis: mockAnalysis[questionType],
      disclaimer: 'This is an AI-powered initial assessment. For legal advice, please consult with an attorney.',
      suggestedAction: 'Consider scheduling a full contract review for comprehensive analysis.',
    });
  } catch (error) {
    console.error('Quick analysis error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to analyze contract snippet. Please try again.',
    });
  }
});

// Get contract templates
router.get('/templates', (req: Request, res: Response) => {
  res.json({
    templates: [
      {
        id: 'service-agreement',
        name: 'Service Agreement',
        description: 'Standard service agreement for B2B relationships',
        price: '$49',
        customizable: true,
      },
      {
        id: 'nda',
        name: 'Non-Disclosure Agreement',
        description: 'Mutual or one-way NDA templates',
        price: '$29',
        customizable: true,
      },
      {
        id: 'contractor-agreement',
        name: 'Independent Contractor Agreement',
        description: 'For hiring freelancers and contractors',
        price: '$39',
        customizable: true,
      },
      {
        id: 'terms-of-service',
        name: 'Terms of Service',
        description: 'Website/app terms of service',
        price: '$79',
        customizable: true,
      },
    ],
  });
});

export default router;