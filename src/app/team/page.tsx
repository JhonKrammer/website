'use client';

import { motion } from 'framer-motion';
import { teamMembers } from '@/data/team';
import PageHeader from '@/components/PageHeader';
import SectionTitle from '@/components/SectionTitle';

export default function TeamPage() {
  const leon = teamMembers.find((m) => m.isHuman)!;
  const agents = teamMembers.filter((m) => !m.isHuman);

  return (
    <>
      {/* Page Header */}
      <PageHeader
        title="Our Team"
        subtitle="1 Human · 8 Agents · Infinite Possibilities"
      />

      {/* Leon Section */}
      <section className="py-10 md:py-16 bg-deep-space">
        <div className="max-w-[560px] mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="rounded-[20px] p-6 md:p-10 transition-shadow duration-300 hover:shadow-[0_0_100px_rgba(108,142,239,0.15)]"
            style={{
              background: 'linear-gradient(135deg, rgba(108,142,239,0.06), rgba(167,139,250,0.06))',
              border: '1px solid rgba(108,142,239,0.2)',
              boxShadow: '0 0 60px rgba(108,142,239,0.08)',
            }}
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
              {/* Avatar */}
              <div
                className="w-20 h-20 md:w-[120px] md:h-[120px] rounded-full flex items-center justify-center flex-shrink-0 border-[3px] border-stellar-blue/30"
                style={{ backgroundColor: '#1A1D2E' }}
              >
                <span className="text-2xl md:text-[36px] font-bold" style={{ color: leon.color }}>
                  L
                </span>
              </div>

              {/* Info */}
              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-[32px] font-bold text-text-primary tracking-[-0.01em]">
                  {leon.name}
                </h2>
                <p className="text-base text-cosmic-purple font-medium mt-1">{leon.role}</p>
                <div
                  className="mx-auto md:mx-0 mt-3 h-[2px] w-10 rounded-[2px]"
                  style={{ background: 'linear-gradient(135deg, #6C8EEF 0%, #A78BFA 100%)' }}
                />
                <p className="mt-3 text-base text-text-secondary leading-relaxed">{leon.bio}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section className="py-12 md:py-24 bg-nebula-dark">
        <div className="max-w-[960px] mx-auto px-5 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle title="AI Agent 团队" />
          </motion.div>

          {/* Agent Grid */}
          <div className="mt-10 md:mt-16 flex flex-wrap justify-center gap-4 md:gap-6">
            {agents.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group bg-nebula-dark border border-white/[0.06] rounded-2xl p-6 w-full md:w-[calc(33.333%-16px)] max-w-[320px] transition-all duration-300 hover:border-cosmic-purple/30 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
              >
                {/* Avatar */}
                <div className="flex justify-center">
                  <div
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center border-2 border-white/[0.1] transition-transform duration-200 group-hover:scale-105"
                    style={{ backgroundColor: '#1A1D2E' }}
                  >
                    <span className="text-xl md:text-[32px] font-bold" style={{ color: member.color }}>
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="text-center mt-4">
                  <h3 className="text-lg md:text-xl font-semibold text-text-primary">{member.name}</h3>
                  <p
                    className="mt-1 text-xs font-medium text-cosmic-purple tracking-wide"
                    style={{ letterSpacing: '0.05em' }}
                  >
                    {member.role}
                  </p>
                  <div
                    className="mx-auto mt-3 h-[2px] w-10 rounded-[2px]"
                    style={{ background: 'linear-gradient(135deg, #6C8EEF 0%, #A78BFA 100%)' }}
                  />
                  <p className="mt-3 text-sm text-text-secondary leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
