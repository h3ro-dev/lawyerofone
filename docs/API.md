# LawyerOfOne API Documentation

## Overview

The LawyerOfOne API provides a RESTful interface for managing legal cases, documents, AI-powered legal assistance, and user authentication.

**Base URL**: `https://api.lawyerofone.com`  
**Version**: `v1`  
**Authentication**: JWT Bearer Token

## Authentication

All API requests (except auth endpoints) require authentication using a JWT token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

## Endpoints

### Authentication

#### POST /api/auth/register
Create a new user account.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securePassword123!",
  "name": "John Doe",
  "role": "CLIENT"
}
```

**Response:** `201 Created`
```json
{
  "user": {
    "id": "clm1234567890",
    "email": "user@example.com",
    "name": "John Doe",
    "role": "CLIENT"
  },
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIs..."
}
```

#### POST /api/auth/login
Authenticate a user and receive tokens.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securePassword123!"
}
```

**Response:** `200 OK`
```json
{
  "user": {
    "id": "clm1234567890",
    "email": "user@example.com",
    "name": "John Doe",
    "role": "CLIENT"
  },
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIs..."
}
```

#### POST /api/auth/refresh
Refresh an expired access token.

**Request Body:**
```json
{
  "refreshToken": "eyJhbGciOiJIUzI1NiIs..."
}
```

**Response:** `200 OK`
```json
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIs..."
}
```

#### POST /api/auth/logout
Logout and invalidate tokens.

**Response:** `200 OK`
```json
{
  "message": "Logged out successfully"
}
```

### User Management

#### GET /api/users/profile
Get current user profile.

**Response:** `200 OK`
```json
{
  "id": "clm1234567890",
  "email": "user@example.com",
  "name": "John Doe",
  "role": "CLIENT",
  "profileImage": "https://...",
  "phoneNumber": "+1234567890",
  "address": "123 Main St",
  "city": "New York",
  "state": "NY",
  "zipCode": "10001",
  "country": "USA"
}
```

#### PATCH /api/users/profile
Update user profile.

**Request Body:**
```json
{
  "name": "Jane Doe",
  "phoneNumber": "+1234567890",
  "address": "456 Elm St"
}
```

**Response:** `200 OK`

### Cases

#### GET /api/cases
Get all cases for the authenticated user.

**Query Parameters:**
- `status` (optional): Filter by status (OPEN, IN_PROGRESS, CLOSED, etc.)
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 20)
- `sort` (optional): Sort field (default: createdAt)
- `order` (optional): Sort order (asc/desc, default: desc)

**Response:** `200 OK`
```json
{
  "cases": [
    {
      "id": "clm1234567890",
      "title": "Contract Dispute with ABC Corp",
      "description": "...",
      "caseNumber": "CASE-2024-001",
      "status": "OPEN",
      "priority": "HIGH",
      "category": "Contract Law",
      "subcategory": "Commercial Contracts",
      "filingDate": "2024-01-15T00:00:00Z",
      "dueDate": "2024-02-15T00:00:00Z",
      "createdAt": "2024-01-10T10:00:00Z",
      "updatedAt": "2024-01-10T10:00:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 45,
    "pages": 3
  }
}
```

#### POST /api/cases
Create a new case.

**Request Body:**
```json
{
  "title": "Employment Contract Review",
  "description": "Need review of employment contract terms",
  "category": "Employment Law",
  "subcategory": "Contracts",
  "priority": "MEDIUM",
  "dueDate": "2024-02-01T00:00:00Z"
}
```

**Response:** `201 Created`

#### GET /api/cases/:id
Get a specific case by ID.

**Response:** `200 OK`

#### PATCH /api/cases/:id
Update a case.

**Request Body:**
```json
{
  "status": "IN_PROGRESS",
  "priority": "HIGH"
}
```

**Response:** `200 OK`

#### DELETE /api/cases/:id
Delete a case (soft delete).

**Response:** `204 No Content`

### Documents

#### GET /api/documents
Get all documents.

**Query Parameters:**
- `caseId` (optional): Filter by case
- `page` (optional): Page number
- `limit` (optional): Items per page

**Response:** `200 OK`

#### POST /api/documents/upload
Upload a new document.

**Request:** `multipart/form-data`
- `file`: The document file (PDF, DOCX, etc.)
- `title`: Document title
- `description` (optional): Document description
- `caseId` (optional): Associated case ID

**Response:** `201 Created`
```json
{
  "id": "clm1234567890",
  "title": "Employment Contract",
  "fileUrl": "https://s3.amazonaws.com/...",
  "fileType": "pdf",
  "fileSize": 245632,
  "mimeType": "application/pdf",
  "aiSummary": "This is an employment contract between...",
  "aiKeyPoints": ["Salary: $100,000", "Start date: March 1, 2024"],
  "analyzedAt": "2024-01-10T10:30:00Z"
}
```

#### GET /api/documents/:id
Get document details.

**Response:** `200 OK`

#### GET /api/documents/:id/download
Get a signed URL for document download.

**Response:** `200 OK`
```json
{
  "downloadUrl": "https://s3.amazonaws.com/...?signature=...",
  "expiresAt": "2024-01-10T11:00:00Z"
}
```

#### DELETE /api/documents/:id
Delete a document.

**Response:** `204 No Content`

### AI Assistant

#### POST /api/ai/chat
Start or continue a conversation with the AI assistant.

**Request Body:**
```json
{
  "message": "What are the key points I should consider in this employment contract?",
  "conversationId": "clm1234567890",  // Optional, for continuing conversation
  "caseId": "clm0987654321",          // Optional, for case context
  "documentIds": ["clm1111111111"]     // Optional, for document context
}
```

**Response:** `200 OK`
```json
{
  "conversationId": "clm1234567890",
  "message": {
    "id": "clm2222222222",
    "content": "Based on the employment contract you've shared, here are the key points to consider:\n\n1. **Compensation**: The base salary is $100,000 per year...",
    "role": "ASSISTANT",
    "createdAt": "2024-01-10T10:35:00Z"
  },
  "usage": {
    "promptTokens": 1250,
    "completionTokens": 450,
    "totalTokens": 1700,
    "cost": 0.0255
  }
}
```

#### GET /api/ai/conversations
Get all conversations for the user.

**Response:** `200 OK`

#### GET /api/ai/conversations/:id
Get a specific conversation with all messages.

**Response:** `200 OK`

#### POST /api/ai/analyze-document
Analyze a document using AI.

**Request Body:**
```json
{
  "documentId": "clm1234567890",
  "analysisType": "comprehensive"  // or "summary", "risks", "key_points"
}
```

**Response:** `200 OK`
```json
{
  "summary": "This is a standard employment agreement...",
  "keyPoints": [
    "Base salary: $100,000 per year",
    "Benefits: Health, dental, 401k matching",
    "Non-compete clause: 2 years post-employment"
  ],
  "risks": [
    {
      "type": "HIGH",
      "description": "Broad non-compete clause may limit future employment options"
    }
  ],
  "recommendations": [
    "Consider negotiating the non-compete period down to 1 year",
    "Clarify the definition of 'competing business'"
  ]
}
```

### Payments

#### GET /api/payments
Get payment history.

**Response:** `200 OK`

#### POST /api/payments/create-checkout
Create a Stripe checkout session.

**Request Body:**
```json
{
  "plan": "professional",  // "basic", "professional", "enterprise"
  "billingPeriod": "monthly"  // or "yearly"
}
```

**Response:** `200 OK`
```json
{
  "checkoutUrl": "https://checkout.stripe.com/...",
  "sessionId": "cs_test_..."
}
```

#### POST /api/payments/webhook
Stripe webhook endpoint (used by Stripe only).

### Notifications

#### GET /api/notifications
Get user notifications.

**Query Parameters:**
- `unreadOnly` (optional): Show only unread notifications
- `type` (optional): Filter by notification type

**Response:** `200 OK`

#### PATCH /api/notifications/:id/read
Mark a notification as read.

**Response:** `200 OK`

#### POST /api/notifications/mark-all-read
Mark all notifications as read.

**Response:** `200 OK`

## Error Responses

All errors follow a consistent format:

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data",
    "details": {
      "field": "email",
      "reason": "Invalid email format"
    }
  }
}
```

### Common Error Codes

- `UNAUTHORIZED`: Missing or invalid authentication
- `FORBIDDEN`: Insufficient permissions
- `NOT_FOUND`: Resource not found
- `VALIDATION_ERROR`: Invalid input data
- `RATE_LIMIT_EXCEEDED`: Too many requests
- `INTERNAL_SERVER_ERROR`: Server error

## Rate Limiting

API requests are limited to:
- 100 requests per 15 minutes for authenticated users
- 20 requests per 15 minutes for unauthenticated endpoints

Rate limit headers are included in responses:
- `X-RateLimit-Limit`: Request limit
- `X-RateLimit-Remaining`: Remaining requests
- `X-RateLimit-Reset`: Reset timestamp

## Webhooks

LawyerOfOne can send webhooks for certain events:

### Events
- `case.created`
- `case.updated`
- `case.closed`
- `document.uploaded`
- `document.analyzed`
- `payment.completed`
- `payment.failed`

### Webhook Payload
```json
{
  "id": "evt_1234567890",
  "type": "case.updated",
  "created": "2024-01-10T10:00:00Z",
  "data": {
    // Event-specific data
  }
}
```

## SDKs and Code Examples

### JavaScript/TypeScript
```typescript
import { LawyerOfOneClient } from '@lawyerofone/sdk';

const client = new LawyerOfOneClient({
  apiKey: 'your-api-key',
  baseUrl: 'https://api.lawyerofone.com'
});

// Create a case
const case = await client.cases.create({
  title: 'Contract Review',
  category: 'Contract Law',
  priority: 'HIGH'
});

// Chat with AI
const response = await client.ai.chat({
  message: 'What should I look for in this contract?',
  caseId: case.id
});
```

### Python
```python
from lawyerofone import LawyerOfOneClient

client = LawyerOfOneClient(
    api_key='your-api-key',
    base_url='https://api.lawyerofone.com'
)

# Upload document
document = client.documents.upload(
    file=open('contract.pdf', 'rb'),
    title='Employment Contract',
    case_id=case_id
)

# Analyze document
analysis = client.ai.analyze_document(
    document_id=document.id,
    analysis_type='comprehensive'
)
```

## Support

For API support, please contact:
- Email: api-support@lawyerofone.com
- Documentation: https://docs.lawyerofone.com
- Status Page: https://status.lawyerofone.com