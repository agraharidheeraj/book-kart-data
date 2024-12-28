"use client";
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>
        <p className="text-gray-600 mb-4">
          At BookKart, we are committed to protecting your privacy. This privacy policy explains how we collect, use, and disclose your information.
        </p>

        <h2 className="text-2xl font-semibold mt-6">1. Information We Collect</h2>
        <p className="text-gray-600 mb-4">
          We collect information from you when you register on our site or place an order. This includes your name, email address, mailing address, phone number, and payment information.
        </p>

        <h2 className="text-2xl font-semibold mt-6">2. How We Use Your Information</h2>
        <p className="text-gray-600 mb-4">
          We use the information we collect to process transactions, improve our website, and send periodic emails regarding your order or other products and services.
        </p>

        <h2 className="text-2xl font-semibold mt-6">3. Sharing Your Information</h2>
        <p className="text-gray-600 mb-4">
          We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties without your consent.
        </p>

        <h2 className="text-2xl font-semibold mt-6">4. Security of Your Information</h2>
        <p className="text-gray-600 mb-4">
          We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.
        </p>

        <h2 className="text-2xl font-semibold mt-6">5. Changes to Our Privacy Policy</h2>
        <p className="text-gray-600 mb-4">
          We may update this privacy policy periodically. We will notify you about significant changes in the way we treat personal information by sending a notice to the primary email address specified in your account or by placing a prominent notice on our site.
        </p>

        <h2 className="text-2xl font-semibold mt-6">6. Contact Us</h2>
        <p className="text-gray-600 mb-4">
          If you have any questions about this privacy policy or our practices regarding your personal information, please contact us at support@bookkart.com.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;