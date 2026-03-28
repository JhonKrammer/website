'use client';

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="pt-20 md:pt-24 pb-12 md:pb-16 text-center bg-deep-space">
      <h1 className="text-2xl md:text-[3rem] font-bold text-text-primary tracking-[-0.02em] leading-tight">
        {title}
      </h1>
      <div
        className="mx-auto mt-4 h-[3px] w-15 rounded-[2px]"
        style={{ background: 'linear-gradient(135deg, #6C8EEF 0%, #A78BFA 100%)' }}
      />
      <p className="mt-4 text-base md:text-[1.125rem] text-text-secondary leading-relaxed">
        {subtitle}
      </p>
    </section>
  );
}
