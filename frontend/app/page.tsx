"use client";

import { useState } from "react";
import Header from "./components/Header";
import ContactModal from "./components/ContactModal";

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <Header onGetStarted={() => setIsContactModalOpen(true)} />
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Your One-Person Legal Department
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              AI-powered legal assistant with human attorney oversight. Get instant contract reviews, 
              compliance reminders, and plain-English legal explanations.
            </p>
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="btn-primary text-lg px-8 py-4"
            >
              Get Your Free Legal Health Check
            </button>
            <p className="mt-4 text-sm text-gray-500">
              No credit card required • 5-minute setup
            </p>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Sound Familiar?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "😰",
                  title: "Legal Headaches",
                  description: "Keeping you up at night with worry about compliance and contracts"
                },
                {
                  icon: "📄",
                  title: "Contract Overload",
                  description: "Every single contract lands on your desk, taking hours to review"
                },
                {
                  icon: "🔍",
                  title: "Fine Print Fear",
                  description: "Worried you're missing critical details that could hurt your business"
                },
                {
                  icon: "💸",
                  title: "Costly Questions",
                  description: "Paying hundreds per hour for simple legal questions"
                }
              ].map((pain, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl mb-4">{pain.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{pain.title}</h3>
                  <p className="text-gray-600">{pain.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Your Legal Assistant, Always On Call
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Contract Review & Analysis",
                  description: "Upload any contract and get instant analysis with risk assessment and negotiation points",
                  icon: "📋"
                },
                {
                  title: "Plain-English Explanations",
                  description: "No more legal jargon. Get clear, actionable explanations you can actually understand",
                  icon: "💬"
                },
                {
                  title: "Compliance Reminders",
                  description: "Never miss important deadlines or regulatory requirements again",
                  icon: "⏰"
                },
                {
                  title: "Attorney Oversight",
                  description: "Real lawyers review AI recommendations for accuracy and reliability",
                  icon: "⚖️"
                },
                {
                  title: "24/7 Availability",
                  description: "Get legal help when you need it, not when your lawyer is available",
                  icon: "🌐"
                },
                {
                  title: "Cost-Effective",
                  description: "Save thousands on legal fees while getting better, faster service",
                  icon: "💰"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#4169E1] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stop Losing Sleep Over Legal Issues
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of small business owners who've simplified their legal operations 
              with Lawyer of One.
            </p>
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="bg-white text-[#4169E1] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 text-lg"
            >
              Get Your Free Legal Health Check
            </button>
            <p className="mt-4 text-sm">
              Takes just 5 minutes • No credit card required
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-2xl font-bold">Lawyer of One</h3>
                <p className="text-gray-400">Part of the Utlyze "Of One" suite</p>
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
          </div>
        </footer>
      </main>
    </>
  );
}
