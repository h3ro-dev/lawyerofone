import React, { useState } from 'react';
import { Button, Card, CTASection, Input, Modal } from '@h3ro-dev/ofone-ui';

/**
 * Demo page showing the integration of shared components from @h3ro-dev/ofone-ui
 * This demonstrates how all Of One projects can use the same component library
 */
export default function SharedComponentsDemo() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      if (email === 'demo@lawyerofone.com') {
        setIsModalOpen(true);
      } else {
        setError('Invalid credentials. Try demo@lawyerofone.com');
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F9FAFB' }}>
      {/* Hero Section */}
      <CTASection
        title="Welcome to the New Lawyer of One"
        description="Now powered by the unified Of One component library. Experience consistent, beautiful UI across all our tools."
        cta={
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Button size="lg" onClick={() => setIsModalOpen(true)}>
              See What's New
            </Button>
            <Button variant="outline" size="lg">
              View Documentation
            </Button>
          </div>
        }
        background="primary"
      />

      {/* Demo Section */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Shared Components in Action</h2>
          <p style={{ fontSize: '1.125rem', color: '#6B7280' }}>
            These components are now shared across all Of One projects
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          {/* Login Demo */}
          <Card padding="lg">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Login Form Demo</h3>
            <form onSubmit={handleSubmit}>
              <Input
                label="Email Address"
                type="email"
                placeholder="demo@lawyerofone.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={error}
                fullWidth
                leftIcon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M3 8L12 13L21 8" stroke="currentColor" strokeWidth="2"/>
                    <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                }
              />
              
              <Input
                label="Password"
                type="password"
                placeholder="Enter any password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                leftIcon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M7 11V7C7 4.79086 8.79086 3 11 3H13C15.2091 3 17 4.79086 17 7V11" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                }
              />
              
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <Button type="submit" fullWidth loading={loading}>
                  Sign In
                </Button>
                <Button variant="outline" fullWidth type="button">
                  Sign Up
                </Button>
              </div>
            </form>
          </Card>

          {/* Button Variants */}
          <Card padding="lg">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Button Variants</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="primary" loading>Loading State</Button>
              <Button variant="primary" disabled>Disabled State</Button>
            </div>
          </Card>

          {/* Card Examples */}
          <Card padding="lg" hover>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Hoverable Card</h3>
            <p style={{ marginBottom: '1rem' }}>
              This card has hover effects. Try hovering over it to see the elevation change.
            </p>
            <Button variant="ghost" size="sm">
              Learn More →
            </Button>
          </Card>

          {/* Input States */}
          <Card padding="lg">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Input States</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Input
                label="Normal Input"
                placeholder="Enter text..."
                fullWidth
              />
              <Input
                label="With Hint"
                placeholder="Enter email..."
                hint="We'll never share your email"
                fullWidth
              />
              <Input
                label="Error State"
                placeholder="Enter password..."
                error="Password is required"
                fullWidth
              />
              <Input
                label="Disabled"
                placeholder="Can't edit this..."
                disabled
                fullWidth
              />
            </div>
          </Card>
        </div>

        {/* Integration Benefits */}
        <div style={{ marginTop: '4rem' }}>
          <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '3rem' }}>
            Benefits of Shared Components
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <Card padding="md">
              <h4 style={{ color: '#4169E1', marginBottom: '0.5rem' }}>Consistency</h4>
              <p>Same look and feel across all Of One projects</p>
            </Card>
            <Card padding="md">
              <h4 style={{ color: '#4169E1', marginBottom: '0.5rem' }}>Efficiency</h4>
              <p>Write once, use everywhere - no duplication</p>
            </Card>
            <Card padding="md">
              <h4 style={{ color: '#4169E1', marginBottom: '0.5rem' }}>Maintainability</h4>
              <p>Update in one place, changes reflect everywhere</p>
            </Card>
            <Card padding="md">
              <h4 style={{ color: '#4169E1', marginBottom: '0.5rem' }}>TypeScript</h4>
              <p>Full type safety and IntelliSense support</p>
            </Card>
          </div>
        </div>
      </div>

      {/* Demo Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="What's New in Lawyer of One"
        size="md"
        footer={
          <>
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Close
            </Button>
            <Button onClick={() => {
              setIsModalOpen(false);
              alert('Navigating to docs...');
            }}>
              View Full Changelog
            </Button>
          </>
        }
      >
        <div style={{ padding: '1rem 0' }}>
          <h4 style={{ marginBottom: '1rem' }}>🎉 Unified Component Library</h4>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li>All Of One projects now share the same components</li>
            <li>Consistent design system across the ecosystem</li>
            <li>Faster development with reusable components</li>
            <li>Better performance with optimized builds</li>
          </ul>
          
          <h4 style={{ marginBottom: '1rem' }}>🚀 Coming Soon</h4>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Dark mode support</li>
            <li>More component variations</li>
            <li>Animation library</li>
            <li>Form validation utilities</li>
          </ul>
        </div>
      </Modal>
    </div>
  );
}