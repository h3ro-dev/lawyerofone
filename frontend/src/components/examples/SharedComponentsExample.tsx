/**
 * Shared Components Integration Example
 * This shows how to use the new @h3ro-dev/ofone-ui package
 */

import React, { useState } from 'react';
// NEW: Import from shared component library
import { Button, Card, Input, Modal } from '@h3ro-dev/ofone-ui';

// OLD: Previous imports (now deprecated)
// import { Button } from '../ui/Button';
// import { Card } from '../ui/Card';
// import { Input } from '../ui/Input';
// import { Modal } from '../ui/Modal';

export const SharedComponentsExample: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Shared Components from @h3ro-dev/ofone-ui</h1>
      <p style={{ marginBottom: '2rem' }}>
        These components are now shared across all Of One projects!
      </p>

      {/* Card Component */}
      <Card padding="lg" style={{ marginBottom: '2rem' }}>
        <h2>Card Component</h2>
        <p>This card is from the shared library. It has consistent styling across all projects.</p>
        
        {/* Button Examples */}
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
          <Button variant="primary" onClick={() => setIsModalOpen(true)}>
            Open Modal
          </Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </Card>

      {/* Input Example */}
      <Card padding="lg" style={{ marginBottom: '2rem' }}>
        <h2>Input Component</h2>
        <Input
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          hint="This input is from the shared component library"
          fullWidth
        />
      </Card>

      {/* Benefits Section */}
      <Card padding="lg">
        <h2>Benefits of Shared Components</h2>
        <ul style={{ paddingLeft: '1.5rem' }}>
          <li>✅ Consistent design across all Of One projects</li>
          <li>✅ Single source of truth for UI components</li>
          <li>✅ Easier maintenance and updates</li>
          <li>✅ Full TypeScript support</li>
          <li>✅ Reduced bundle size (no duplication)</li>
        </ul>
      </Card>

      {/* Modal Example */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Shared Modal Component"
        footer={
          <>
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsModalOpen(false)}>
              Confirm
            </Button>
          </>
        }
      >
        <p>This modal is from the @h3ro-dev/ofone-ui package!</p>
        <p style={{ marginTop: '1rem' }}>
          It includes all the features you need: header, footer, close button, and escape key support.
        </p>
      </Modal>
    </div>
  );
};

// Export for use in other files
export default SharedComponentsExample;