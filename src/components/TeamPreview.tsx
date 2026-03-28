'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { teamMembers } from '@/data/team';
import SectionTitle from './SectionTitle';

export default function TeamPreview() {
  return (
    <section className="py-12 md:py-24 bg-nebula-dark">
      <div className="max-w-content mx-auto px-5 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle title="我们的团队" />
        </motion.div>

        {/* Avatar grid */}
        <div className="mt-10 md:mt-16 flex flex-wrap justify-center gap-3 md:gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex flex-col items-center gap-2 group"
            >
              {/* Avatar */}
              <div
                className={`rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110 ${
                  member.isHuman
                    ? 'w-14 h-14 md:w-20 md:h-20 border-[2px]'
                    : 'w-12 h-12 md:w-16 md:h-16 border-2'
                }`}
                style={{
                  backgroundColor: '#1A1D2E',
                  borderColor: member.isHuman ? 'rgba(108,142,239,0.4)' : 'rgba(255,255,255,0.1)',
                  ...(member.isHuman && {
                    borderImage: 'linear-gradient(135deg, #6C8EEF, #A78BFA) 1',
                    borderRadius: '50%',
                    borderStyle: 'solid',
                    borderColor: 'rgba(108,142,239,0.4)',
                  }),
                }}
              >
                <span
                  className={`font-bold ${
                    member.isHuman ? 'text-lg md:text-2xl' : 'text-base md:text-xl'
                  }`}
                  style={{ color: member.color }}
                >
                  {member.name.charAt(0)}
                </span>
              </div>

              {/* Name */}
              <span className="text-xs text-text-secondary">{member.name}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 md:mt-16 text-center"
        >
          <Link
            href="/team"
            className="inline-block py-3 px-7 text-stellar-blue text-base font-medium rounded-lg border border-stellar-blue/40 transition-all duration-200 hover:bg-stellar-blue/10 hover:border-stellar-blue"
          >
            查看完整团队 →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
