"use client";
import React, { useState } from 'react';
import { Code, X } from 'lucide-react';

const DevNotice = () => {
  const [isVisible, setIsVisible] = useState(true);
  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-black border border-orange-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 max-w-sm animate-slide-in">
        <Code className="w-5 h-5 flex-shrink-0" />
        <div className="flex-1">
          <p className="font-medium text-sm">Development Mode</p>
          <p className="text-xs opacity-80">App still in development</p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-white/80 hover:text-white p-1 transition-colors"
        >
          <X className="w-4 h-4 cursor-pointer" />
        </button>
      </div>
      
      <style jsx>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default DevNotice;