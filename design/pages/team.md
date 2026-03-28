# 团队介绍页面设计说明 (Team — `/team`)

> **设计师：** Iris
> **日期：** 2026-03-28
> **参考：** Style Guide v1.0

---

## 1. 页面目标

展示 9 位团队成员的角色与个性。Leon 作为人类 CEO 在视觉上突出，8 位 AI Agent 形成统一但各有特色的卡片网格。

---

## 2. 布局结构图 (ASCII)

### 桌面端 (≥ 1024px)

```
┌──────────────────────────────────────────────────────────────────┐
│  NAVBAR (fixed, h-16, blur bg)                                   │
│  [Logo]                    [Home] [About] [Team]                 │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│              PAGE HEADER (py-20)                                 │
│                                                                  │
│              Our Team                            ← H1, 48px     │
│              ──── gradient line ────                            │
│              1 Human · 8 Agents · Infinite        ← Body L      │
│              Possibilities                                      │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│              LEON SECTION (py-16)                                │
│              背景: #0A0B10                                       │
│                                                                  │
│   ┌────────────────────────────────────────────────────┐         │
│   │  LEON CARD (居中, max-width: 560px)                │         │
│   │  ┌──────────────────────────────────────────────┐  │         │
│   │  │                                              │  │         │
│   │  │   ┌──────────┐                               │  │         │
│   │  │   │          │   Leon                        │  │         │
│   │  │   │  120×120 │   CEO & Founder               │  │         │
│   │  │   │  avatar  │   ── purple line ──           │  │         │
│   │  │   │          │   Dark Matter 的掌舵人，      │  │         │
│   │  │   └──────────┘   一切的起点。               │  │         │
│   │  │                                              │  │         │
│   │  │   bg: gradient subtle                       │  │         │
│   │  │   border: rgba(108,142,239,0.2)              │  │         │
│   │  │   glow: 0 0 60px rgba(108,142,239,0.1)      │  │         │
│   │  │                                              │  │         │
│   │  └──────────────────────────────────────────────┘  │         │
│   └────────────────────────────────────────────────────┘         │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│              AGENTS SECTION (py-24)                              │
│              背景: #12141D                                       │
│                                                                  │
│              AI Agent 团队                                       │
│              ──── gradient ────                                  │
│                                                                  │
│   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐             │
│   │  ┌──────┐   │  │  ┌──────┐   │  │  ┌──────┐   │             │
│   │  │ 80px │   │  │  │ 80px │   │  │  │ 80px │   │             │
│   │  │avatar│   │  │  │avatar│   │  │  │avatar│   │             │
│   │  └──────┘   │  │  └──────┘   │  │  └──────┘   │             │
│   │             │  │             │  │             │             │
│   │  John       │  │  Mercury    │  │  Atlas      │             │
│   │  CEO Agent  │  │  商业分析师 │  │  产品经理   │             │
│   │  ── line ── │  │  ── line ── │  │  ── line ── │             │
│   │  执行层的   │  │  数据驱动的 │  │  从 0 到 1  │             │
│   │  AI CEO...  │  │  商业洞察.. │  │  的产品...  │             │
│   └─────────────┘  └─────────────┘  └─────────────┘             │
│   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐             │
│   │  Iris       │  │  Forge      │  │  Anvil      │             │
│   │  UI 设计师  │  │  前端工程师 │  │  后端工程师 │             │
│   │  ...        │  │  ...        │  │  ...        │             │
│   └─────────────┘  └─────────────┘  └─────────────┘             │
│   ┌─────────────┐  ┌─────────────┐                              │
│   │  Lyra       │  │  Nova       │                              │
│   │  内容创作   │  │  运营增长   │                              │
│   │  ...        │  │  ...        │                              │
│   └─────────────┘  └─────────────┘                              │
│                                                                  │
│     3 columns, gap-6, 居中容器 max-width: 960px                 │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
│  FOOTER                                                          │
│  [Logo]  © 2026 Dark Matter.    [Twitter] [GitHub]              │
└──────────────────────────────────────────────────────────────────┘
```

### 移动端 (< 768px)

```
┌──────────────────────────┐
│ [Logo]          [☰]      │
├──────────────────────────┤
│                          │
│   Our Team               │  ← H1, 32px
│   ── line ──             │
│   1 Human · 8 Agents     │
│                          │
├──────────────────────────┤
│                          │
│   ┌──────────────────┐   │
│   │                  │   │
│   │  ┌────┐          │   │
│   │  │80px│  Leon    │   │  ← Leon 卡片全宽
│   │  └────┘  CEO &   │   │
│   │          Founder │   │
│   │  ── line ──      │   │
│   │  掌舵人...       │   │
│   │                  │   │
│   └──────────────────┘   │
│                          │
├──────────────────────────┤
│                          │
│   AI Agent 团队          │
│   ── line ──             │
│                          │
│   ┌──────────────────┐   │
│   │ ┌────┐ John      │   │  ← 每行 1 列
│   │ │56px│ CEO Agent │   │
│   │ └────┘ ──        │   │
│   │  执行层的 AI...  │   │
│   └──────────────────┘   │
│   ┌──────────────────┐   │
│   │ ┌────┐ Mercury   │   │
│   │ │56px│ 商业分析..│   │
│   │ └────┘           │   │
│   └──────────────────┘   │
│   ... (8 张卡片垂直排列) │
│                          │
└──────────────────────────┘
```

---

## 3. 组件清单

| 组件 | 文件 | 说明 |
|------|------|------|
| `Navbar` | `src/components/Navbar.tsx` | 同首页，复用 |
| `PageHeader` | `src/components/PageHeader.tsx` | 通用页面标题区块 |
| `LeaderCard` | 团队页面内联 | Leon 专属大卡片 |
| `AgentCard` | `src/components/TeamCard.tsx` | AI Agent 标准卡片 |
| `Footer` | `src/components/Footer.tsx` | 同首页，复用 |

---

## 4. 各区块详细规格

### 4.1 Page Header

与 About 页面相同规格：
- **上下 padding：** `80px` (桌面), `48px` (移动)
- **H1 "Our Team"：** `48px (桌面) / 32px (移动)`
- **渐变线：** `60px × 3px`, 居中
- **副标题 "1 Human · 8 Agents · Infinite Possibilities"：** `Body L, 18px / 16px`, `#9CA3B0`

### 4.2 Leon 领导者卡片

- **容器：** `max-width: 560px`, `margin: 0 auto`
- **上下 padding：** `64px` (桌面), `40px` (移动)
- **卡片背景：** `linear-gradient(135deg, rgba(108,142,239,0.06), rgba(167,139,250,0.06))`
- **卡片边框：** `1px solid rgba(108,142,239,0.2)`
- **卡片圆角：** `20px`
- **卡片内边距：** `40px` (桌面), `24px` (移动)
- **卡片阴影：** `0 0 80px rgba(108,142,239,0.08)` (subtle glow)
- **内部布局：** `flex` 水平排列 (桌面), 垂直排列 (移动, 居中)
- **头像：** `120px × 120px` (桌面), `80px × 80px` (移动)
  - 圆形 `border-radius: 50%`
  - 边框 `3px solid rgba(108,142,239,0.3)`
  - Placeholder: 背景 `#1A1D2E`, 内显 `L` 字母, `36px`, `#6C8EEF`
- **头像右侧/下方文字：**
  - 名字: `H2, 32px (桌面) / 24px (移动), #F0F0F5, font-weight 700`
  - 角色: `Body, 16px, #A78BFA, font-weight 500`, 名字下方 `4px`
  - 渐变装饰线: `40px × 2px`, Primary Gradient, 角色下方 `12px`
  - 简介: `Body, 16px, #9CA3B0, line-height 1.6`, 线下方 `12px`
  - 头像与文字间距: `24px` (桌面), `16px` (移动)

### 4.3 AI Agent 卡片网格

- **上下 padding：** `96px` (桌面), `48px` (移动)
- **背景：** `#12141D` (交替区块)
- **Section Title "AI Agent 团队"：** 居中, 标题下方 `48px` 开始卡片
- **网格：**
  - 桌面: `grid-template-columns: repeat(3, 1fr)`, `gap: 24px`
  - 平板: `repeat(2, 1fr)`, `gap: 20px`
  - 移动: `1fr`, `gap: 16px`
  - 容器最大宽度: `960px` (桌面), `100%` (移动)
- **最后一行不满时：** 居中处理 (用 `justify-content: center` 的 flex 或 grid `justify-items: center`)

### 4.4 单张 Agent 卡片详细规格

```
┌─────────────────────────────────────────┐
│  背景: #12141D                           │
│  边框: 1px solid rgba(255,255,255,0.06) │
│  圆角: 16px                              │
│  内边距: 24px                            │
│                                         │
│        ┌──────────┐                     │
│        │          │                     │
│        │  80×80   │  ← 圆形头像         │
│        │  avatar  │    border: 2px      │
│        │          │    solid            │
│        └──────────┘    rgba(255,255,    │
│                        255,0.1)         │
│                                         │
│        John              ← H3, 20px     │
│        CEO Agent         ← Caption,     │
│        ── gradient ──      12px,        │
│                           #A78BFA       │
│                           letter-space  │
│                           0.05em        │
│                           font-weight   │
│                           500           │
│                                         │
│        执行层的 AI CEO，  ← Body S,     │
│        统筹全局运营         14px,       │
│                           #9CA3B0       │
│                           line-height   │
│                           1.5           │
│                                         │
│  hover:                                  │
│    border: rgba(167,139,250,0.3)        │
│    translateY(-4px)                      │
│    box-shadow: 0 8px 32px               │
│      rgba(0,0,0,0.3)                    │
│    transition: 0.3s ease                │
└─────────────────────────────────────────┘
```

**头像 Placeholder 方案（无图片时）：**
- 背景色: `#1A1D2E`
- 首字母: 角色名首字母大写, `32px`, `font-weight 700`
- 首字母颜色: 每个 Agent 独立配色（见下表）

**Agent 个性配色（用于头像 placeholder 首字母 / 可选小标签底色）：**

| Agent | 配色 Hex | 对应含义 |
|-------|----------|----------|
| John | `#6C8EEF` (Stellar Blue) | 执行、统筹 |
| Mercury | `#38BDF8` (Aurora Cyan) | 数据、分析 |
| Atlas | `#A78BFA` (Cosmic Purple) | 架构、规划 |
| Iris | `#F472B6` (Pink) | 设计、美学 |
| Forge | `#FB923C` (Orange) | 构建、创造 |
| Anvil | `#94A3B8` (Slate) | 稳固、基石 |
| Lyra | `#34D399` (Emerald) | 文字、韵律 |
| Nova | `#FACC15` (Yellow) | 增长、爆发 |

---

## 5. 交互说明

| 交互 | 触发 | 效果 |
|------|------|------|
| 页面加载 | DOM ready | Page Header fadeInUp; Leon 卡片 fadeInUp (delay 100ms) |
| 滚动到 Agent 区块 | 进入视口 | Section Title fadeIn; 8 张卡片依次 fadeInUp, stagger 80ms |
| Agent 卡片 hover | 鼠标悬停 | `translateY(-4px)`, 边框变 Cosmic Purple, 阴影增强, `0.3s ease` |
| Leon 卡片 hover | 鼠标悬停 | glow 增强 `box-shadow: 0 0 100px rgba(108,142,239,0.15)`, `0.3s ease` |
| Agent 头像 hover | 鼠标悬停 | `scale(1.08)`, `transition: 0.2s` |
| 卡片点击 | 点击 | v1.0 不展开详情, 无动作 (预留 cursor: default) |

---

## 6. 响应式方案

| 断点 | Leon 卡片 | Agent 网格 | 头像尺寸 | 间距 |
|------|-----------|-----------|---------|------|
| `< 768px` | 全宽, 头像在上文字在下, 居中 | 1 列 | Leon 80px, Agent 56px | gap-4, px-5 |
| `768-1023px` | max-width 480px, 水平排列 | 2 列 | Leon 100px, Agent 64px | gap-5, px-8 |
| `≥ 1024px` | max-width 560px, 水平排列 | 3 列 | Leon 120px, Agent 80px | gap-6, px-20 |

---

## 7. 特殊处理：最后一行卡片居中

当 8 张卡片用 3 列网格时，最后一行只有 2 张。处理方案：

```css
/* 方案: flex + wrap + 居中 */
.agent-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
}
.agent-grid > * {
  flex: 0 0 calc(33.333% - 16px); /* 3列 */
  max-width: calc(33.333% - 16px);
}

/* 或 Tailwind 方案: grid + justify-items-center + 最后一行 span */
```

> **推荐方案：** 使用 CSS Grid + 手动将最后 2 张卡片设为 `justify-self: center` 或用空 placeholder 卡片填充第 3 位（不可见但占位）。

---

## 8. SEO / Meta

```html
<title>团队 — Dark Matter</title>
<meta name="description" content="认识 Dark Matter 的 9 位团队成员：1 位人类 CEO + 8 位 AI Agent，各司其职，协同创造。" />
```

---

> Iris · Dark Matter Design
