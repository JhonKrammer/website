'use client';

import { teamMembers, TeamMember } from '@/data/team';

interface TeamCardProps {
  member: TeamMember;
  size?: 'small' | 'large';
}

export default function TeamCard({ member, size = 'small' }: TeamCardProps) {
  const avatarSize = size === 'large' ? 'w-20 h-20 md:w-[120px] md:h-[120px]' : 'w-[80px] h-[80px]';
  const fontSize = size === 'large' ? 'text-2xl md:text-[36px]' : 'text-[32px]';
  const borderColor = member.isHuman ? 'border-stellar-blue/30' : 'border-white/[0.1]';
  const borderWidth = member.isHuman ? 'border-[3px]' : 'border-2';

  return (
    <div className={`group flex flex-col items-center text-center ${size === 'large' ? 'flex-row gap-6' : ''}`}>
      {/* Avatar */}
      <div
        className={`${avatarSize} ${borderWidth} ${borderColor} rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-105`}
        style={{ backgroundColor: '#1A1D2E' }}
      >
        <span
          className={`${fontSize} font-bold`}
          style={{ color: member.color }}
        >
          {member.name.charAt(0)}
        </span>
      </div>

      {/* Info */}
      <div className={`${size === 'large' ? 'text-left' : 'text-center mt-2'}`}>
        <p className="text-xs md:text-sm font-medium text-text-secondary mt-2 tracking-wide" style={{ letterSpacing: '0.05em' }}>
          {member.role}
        </p>
        {size === 'large' && (
          <p className="mt-1 text-sm text-text-secondary">{member.bio}</p>
        )}
        {size === 'small' && (
          <p className="text-xs text-text-tertiary mt-1">{member.name}</p>
        )}
      </div>
    </div>
  );
}
