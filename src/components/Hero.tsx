'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[100vh] flex items-center justify-center bg-deep-space overflow-hidden">
      {/* Particle dots */}
      {[
        { top: '15%', left: '10%', size: 3, delay: 0, duration: 20 },
        { top: '25%', left: '85%', size: 2, delay: 2, duration: 18 },
        { top: '70%', left: '5%', size: 4, delay: 4, duration: 22 },
        { top: '80%', left: '90%', size: 2, delay: 1, duration: 19 },
        { top: '40%', left: '20%', size: 3, delay: 3, duration: 21 },
        { top: '55%', left: '75%', size: 2, delay: 5, duration: 17 },
        { top: '10%', left: '50%', size: 3, delay: 2.5, duration: 23 },
        { top: '90%', left: '40%', size: 2, delay: 1.5, duration: 20 },
        { top: '60%', left: '55%', size: 4, delay: 3.5, duration: 16 },
        { top: '30%', left: '70%', size: 2, delay: 0.5, duration: 24 },
        { top: '45%', left: '35%', size: 3, delay: 4.5, duration: 18 },
        { top: '75%', left: '65%', size: 2, delay: 2, duration: 22 },
        { top: '20%', left: '30%', size: 3, delay: 1, duration: 19 },
        { top: '85%', left: '25%', size: 2, delay: 3, duration: 21 },
        { top: '50%', left: '95%', size: 3, delay: 0, duration: 20 },
      ].map((dot, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            top: dot.top,
            left: dot.left,
            width: dot.size,
            height: dot.size,
            backgroundColor: 'rgba(108,142,239,0.3)',
            animation: `float ${dot.duration}s ${dot.delay}s ease-in-out infinite`,
          }}
        />
      ))}

      {/* Glow gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(108,142,239,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-5">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-[40px] md:text-[64px] font-bold text-text-primary tracking-[-0.03em] leading-tight"
        >
          Dark Matter
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="mx-auto mt-4 h-[3px] w-[60px] rounded-[2px]"
          style={{ background: 'linear-gradient(135deg, #6C8EEF 0%, #A78BFA 100%)' }}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="mt-5 text-base md:text-xl text-text-secondary leading-relaxed"
        >
          1 个人 + 8 个 AI Agent，重新定义公司形态
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
        >
          <Link
            href="/about"
            className="inline-block mt-8 py-3 px-7 text-white text-base font-semibold rounded-lg transition-all duration-200 hover:opacity-90 hover:-translate-y-[1px]"
            style={{
              background: 'linear-gradient(135deg, #6C8EEF 0%, #A78BFA 100%)',
              boxShadow: '0 4px 20px rgba(108,142,239,0.3)',
            }}
          >
            了解更多 →
          </Link>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-text-tertiary" style={{ animation: 'scrollHint 2s ease-in-out infinite' }}>
        ↓ Scroll
      </div>
    </section>
  );
}
