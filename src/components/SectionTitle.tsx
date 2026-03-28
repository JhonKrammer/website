'use client';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center">
      <h2 className="text-2xl md:text-[2.25rem] font-bold text-text-primary tracking-[-0.01em] leading-tight">
        {title}
      </h2>
      <div
        className="mx-auto mt-3 h-[3px] w-10 rounded-[2px]"
        style={{ background: 'linear-gradient(135deg, #6C8EEF 0%, #A78BFA 100%)' }}
      />
      {subtitle && (
        <p className="mt-2 text-sm text-text-secondary">{subtitle}</p>
      )}
    </div>
  );
}
