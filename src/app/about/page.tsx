'use client';

import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import SectionTitle from '@/components/SectionTitle';

const beliefs = [
  { num: '01', title: '人机协作 > 纯人工', desc: 'AI 不是替代，而是放大人类的创造力。' },
  { num: '02', title: '质量 > 速度', desc: '宁可慢一步，也要做到极致。' },
  { num: '03', title: '透明 > 黑箱', desc: '每个 Agent 的工作过程都可追溯、可审计。' },
  { num: '04', title: '迭代 > 完美', desc: '快速发布，持续改进，拥抱反馈。' },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <PageHeader
        title="About Dark Matter"
        subtitle="探索 AI 与人类协作的新范式"
      />

      {/* Our Story */}
      <section className="py-12 md:py-24 bg-deep-space">
        <div className="max-w-[720px] mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle title="我们的故事" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 md:mt-12 space-y-6"
          >
            <p className="text-base text-text-primary leading-[1.8]">
              Leon 是一位连续创业者，在传统创业模式中见过太多团队的低效运转——无休止的会议、沟通的损耗、人才的流失。他一直在思考：如果能用 AI 技术重新定义公司的运作方式，会是什么样子？
            </p>
            <p className="text-base text-text-primary leading-[1.8]">
              2026 年，随着大语言模型能力的飞速进化，Leon 决定付诸行动。他创立了 Dark Matter——一家由 1 位人类 CEO 和 8 位 AI Agent 组成的新型公司。每位 Agent 专注于一个专业领域，像精密齿轮一样协同运转，24/7 不间断地产出。
            </p>
            <p className="text-base text-text-primary leading-[1.8]">
              这不是一个噱头，而是一次严肃的实验：探索人类与 AI 协作的最优解，构建下一代高效组织。Dark Matter 正在证明，一个人加上 AI Agent 团队，可以完成过去需要数十人才能做到的事。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dark Matter Meaning */}
      <section className="py-12 md:py-24 bg-nebula-dark">
        <div className="max-w-[640px] mx-auto px-5">
          <motion.blockquote
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="border-l-[3px] border-stellar-blue pl-8 italic"
          >
            <p className="text-xl md:text-2xl font-medium text-text-primary leading-relaxed">
              &ldquo;宇宙中 27% 是暗物质——<br />
              看不见，却维系着星系的运转。<br />
              我们的 AI Agent 亦是如此。&rdquo;
            </p>
            <footer className="mt-4 text-sm text-text-secondary not-italic">
              — Leon, Founder
            </footer>
          </motion.blockquote>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-10 text-base text-text-primary leading-[1.8]"
          >
            Dark Matter（暗物质）是宇宙中最神秘的存在——它不发光、不可见，却占据了宇宙总质量的 27%，是星系运转的隐形骨架。我们的 AI Agent 正是如此：它们在幕后默默工作，支撑着公司的每一次决策、每一个产品、每一篇内容。你看不见它们，但它们无处不在。
          </motion.p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-12 md:py-24 bg-deep-space">
        <div className="max-w-content mx-auto px-5 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {[
              {
                title: '愿景',
                core: '探索 AI 与人类协作的新范式',
                desc: '我们相信，未来的最佳组织形态不是纯人类团队，也不是纯 AI，而是人类智慧与 AI 能力的深度融合。Dark Matter 正在验证这条路径。',
              },
              {
                title: '使命',
                core: '用 AI Agent 构建下一代高效组织',
                desc: '通过实践证明：一个人 + 8 个 AI Agent 的模式，可以创造出超越传统团队的产出效率和创意质量。',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-nebula-dark border border-white/[0.06] rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-stellar-blue/30 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
              >
                <h3 className="text-xl md:text-2xl font-semibold text-text-primary">{item.title}</h3>
                <div
                  className="mt-3 h-[3px] w-10 rounded-[2px]"
                  style={{ background: 'linear-gradient(135deg, #6C8EEF 0%, #A78BFA 100%)' }}
                />
                <p className="mt-4 text-lg font-medium text-text-primary">{item.core}</p>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Beliefs */}
      <section className="py-12 md:py-24 bg-nebula-dark">
        <div className="max-w-[720px] mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle title="我们的信念" />
          </motion.div>

          <div className="mt-8 md:mt-12">
            {beliefs.map((belief, index) => (
              <motion.div
                key={belief.num}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`flex gap-6 py-6 border-b border-white/[0.06] transition-colors duration-200 hover:bg-stellar-blue/[0.03] ${
                  index === beliefs.length - 1 ? 'border-b-0' : ''
                }`}
              >
                <span className="w-8 md:w-12 flex-shrink-0 text-sm font-semibold text-cosmic-purple">
                  {belief.num}
                </span>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-text-primary">{belief.title}</h3>
                  <p className="mt-1 text-sm text-text-secondary leading-relaxed">{belief.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
