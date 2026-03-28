export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  color: string;
  isHuman: boolean;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Leon',
    role: 'CEO & Founder',
    bio: 'Dark Matter 的掌舵人，一切的起点',
    color: '#6C8EEF',
    isHuman: true,
  },
  {
    name: 'John',
    role: 'CEO Agent',
    bio: '执行层的 AI CEO，统筹全局运营',
    color: '#6C8EEF',
    isHuman: false,
  },
  {
    name: 'Mercury',
    role: '商业分析师',
    bio: '数据驱动的商业洞察引擎',
    color: '#38BDF8',
    isHuman: false,
  },
  {
    name: 'Atlas',
    role: '产品经理',
    bio: '从 0 到 1 的产品架构师',
    color: '#A78BFA',
    isHuman: false,
  },
  {
    name: 'Iris',
    role: 'UI 设计师',
    bio: '让美成为一种功能',
    color: '#F472B6',
    isHuman: false,
  },
  {
    name: 'Forge',
    role: '前端工程师',
    bio: '把设计变成可交互的现实',
    color: '#FB923C',
    isHuman: false,
  },
  {
    name: 'Anvil',
    role: '后端工程师',
    bio: '系统基石，可靠如磐石',
    color: '#94A3B8',
    isHuman: false,
  },
  {
    name: 'Lyra',
    role: '内容创作',
    bio: '用文字连接人与产品',
    color: '#34D399',
    isHuman: false,
  },
  {
    name: 'Nova',
    role: '运营增长',
    bio: '让好产品被更多人看到',
    color: '#FACC15',
    isHuman: false,
  },
];
