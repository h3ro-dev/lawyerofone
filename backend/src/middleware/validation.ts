import { Request, Response, NextFunction } from 'express';
import { z, ZodError } from 'zod';

// Validation middleware factory
export function validateRequest<T extends z.ZodTypeAny>(schema: T) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Validate request body against schema
      const validated = await schema.parseAsync(req.body);
      req.body = validated;
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        // Format Zod validation errors
        const formattedErrors = error.errors.map((err) => ({
          field: err.path.join('.'),
          message: err.message,
        }));
        
        res.status(400).json({
          success: false,
          message: 'Validation failed',
          errors: formattedErrors,
        });
      } else {
        // Other errors
        res.status(500).json({
          success: false,
          message: 'Internal server error during validation',
        });
      }
    }
  };
}

// Validate query parameters
export function validateQuery<T extends z.ZodTypeAny>(schema: T) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validated = await schema.parseAsync(req.query);
      req.query = validated;
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const formattedErrors = error.errors.map((err) => ({
          field: err.path.join('.'),
          message: err.message,
        }));
        
        res.status(400).json({
          success: false,
          message: 'Invalid query parameters',
          errors: formattedErrors,
        });
      } else {
        res.status(500).json({
          success: false,
          message: 'Internal server error during validation',
        });
      }
    }
  };
}

// Validate route parameters
export function validateParams<T extends z.ZodTypeAny>(schema: T) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validated = await schema.parseAsync(req.params);
      req.params = validated;
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const formattedErrors = error.errors.map((err) => ({
          field: err.path.join('.'),
          message: err.message,
        }));
        
        res.status(400).json({
          success: false,
          message: 'Invalid route parameters',
          errors: formattedErrors,
        });
      } else {
        res.status(500).json({
          success: false,
          message: 'Internal server error during validation',
        });
      }
    }
  };
}