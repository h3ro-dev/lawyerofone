"use client";

import { useState } from "react";
import Header from "./components/Header";
import ContactModal from "./components/ContactModal";
import { Button, Card, CardContent, Container, Input } from "../src/components/ui";

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [email, setEmail] = useState("");

  const painPoints = [
    {
      icon: "😰",
      title: "The 3 AM Legal Panic",
      subtitle: '"Did I miss something in that contract?"',
      description: "You signed it last week. Now you&rsquo;re lying awake, wondering if you just agreed to something that could sink your business."
    },
    {
      icon: "📄",
      title: "The Contract Mountain",
      subtitle: '"Another contract. Great."',
      description: "Vendor agreements. Client contracts. NDAs. They all land on YOUR desk because you don&rsquo;t have a legal team."
    },
    {
      icon: "🔍",
      title: "The Fine Print Fear",
      subtitle: '"What am I not seeing?"',
      description: "You know it&rsquo;s there – that one clause that could cost you everything. But you&rsquo;re not a lawyer."
    },
    {
      icon: "💸",
      title: "The $500/Hour Reality Check",
      subtitle: '"I just need a quick answer..."',
      description: "But there&rsquo;s no such thing as a &lsquo;quick&rsquo; legal question when lawyers bill by the hour."
    }
  ];

  const features = [
    {
      title: "Contract Intelligence That Works Overtime",
      subtitle: "Never miss critical details again",
      items: [
        "Red flag detection for unfair terms",
        "Plain-English translation of legal jargon",
        "Side-by-side comparison of contract versions",
        "Automated compliance tracking"
      ]
    },
    {
      title: "Your Legal Co-Pilot",
      subtitle: "Like having a lawyer on speed dial",
      items: [
        "24/7 availability for urgent questions",
        "Personalized legal checklists for your industry",
        "Proactive alerts for regulatory changes",
        "Document templates that actually make sense"
      ]
    },
    {
      title: "Built for Small Business Reality",
      subtitle: "Because you wear all the hats",
      items: [
        "5-minute contract reviews (not 5-day turnarounds)",
        "Costs less than one hour of traditional legal fees",
        "No retainers, no surprises, no BS",
        "Scale up or down as you grow"
      ]
    }
  ];

  const testimonials = [
    {
      quote: "I caught a liability clause that would have made me personally responsible for $500K. Lawyer of One paid for itself 100x over in one review.",
      author: "Sarah Chen",
      role: "Marketing Agency Owner"
    },
    {
      quote: "Used to spend $2,000 just to have a lawyer look at a basic vendor contract. Now I get better analysis in minutes for a fraction of the cost.",
      author: "Marcus Johnson",
      role: "E-commerce Founder"
    },
    {
      quote: "The plain-English explanations are a game-changer. I finally understand what I&rsquo;m signing without needing a law degree.",
      author: "Rita Patel",
      role: "Freelance Designer"
    }
  ];

  const stats = [
    { value: "2.5M", label: "Risky clauses caught" },
    { value: "$8.2M", label: "Saved in legal fees" },
    { value: "4.8/5", label: "Average rating" },
    { value: "15 min", label: "Average review time" }
  ];

  const faqs = [
    {
      question: "Is this real legal advice?",
      answer: "Lawyer of One provides legal information and document analysis reviewed by licensed attorneys. For specific legal advice about your situation, we can connect you with our network of small business attorneys at preferred rates."
    },
    {
      question: "What types of contracts can you review?",
      answer: "Everything from vendor agreements and NDAs to partnership contracts and terms of service. If it's a business document, we can analyze it."
    },
    {
      question: "How quickly do I get results?",
      answer: "Most contracts are analyzed within 15 minutes. Complex documents may take up to an hour. Compare that to the 3-5 days (minimum) with traditional lawyers."
    },
    {
      question: "What makes this different from other legal AI tools?",
      answer: "Two things: attorney oversight on every analysis, and AI trained specifically on small business needs. We don&rsquo;t just spot issues – we explain why they matter to YOU."
    }
  ];

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", email);
    setIsContactModalOpen(true);
  };

  return (
    <div className="w-full overflow-visible">
      <Header onGetStarted={() => setIsContactModalOpen(true)} />
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
      
      <main className="w-full overflow-visible" style={{ minHeight: 'auto' }}>
        {/* Hero Section */}
        <section data-section="hero" className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
          <Container>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Stop Losing Sleep Over Legal Landmines
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                Your one-person legal department that catches problems before they explode. 
                AI-powered legal support with human attorney oversight – at a fraction of the cost.
              </p>
              <Button 
                size="xl"
                onClick={() => setIsContactModalOpen(true)}
                className="mb-6"
              >
                Get Your Free Legal Health Check →
              </Button>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <span className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Reviewed by licensed attorneys
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> 10,000+ contracts analyzed
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Save 80% on legal costs
                </span>
              </div>
            </div>
          </Container>
        </section>

        {/* Pain Points Section */}
        <section data-section="pain-points" className="py-20 bg-white">
          <Container>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              Sound Familiar?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {painPoints.map((pain, index) => (
                <Card key={index} variant="bordered" className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="text-5xl mb-4">{pain.icon}</div>
                    <h3 className="text-2xl font-bold mb-2">{pain.title}</h3>
                    <p className="text-lg text-[#4169E1] font-medium mb-3">{pain.subtitle}</p>
                    <p className="text-gray-600">{pain.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Solution Section */}
        <section data-section="solution" className="py-20 bg-gray-50">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your One-Person Legal Department
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Finally, legal support designed for businesses of one. Get instant contract analysis, 
                plain-English explanations, and peace of mind – all backed by real attorneys.
              </p>
            </div>

            {/* How It Works */}
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              {[
                { 
                  step: "1", 
                  title: "Upload Any Contract", 
                  desc: "Drop in any legal document. Contracts, agreements, terms – we handle it all." 
                },
                { 
                  step: "2", 
                  title: "Get Instant Analysis", 
                  desc: "Our AI spots red flags, explains confusing terms, and highlights what matters." 
                },
                { 
                  step: "3", 
                  title: "Attorney Verification", 
                  desc: "Every analysis is reviewed by licensed attorneys. Real expertise, not just algorithms." 
                },
                { 
                  step: "4", 
                  title: "Take Action Confidently", 
                  desc: "Make informed decisions with clear recommendations and suggested revisions." 
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#4169E1] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Features Section */}
        <section data-section="features" className="py-20 bg-white">
          <Container>
            <div className="grid lg:grid-cols-3 gap-12">
              {features.map((feature, index) => (
                <div key={index}>
                  <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-lg text-[#4169E1] font-medium mb-6">{feature.subtitle}</p>
                  <ul className="space-y-3">
                    {feature.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-500 mr-3 flex-shrink-0">✓</span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Social Proof Section */}
        <section data-section="social-proof" className="py-20 bg-gray-50">
          <Container>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              Join 5,000+ Small Business Owners Sleeping Better
            </h2>
            
            {/* Testimonials */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {testimonials.map((testimonial, index) => (
                <Card key={index} variant="elevated">
                  <CardContent className="p-8">
                    <p className="text-lg mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-[#4169E1] mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Risk Reversal Section */}
        <section data-section="risk-reversal" className="py-20 bg-[#4169E1] text-white">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Try It Risk-Free for 30 Days
              </h2>
              <p className="text-xl mb-8">
                Not sure if Lawyer of One is right for you? Test drive our full platform free for 30 days. 
                Review unlimited contracts. Get real attorney oversight. Cancel anytime.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-8 text-left max-w-xl mx-auto">
                {[
                  "No credit card required to start",
                  "Full access to all features",
                  "Real attorney reviews included",
                  "Export all your data if you leave"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <span className="mr-2">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Button 
                size="xl"
                variant="secondary"
                onClick={() => setIsContactModalOpen(true)}
                className="bg-white text-[#4169E1] hover:bg-gray-100"
              >
                Start Your Free Legal Health Check →
              </Button>
            </div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section data-section="faq" className="py-20 bg-white">
          <Container size="md">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <Card key={index} variant="bordered">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Final CTA Section */}
        <section data-section="final-cta" className="py-20 bg-gradient-to-b from-white to-blue-50">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Stop Guessing. Start Protecting Your Business.
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join thousands of small business owners who&rsquo;ve taken control of their legal risks. 
                Your free legal health check takes just 5 minutes.
              </p>
              
              {/* Email Capture Form */}
              <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto mb-8">
                <div className="flex gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1"
                  />
                  <Button type="submit" size="lg">
                    Get Started →
                  </Button>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  No credit card required • Takes 5 minutes • Instant results
                </p>
              </form>

              {/* Trust Elements */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <span>🔒 Bank-level encryption</span>
                <span>📜 Attorney-client privilege protected</span>
                <span>🏆 SOC 2 Type II certified</span>
                <span>⚖️ Licensed in all 50 states</span>
              </div>
            </div>
          </Container>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <Container>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-2xl font-bold">Lawyer of One</h3>
                <p className="text-gray-400">Part of the Utlyze &ldquo;Of One&rdquo; suite</p>
              </div>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-gray-300">Privacy Policy</a>
                <a href="#" className="hover:text-gray-300">Terms of Service</a>
                <a href="#" className="hover:text-gray-300">Contact</a>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>&copy; 2024 Lawyer of One by Utlyze. All rights reserved.</p>
            </div>
          </Container>
        </footer>
      </main>
    </div>
  );
}
