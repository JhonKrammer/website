# 首页设计说明 (Home — `/`)

> **设计师：** Iris
> **日期：** 2026-03-28
> **参考：** Style Guide v1.0

---

## 1. 页面目标

3 秒内让访问者理解「Dark Matter 是什么」—— 1 个人类 + 8 个 AI Agent 组成的新型公司。

---

## 2. 布局结构图 (ASCII)

### 桌面端 (≥ 1024px)

```
┌──────────────────────────────────────────────────────────────────┐
│  NAVBAR (fixed, h-16, blur bg)                                   │
│  [Logo]                    [Home] [About] [Team]                 │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│                     HERO SECTION (100vh)                         │
│                                                                  │
│            ┌─────────────────────────────┐                       │
│            │    ✦ particle dots ✦        │                       │
│            │                             │                       │
│            │   Dark Matter               │  ← H1, 48px          │
│            │   ─── gradient line ───     │  ← 40px wide, 3px    │
│            │   1 个人 + 8 个 AI Agent    │  ← Body L, 18px      │
│            │   重新定义公司形态           │                       │
│            │                             │                       │
│            │   [ 了解更多 → ]            │  ← Primary Button    │
│            │                             │                       │
│            │   ✦  scroll hint ✦         │                       │
│            └─────────────────────────────┘                       │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│              VALUE PROPS SECTION (py-24)                         │
│                                                                  │
│    Section Title: 为什么选择 Dark Matter                         │
│                   ─── gradient line ───                          │
│                                                                  │
│   ┌─────────────┐   ┌─────────────┐   ┌─────────────┐           │
│   │   [Brain]   │   │   [Zap]     │   │  [Sparkles] │           │
│   │             │   │             │   │             │           │
│   │ AI 原生团队 │   │ 极致人效比  │   │ 永不停歇的  │           │
│   │             │   │             │   │ 创造力      │           │
│   │ 8 个 AI     │   │ 24/7 不间断 │   │ 每个 Agent  │           │
│   │ Agent 协同  │   │ 运转        │   │ 专注一个    │           │
│   │             │   │             │   │ 领域        │           │
│   └─────────────┘   └─────────────┘   └─────────────┘           │
│         3 columns, gap-6                                        │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│              TEAM PREVIEW SECTION (py-24)                        │
│                                                                  │
│    Section Title: 我们的团队                                     │
│                   ─── gradient line ───                          │
│                                                                  │
│         ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐           │
│         │ Leon │ │ John │ │Merc. │ │Atlas │ │ Iris │           │
│         │  👤  │ │  🤖  │ │  🤖  │ │  🤖  │ │  🤖  │           │
│         └──────┘ └──────┘ └──────┘ └──────┘ └──────┘           │
│         ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐                    │
│         │Forge │ │Anvil │ │ Lyra │ │ Nova │                    │
│         │  🤖  │ │  🤖  │ │  🤖  │ │  🤖  │                    │
│         └──────┘ └──────┘ └──────┘ └──────┘                    │
│                                                                  │
│         9 avatars in 5+4 rows, centered                         │
│                                                                  │
│         [ 查看完整团队 → ]  ← Secondary Button                  │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  FOOTER                                                          │
│  [Logo]  © 2026 Dark Matter.    [Twitter] [GitHub]              │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

### 移动端 (< 768px)

```
┌──────────────────────────┐
│ [Logo]          [☰]      │  ← 汉堡菜单
├──────────────────────────┤
│                          │
│   HERO (min-h: 85vh)     │
│                          │
│   Dark Matter            │  ← H1, 32px
│   ── line ──             │
│   1 个人 + 8 个 AI Agent │  ← Body, 16px
│   重新定义公司形态        │
│                          │
│   [ 了解更多 → ]         │
│                          │
├──────────────────────────┤
│                          │
│   为什么选择 Dark Matter  │
│   ── line ──             │
│                          │
│   ┌──────────────────┐   │
│   │ [Brain] AI 原生  │   │
│   │ 8 个 Agent 协同  │   │
│   └──────────────────┘   │
│   ┌──────────────────┐   │
│   │ [Zap] 极致人效比 │   │
│   │ 24/7 运转        │   │
│   └──────────────────┘   │
│   ┌──────────────────┐   │
│   │ [Sparkles] 创造力│   │
│   │ 每人专注一个领域  │   │
│   └──────────────────┘   │
│     1 column, gap-4      │
│                          │
├──────────────────────────┤
│                          │
│   我们的团队              │
│   ── line ──             │
│                          │
│   ┌────┐ ┌────┐ ┌────┐  │
│   │Leon│ │John│ │Mer.│  │
│   └────┘ └────┘ └────┘  │
│   ┌────┐ ┌────┐ ┌────┐  │
│   │Atl.│ │Iris│ │For.│  │
│   └────┘ └────┘ └────┘  │
│   ┌────┐ ┌────┐ ┌────┐  │
│   │Anv.│ │Lyra│ │Nova│  │
│   └────┘ └────┘ └────┘  │
│     3 columns, gap-3     │
│                          │
│   [ 查看完整团队 → ]     │
│                          │
├──────────────────────────┤
│  [Logo]                   │
│  © 2026 Dark Matter       │
│  [Twitter] [GitHub]       │
└──────────────────────────┘
```

---

## 3. 组件清单

| 组件 | 文件 | 说明 |
|------|------|------|
| `Navbar` | `src/components/Navbar.tsx` | 固定顶部导航，blur 背景 |
| `Hero` | `src/components/Hero.tsx` | 全屏首屏，粒子背景 + 标题 + CTA |
| `ValueProps` | `src/components/ValueProps.tsx` | 3 列价值主张卡片 |
| `TeamPreview` | `src/components/TeamPreview.tsx` | 首页团队头像预览网格 |
| `SectionTitle` | `src/components/SectionTitle.tsx` | 通用区块标题（标题 + 渐变线 + 副标题） |
| `Footer` | `src/components/Footer.tsx` | 页脚 |

---

## 4. 各区块详细规格

### 4.1 Hero 区块

- **全屏高度：** `min-height: 100vh` (桌面), `min-height: 85vh` (移动)
- **背景：** `#0A0B10` + CSS 粒子效果（绝对定位圆点）
- **内容居中：** `flex` 水平垂直居中
- **标题 "Dark Matter"：**
  - Desktop: `font-size: 64px`, `font-weight: 700`, `color: #F0F0F5`, `letter-spacing: -0.03em`
  - Mobile: `font-size: 40px`
- **渐变装饰线：**
  - 宽度 `60px`, 高度 `3px`, `border-radius: 2px`
  - `background: linear-gradient(135deg, #6C8EEF, #A78BFA)`
  - 标题下方 `16px`, 居中
- **副标题：**
  - Desktop: `font-size: 20px`, `color: #9CA3B0`, `font-weight: 400`
  - Mobile: `font-size: 16px`
  - 装饰线下方 `20px`
- **CTA 按钮：** Primary Button 样式，副标题下方 `32px`
- **滚动提示：** 页面底部，`font-size: 12px`, `color: #636A7A`, 带上下浮动动画 (CSS `@keyframes`, `translateY(-8px)` loop 2s)

### 4.2 价值主张区块

- **上下 padding：** `96px` (桌面), `48px` (移动)
- **背景：** `#0A0B10`
- **3 列网格：** `grid-template-columns: repeat(3, 1fr)`, `gap: 24px`
- **每张卡片：**
  - 背景: `#12141D`
  - 圆角: `16px`
  - 内边距: `32px` (桌面), `24px` (移动)
  - 图标容器: `48px × 48px` 圆角 `12px`, 背景 `rgba(108,142,239,0.1)`, 内含 Lucide 图标 `24px`
  - 图标下方 `16px`: 标题 `H3, 20px, #F0F0F5`
  - 标题下方 `8px`: 描述 `Body S, 14px, #9CA3B0, line-height: 1.5`
  - hover: `border-color rgba(108,142,239,0.3)`, `translateY(-4px)`, `transition: 0.3s`

### 4.3 团队预览区块

- **上下 padding：** `96px` (桌面), `48px` (移动)
- **背景：** `#12141D` (与 Hero 区形成明暗交替)
- **头像网格：**
  - 桌面: 容器内居中，5 + 4 排列 (首排 5 个含 Leon)
  - 移动: 3 列等分，3×3 排列
  - 间距: `24px` (桌面), `16px` (移动)
- **头像规格：**
  - Leon: `80px × 80px` (桌面), `56px × 56px` (移动), 带 `2px` 蓝色渐变边框
  - Agent: `64px × 64px` (桌面), `48px × 48px` (移动), 带 `2px solid rgba(255,255,255,0.1)` 边框
- **头像下方名字：** `12px`, `color: #9CA3B0`, `margin-top: 8px`
- **底部 CTA：** Secondary Button, 头像区域下方 `40px`

### 4.4 Footer

- **上 padding:** `48px`, **下 padding:** `32px`
- **背景：** `#0A0B10`
- **顶部边框：** `1px solid rgba(255,255,255,0.06)`
- **布局：** `flex justify-between items-center`
- **左侧：** Logo (24px 高) + `© 2026 Dark Matter` (14px, #636A7A)
- **右侧：** 社交链接占位图标 × 2 (Twitter, GitHub), `20px`, `color: #636A7A`, hover `#9CA3B0`

---

## 5. 交互说明

| 交互 | 触发 | 效果 |
|------|------|------|
| 页面加载 | DOM ready | Hero 内容 fadeInUp, stagger 100ms |
| 滚动到价值主张 | 进入视口 | 3 张卡片依次 fadeInUp, stagger 100ms |
| 滚动到团队预览 | 进入视口 | 头像依次 fadeIn, stagger 50ms |
| 价值主张卡片 hover | 鼠标悬停 | `translateY(-4px)`, 边框发光 |
| 团队头像 hover | 鼠标悬停 | `scale(1.1)`, `transition: 0.2s` |
| 「了解更多」按钮 | 点击 | 跳转 `/about` (Next.js Link) |
| 「查看完整团队」按钮 | 点击 | 跳转 `/team` |
| 导航链接 | 点击 | Next.js 客户端路由, 无刷新 |
| 汉堡菜单 | 点击 | 左侧滑入面板 (`translateX(-100% → 0)`), overlay 背景 |

---

## 6. 响应式方案

| 断点 | 变化 |
|------|------|
| `< 768px` (Mobile) | 导航变汉堡; Hero 标题 40px; 价值主张单列; 团队头像 3列; padding 缩减 |
| `768-1023px` (Tablet) | 导航保持汉堡; 价值主张 2 列; 团队头像 4 列; padding 中等 |
| `≥ 1024px` (Desktop) | 完整导航; 价值主张 3 列; 团队头像 5+4 排列; 最大宽度 1200px |

---

## 7. SEO / Meta

```html
<title>Dark Matter — 1 个人 + 8 个 AI Agent，重新定义公司形态</title>
<meta name="description" content="Dark Matter 是一家由人类 CEO 和 AI Agent 团队组成的新型公司，探索人机协作的未来。" />
```

---

> Iris · Dark Matter Design
