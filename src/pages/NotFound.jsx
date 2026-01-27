import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center">
        <div className="text-8xl font-black mb-4 bg-gradient-to-r from-[#EF4444] via-[#A855F7] to-[#3B82F6] bg-clip-text text-transparent">
          404
        </div>
        <h1 className="text-4xl font-black mb-4">Page Not Found</h1>
        <p className="text-[#9CA3AF] mb-8 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#EF4444] hover:bg-[#DC2626] text-white font-semibold px-8 py-3 rounded-lg transition-all shadow-lg shadow-[#EF4444]/40"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 bg-[#1a1a1a] border border-[#2D2D2D] hover:border-[#333333] text-white font-semibold px-8 py-3 rounded-lg transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
