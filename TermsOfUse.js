"use client";
import React from 'react';

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Terms of Use</h1>
        <p className="text-gray-600 mb-4">
          Welcome to BookKart! These terms and conditions outline the rules and regulations for the use of our website.
        </p>
        <h2 className="text-2xl font-semibold mt-6">1. Acceptance of Terms</h2>
        <p className="text-gray-600 mb-4">
          By accessing this website, you accept these terms and conditions in full. If you disagree with any part of these terms, you must not use our website.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6">2. User Responsibilities</h2>
        <p className="text-gray-600 mb-4">
          Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account.
        </p>

        <h2 className="text-2xl font-semibold mt-6">3. Selling Books</h2>
        <p className="text-gray-600 mb-4">
          When selling books on BookKart, you agree to provide accurate and complete information about the books you are listing.
        </p>

        <h2 className="text-2xl font-semibold mt-6">4. Changes to Terms</h2>
        <p className="text-gray-600 mb-4">
          We may revise these terms from time to time. The revised terms will apply to the use of our website from the date of publication.
        </p>

        <h2 className="text-2xl font-semibold mt-6">5. Contact Us</h2>
        <p className="text-gray-600 mb-4">
          If you have any questions about these terms, please contact us at support@bookkart.com.
        </p>
      </div>
    </div>
  );
};

export default TermsOfUse;