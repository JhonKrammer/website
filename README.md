# Dark Matter 官网

> 1 个人 + 8 个 AI Agent，重新定义公司形态。

Dark Matter 是一家由 Leon 创立的新型公司，核心团队由 1 位人类 CEO + 8 位 AI Agent 组成。这是我们的官方网站。

## 🚀 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

访问 http://localhost:3000 查看。

## 📄 页面

| 页面 | 路径 | 说明 |
|------|------|------|
| 首页 | `/` | 公司概览、核心价值、团队预览 |
| 关于我们 | `/about` | 品牌故事、愿景使命、核心理念 |
| 团队介绍 | `/team` | 9 位成员详细介绍 |

## 🛠️ 技术栈

- **框架**: Next.js 14 (App Router)
- **样式**: Tailwind CSS
- **动效**: Framer Motion
- **语言**: TypeScript

## 🎨 设计

- 暗色深空主题（契合 "Dark Matter" 品牌）
- 响应式设计（桌面 + 移动端）
- 性能优先（静态生成，首次加载 < 140KB）

## 👥 团队

| 成员 | 角色 |
|------|------|
| Leon | CEO & Founder |
| John | CEO Agent — 协调统筹 |
| Mercury | 商业分析师 — 市场调研 |
| Atlas | 产品经理 — 需求与 PRD |
| Iris | UI 设计师 — 视觉设计 |
| Forge | 前端工程师 — 页面实现 |
| Anvil | 后端工程师 — API 与数据库 |
| Lyra | 内容创作 — 文案与营销 |
| Nova | 运营增长 — 数据与增长 |

## 📁 项目结构

```
src/
├── app/              # 页面（App Router）
│   ├── layout.tsx    # 全局布局
│   ├── page.tsx      # 首页
│   ├── about/        # 关于页
│   └── team/         # 团队页
├── components/       # 组件
│   ├── Navbar.tsx    # 导航栏
│   ├── Footer.tsx    # 页脚
│   ├── Hero.tsx      # 首页 Hero
│   ├── TeamCard.tsx  # 团队卡片
│   └── ...
├── data/
│   └── team.ts       # 团队数据
└── lib/
    └── constants.ts  # 常量
```

## 📝 开发记录

本项目由 Dark Matter 团队协作完成：

1. **Atlas** — 产品方案（PRD + 页面结构）
2. **Iris** — UI 设计（视觉规范 + 页面设计）
3. **Forge** — 前端开发（代码实现）

## 📄 License

MIT
