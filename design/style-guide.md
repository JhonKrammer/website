# Dark Matter 官网 — 视觉设计规范 (Style Guide)

> **设计师：** Iris
> **版本：** v1.0
> **日期：** 2026-03-28
> **适用范围：** Dark Matter 官网全部页面

---

## 1. 品牌调性

**关键词：** 深邃、专业、创新、温度

视觉感受如同凝视深空——黑暗中蕴含无限可能，有微光但不刺眼，有质感但不喧哗。

---

## 2. 色彩系统

### 2.1 主色板

| 名称 | Hex | 用途 |
|------|-----|------|
| **Deep Space** (主背景) | `#0A0B10` | 页面主背景 |
| **Nebula Dark** (次背景) | `#12141D` | 卡片/区块背景 |
| **Nebula Medium** (第三层) | `#1A1D2E` | 卡片 hover / 交替区块背景 |

### 2.2 强调色

| 名称 | Hex | 用途 |
|------|-----|------|
| **Stellar Blue** (主强调) | `#6C8EEF` | CTA 按钮、链接、关键图标 |
| **Cosmic Purple** (副强调) | `#A78BFA` | 渐变配合、hover 状态、Agent 身份标识 |
| **Aurora Cyan** (点缀) | `#38BDF8` | 微光效果、粒子、标签 |

### 2.3 渐变

| 名称 | CSS 值 | 用途 |
|------|--------|------|
| **Primary Gradient** | `linear-gradient(135deg, #6C8EEF 0%, #A78BFA 100%)` | 按钮背景、标题装饰线 |
| **Glow Gradient** | `radial-gradient(ellipse at center, rgba(108,142,239,0.15) 0%, transparent 70%)` | Hero 区域光晕 |
| **Card Border Gradient** | `linear-gradient(135deg, rgba(108,142,239,0.3) 0%, rgba(167,139,250,0.1) 100%)` | 卡片边框装饰 |

### 2.4 文字色

| 名称 | Hex | 用途 |
|------|-----|------|
| **Text Primary** | `#F0F0F5` | 标题、主要文字 |
| **Text Secondary** | `#9CA3B0` | 副标题、描述文字 |
| **Text Tertiary** | `#636A7A` | 辅助说明、时间戳 |
| **Text On Accent** | `#FFFFFF` | 按钮内文字 |

### 2.5 功能色

| 名称 | Hex | 用途 |
|------|-----|------|
| **Border Default** | `rgba(255,255,255,0.06)` | 卡片边框、分割线 |
| **Border Hover** | `rgba(108,142,239,0.4)` | 卡片 hover 边框 |
| **Overlay** | `rgba(10,11,16,0.8)` | 模态/遮罩层 |

---

## 3. 字体系统

### 3.1 字体选择

| 类型 | 字体族 | 备选 |
|------|--------|------|
| **英文标题** | `Inter` (Google Fonts) | `system-ui, -apple-system, sans-serif` |
| **英文正文** | `Inter` | 同上 |
| **中文回退** | `Noto Sans SC` | `"PingFang SC", "Microsoft YaHei", sans-serif` |

> **注：** Inter 字重丰富、中性专业、深色背景可读性极佳。通过 Google Fonts 或 next/font 加载。

### 3.2 字号层级

| 层级 | 字号 (Desktop) | 字号 (Mobile) | 字重 | 行高 | 用途 |
|------|---------------|--------------|------|------|------|
| **H1** | `48px` / `3rem` | `32px` / `2rem` | `700` | `1.15` | Hero 标题 |
| **H2** | `36px` / `2.25rem` | `28px` / `1.75rem` | `700` | `1.2` | 区块标题 |
| **H3** | `24px` / `1.5rem` | `20px` / `1.25rem` | `600` | `1.3` | 卡片标题 |
| **Body L** | `18px` / `1.125rem` | `16px` / `1rem` | `400` | `1.6` | Hero 副标题、大段描述 |
| **Body** | `16px` / `1rem` | `15px` / `0.9375rem` | `400` | `1.6` | 正文 |
| **Body S** | `14px` / `0.875rem` | `14px` / `0.875rem` | `400` | `1.5` | 辅助文字、卡片简介 |
| **Caption** | `12px` / `0.75rem` | `12px` / `0.75rem` | `500` | `1.4` | 标签、角色头衔 |

### 3.3 字间距

- H1 标题: `letter-spacing: -0.02em`
- H2/H3 标题: `letter-spacing: -0.01em`
- 正文: `letter-spacing: 0` (默认)
- Caption/标签: `letter-spacing: 0.05em` (略微宽松，增强可读性)

---

## 4. 间距系统

基于 **4px** 网格，使用 Tailwind 默认 scale：

| Token | 值 | 用途 |
|-------|----|------|
| `1` | `4px` | 图标与文字间距 |
| `2` | `8px` | 紧凑元素间距 |
| `3` | `12px` | 按钮内边距 (vertical) |
| `4` | `16px` | 常规元素间距 |
| `5` | `20px` | 卡片内边距 |
| `6` | `24px` | 区块内元素间距 |
| `8` | `32px` | 区块间距 (小) |
| `10` | `40px` | 区块间距 (中) |
| `16` | `64px` | 区块间距 (大，桌面端) |
| `20` | `80px` | 页面级区块间距 |
| `24` | `96px` | 首屏 Hero 上下间距 |

### 响应式间距调整

| 场景 | 桌面 | 移动 |
|------|------|------|
| 页面左右 padding | `80px` (`px-20`) | `20px` (`px-5`) |
| 区块上下 padding | `96px` (`py-24`) | `48px` (`py-12`) |
| 内容最大宽度 | `1200px` (`max-w-6xl`) | `100%` |
| 卡片间距 | `24px` (`gap-6`) | `16px` (`gap-4`) |

---

## 5. 组件样式

### 5.1 按钮 (Button)

#### Primary Button
```
背景: linear-gradient(135deg, #6C8EEF, #A78BFA)
文字: #FFFFFF, 16px, font-weight 600
圆角: 8px (rounded-lg)
内边距: 12px 28px (py-3 px-7)
hover: opacity 0.9, translateY(-1px), box-shadow: 0 4px 20px rgba(108,142,239,0.4)
transition: all 0.2s ease
```

#### Secondary Button (Ghost)
```
背景: transparent
边框: 1px solid rgba(108,142,239,0.4)
文字: #6C8EEF, 16px, font-weight 500
圆角: 8px
内边距: 12px 28px
hover: background rgba(108,142,239,0.1), border-color #6C8EEF
transition: all 0.2s ease
```

### 5.2 卡片 (Card)

#### 通用卡片
```
背景: #12141D (Nebula Dark)
边框: 1px solid rgba(255,255,255,0.06)
圆角: 16px (rounded-2xl)
内边距: 24px (p-6)
hover: border-color rgba(108,142,239,0.3),
       box-shadow: 0 8px 32px rgba(0,0,0,0.3),
       translateY(-4px)
transition: all 0.3s ease
```

#### 团队成员卡片 — Leon (人类)
```
背景: linear-gradient(135deg, rgba(108,142,239,0.08), rgba(167,139,250,0.08))
边框: 1px solid rgba(108,142,239,0.2)
圆角: 20px (rounded-[20px])
内边距: 32px (p-8)
尺寸: 比 Agent 卡片宽约 50%
特殊: 带 subtle glow effect (box-shadow: 0 0 60px rgba(108,142,239,0.1))
```

#### 团队成员卡片 — AI Agent
```
背景: #12141D
边框: 1px solid rgba(255,255,255,0.06)
圆角: 16px
内边距: 24px
hover: border-color rgba(167,139,250,0.3), translateY(-4px)
特殊: 角色标签用 Cosmic Purple (#A78BFA) 小字
```

### 5.3 导航栏 (Navbar)
```
背景: rgba(10,11,16,0.85) + backdrop-blur(12px)
高度: 64px (h-16)
位置: fixed top-0, z-50
边框: 底部 1px solid rgba(255,255,255,0.06)
Logo 高度: 32px
链接文字: 15px, #9CA3B0, hover #F0F0F5
链接间距: 32px (gap-8)
最大宽度: 1200px, 居中
移动端: 汉堡菜单, slide-in 面板
```

### 5.4 页脚 (Footer)
```
背景: #0A0B10 (同主背景)
边框: 顶部 1px solid rgba(255,255,255,0.06)
内边距: 上 48px 下 32px
文字: 14px, #636A7A
最大宽度: 1200px, 居中
布局: 左侧 Logo + 版权, 右侧社交链接占位
```

### 5.5 区块标题 (Section Title)
```
标题: H2 样式 (#F0F0F5)
装饰线: 标题下方 40px 宽, 3px 高, Primary Gradient
装饰线圆角: 2px
标题与装饰线间距: 12px
副标题: Body S, #9CA3B0, 标题下方 8px
整体居中
```

### 5.6 圆形头像 (Avatar)
```
Leon: 120px × 120px (桌面), 80px × 80px (移动)
Agent: 80px × 80px (桌面), 56px × 56px (移动)
边框: 2px solid rgba(255,255,255,0.1)
object-fit: cover
placeholder: 角色首字母 + 角色色背景 (#1A1D2E)
```

---

## 6. 动效规范

### 6.1 页面进入

- **方案：** Framer Motion `fadeInUp`
- **初始状态：** `opacity: 0, translateY: 20px`
- **结束状态：** `opacity: 1, translateY: 0`
- **持续时间：** `0.6s`
- **缓动函数：** `ease-out`
- **延迟策略：** 各区块 stagger 100ms（Hero 0ms → 价值主张 100ms → 团队预览 200ms）

### 6.2 滚动触发

- 使用 Framer Motion `whileInView`，`viewport={{ once: true, margin: "-100px" }}`
- 各区块进入视口时 fade-in

### 6.3 Hover 微交互

- 按钮: `translateY(-1px)` + `shadow` 增强，`0.2s ease`
- 卡片: `translateY(-4px)` + 边框变色，`0.3s ease`
- 链接: 颜色渐变，`0.2s ease`

### 6.4 Hero 背景粒子

- **方案：** CSS 动画 + 绝对定位小元素 (dots)，不引入 canvas 库
- **元素：** 15-20 个 `2-4px` 圆点，颜色 `rgba(108,142,239,0.3)`
- **动画：** 缓慢漂浮 (`translate` random path), 每个 15-25s 循环
- **性能：** 使用 `transform` 和 `opacity`，触发 GPU 加速

---

## 7. 响应式断点

遵循 Tailwind 默认断点：

| 断点 | 宽度 | 布局调整 |
|------|------|----------|
| `sm` | `640px` | 移动端横向 padding 增大到 24px |
| `md` | `768px` | 平板端，2 列网格开始生效 |
| `lg` | `1024px` | 桌面端布局，完整导航 |
| `xl` | `1280px` | 内容最大宽度锁定 1200px |

### 关键响应式规则

1. **导航：** `< 768px` 切换为汉堡菜单
2. **团队卡片网格：** 桌面 3 列 → 平板 2 列 → 移动 1 列
3. **价值主张：** 桌面 3 列 → 移动 1 列（垂直堆叠）
4. **Hero 标题：** 桌面 48px → 移动 32px
5. **区块 padding：** 桌面 `py-24 px-20` → 移动 `py-12 px-5`

---

## 8. 图标规范

- **图标库：** Lucide React (与 Tailwind 集成良好，风格一致)
- **图标尺寸：** 24px (默认), 20px (小), 32px (大)
- **图标颜色：** 继承父元素或单独设置
- **价值主张图标：** 48px 容器内居中，背景 `rgba(108,142,239,0.1)` 圆形容器
- **推荐图标（价值主张）：**
  - 「AI 原生团队」→ `Brain` 或 `Cpu`
  - 「极致人效比」→ `Zap`
  - 「永不停歇的创造力」→ `Sparkles`

---

## 9. 暗色模式注意事项

全站暗色主题，无 light mode 切换。关键注意点：

1. **对比度：** 所有文字与背景对比度 ≥ 4.5:1 (WCAG AA)
2. **避免纯黑：** 背景用 `#0A0B10` 而非 `#000000`，减少 OLED 眩光
3. **边框可见性：** 用 `rgba(255,255,255,0.06)` 而非纯白边框，保持柔和
4. **阴影：** 使用 `box-shadow` 时颜色用 `rgba(0,0,0,0.3-0.5)`，深度感但不脏

---

## 10. Tailwind 配置参考

```js
// tailwind.config.js 关键扩展
module.exports = {
  theme: {
    extend: {
      colors: {
        'deep-space': '#0A0B10',
        'nebula-dark': '#12141D',
        'nebula-medium': '#1A1D2E',
        'stellar-blue': '#6C8EEF',
        'cosmic-purple': '#A78BFA',
        'aurora-cyan': '#38BDF8',
        'text-primary': '#F0F0F5',
        'text-secondary': '#9CA3B0',
        'text-tertiary': '#636A7A',
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans SC', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'content': '1200px',
      },
    },
  },
}
```

---

> Iris · Dark Matter Design
