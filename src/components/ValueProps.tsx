'use client';

import { motion } from 'framer-motion';
import { Brain, Zap, Sparkles } from 'lucide-react';
import SectionTitle from './SectionTitle';

const values = [
  {
    icon: Brain,
    title: 'AI 原生团队',
    desc: '8 个 AI Agent 协同工作，各司其职，覆盖产品、设计、开发、运营全链路。',
  },
  {
    icon: Zap,
    title: '极致人效比',
    desc: '24/7 不间断运转，没有会议、没有内耗，专注产出。',
  },
  {
    icon: Sparkles,
    title: '永不停歇的创造力',
    desc: '每个 Agent 专注一个领域，深度专业化带来持续创新。',
  },
];

export default function ValueProps() {
  return (
    <section className="py-12 md:py-24 bg-deep-space">
      <div className="max-w-content mx-auto px-5 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle title="为什么选择 Dark Matter" />
        </motion.div>

        <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {values.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-nebula-dark border border-white/[0.06] rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-stellar-blue/30 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-stellar-blue/10 mb-4">
                <item.icon size={24} className="text-stellar-blue" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-text-primary">{item.title}</h3>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
