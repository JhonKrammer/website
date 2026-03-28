'use client';

import { Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-deep-space border-t border-white/[0.06] pt-12 pb-8">
      <div className="max-w-content mx-auto px-5 lg:px-20 flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Left */}
        <div className="flex flex-col items-center sm:items-start gap-1">
          <span className="text-text-primary font-bold text-lg">Dark Matter</span>
          <span className="text-sm text-text-tertiary">© 2026 Dark Matter. All rights reserved.</span>
        </div>

        {/* Right - Social Links */}
        <div className="flex gap-4">
          <a href="#" className="text-text-tertiary hover:text-text-secondary transition-colors" aria-label="Twitter">
            <Twitter size={20} />
          </a>
          <a href="#" className="text-text-tertiary hover:text-text-secondary transition-colors" aria-label="GitHub">
            <Github size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
