# Dark Matter 官网 — 页面结构与内容大纲

> **版本：** v1.0
> **负责人：** Atlas
> **日期：** 2026-03-28

---

## 站点结构

```
/                  → 首页（Home）
/about             → 关于我们（About）
/team              → 团队介绍（Team）
```

共 3 个页面，单层路由，简洁直接。

---

## 页面 1：首页（`/`）

**目标：** 3 秒内让访问者理解「Dark Matter 是什么」并产生兴趣。

### 区块结构

| 区块 | 内容 |
|------|------|
| **Hero** | 大标题：公司名 + 一句话定位（如「1 个人 + 8 个 AI Agent，重新定义公司形态」）。背景：深空动画/粒子效果。CTA 按钮：「了解更多」→ 跳转 About |
| **价值主张** | 2-3 个核心卖点，图标 + 短文案。例如：「AI 原生团队」「极致人效比」「永不停歇的创造力」 |
| **团队预览** | 9 张圆形头像/角色图标，横排或 3×3 网格。点击跳转 `/team` |
| **页脚（Footer）** | Logo、版权信息、社交链接（占位） |

### 设计要点
- 首屏即 Hero，不用滚屏就能看到核心信息
- 深色背景 + 微光粒子/星云效果
- 滚动时区块有淡入动画

---

## 页面 2：关于我们（`/about`）

**目标：** 讲好 Dark Matter 的故事，传递品牌价值观。

### 区块结构

| 区块 | 内容 |
|------|------|
| **页面标题** | 「About Dark Matter」+ 副标题 |
| **公司故事** | Leon 创立 Dark Matter 的故事。为什么选择「一人公司 + AI Agent」模式？背景、动机、思考过程 |
| **Dark Matter 的含义** | 为什么叫这个名字？（宇宙中的暗物质占比 27%，看不见但无处不在 → AI Agent 像暗物质一样支撑公司运转） |
| **愿景与使命** | 愿景：探索 AI 与人类协作的新范式。使命：用 AI Agent 构建下一代高效组织 |
| **我们的信念** | 3-5 条核心价值观，如「人机协作 > 纯人工」「质量 > 速度」「透明 > 黑箱」 |
| **Footer** | 同首页 |

### 设计要点
- 文字为主，适当配图/插画
- 时间线形式讲述公司故事（可选）
- 信念部分可用大号引言样式

---

## 页面 3：团队介绍（`/team`）

**目标：** 让访问者了解每个团队成员的角色和个性。

### 区块结构

| 区块 | 内容 |
|------|------|
| **页面标题** | 「Our Team」+ 副标题（如「1 Human · 8 Agents · Infinite Possibilities」） |
| **人类成员** | Leon — CEO & Founder。单独一个大卡片，突出人类领导者角色 |
| **AI Agent 团队** | 8 张卡片，3×3 或 2×4 网格布局。每张卡片包含：名字 + 角色头衔 + 一句话介绍 + 个性化 icon/头像 |

### 团队成员清单

| 名字 | 角色 | 一句话 |
|------|------|--------|
| **Leon** | CEO & Founder | Dark Matter 的掌舵人，一切的起点 |
| **John** | CEO Agent | 执行层的 AI CEO，统筹全局运营 |
| **Mercury** | 商业分析师 | 数据驱动的商业洞察引擎 |
| **Atlas** | 产品经理 | 从 0 到 1 的产品架构师 |
| **Iris** | UI 设计师 | 让美成为一种功能 |
| **Forge** | 前端工程师 | 把设计变成可交互的现实 |
| **Anvil** | 后端工程师 | 系统基石，可靠如磐石 |
| **Lyra** | 内容创作 | 用文字连接人与产品 |
| **Nova** | 运营增长 | 让好产品被更多人看到 |

### 设计要点
- Leon 的卡片视觉上与 AI Agent 区分（更大、独特样式）
- AI Agent 卡片 hover 效果：轻微上浮 + 微光
- 每张卡片有独特配色或 icon，体现角色个性
- 点击卡片可展开更多介绍（可选，v1.0 可先不做）

---

## 文件目录结构（Next.js）

```
products/website/
├── prd.md                      # 产品需求文档
├── pages.md                    # 页面结构与内容大纲（本文件）
├── package.json
├── next.config.js
├── tailwind.config.js
├── public/
│   ├── images/
│   │   ├── logo.svg            # Dark Matter logo
│   │   ├── hero-bg.png         # Hero 背景图
│   │   └── team/               # 团队成员头像
│   │       ├── leon.png
│   │       ├── john.png
│   │       ├── mercury.png
│   │       ├── atlas.png
│   │       ├── iris.png
│   │       ├── forge.png
│   │       ├── anvil.png
│   │       ├── lyra.png
│   │       └── nova.png
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx          # 全局布局（导航 + Footer）
│   │   ├── page.tsx            # 首页
│   │   ├── globals.css         # 全局样式
│   │   ├── about/
│   │   │   └── page.tsx        # 关于我们
│   │   └── team/
│   │       └── page.tsx        # 团队介绍
│   ├── components/
│   │   ├── Navbar.tsx          # 顶部导航
│   │   ├── Footer.tsx          # 页脚
│   │   ├── Hero.tsx            # 首页 Hero 区块
│   │   ├── ValueProps.tsx      # 价值主张区块
│   │   ├── TeamPreview.tsx     # 首页团队预览
│   │   ├── TeamCard.tsx        # 团队成员卡片
│   │   └── SectionTitle.tsx    # 通用区块标题
│   ├── data/
│   │   └── team.ts             # 团队成员数据（名字、角色、简介）
│   └── lib/
│       └── constants.ts        # 站点常量（标题、描述等）
└── README.md
```

### 关键设计决策

1. **团队数据集中管理**（`src/data/team.ts`）— 改文案不用动组件
2. **组件粒度适中** — 每个区块一个组件，便于 Iris 设计和 Forge 开发
3. **图片放 public/ — 静态资源直接引用
4. **App Router** — Next.js 最新范式，布局嵌套天然支持导航和 Footer

---

> Atlas · Dark Matter 产品团队
