<div align="center">

# 🌊 DongHai Global

### Overseas Brand Portal · 出海品牌门户

**面向外贸业务的现代品牌门户 —— 沉浸式首屏 · 滚动动效 · 黑白 Logo 自适应**

> **EN** · DongHai Global is a modern brand portal for foreign-trade business, crafted with Vue 3 and Tailwind CSS — immersive hero, elegant scroll-driven interactions, adaptive black/white branding and fully responsive layouts. A zero-backend static site you can ship to Nginx, GitHub Pages or Vercel in minutes.

![Vue 3](https://img.shields.io/badge/Vue-3.5-42b883?logo=vuedotjs&logoColor=white&style=flat-square)
![Vite](https://img.shields.io/badge/Vite-7-646cff?logo=vite&logoColor=white&style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?logo=tailwindcss&logoColor=white&style=flat-square)
![Vue Router](https://img.shields.io/badge/Vue_Router-4-4fc08d?logo=vuedotjs&logoColor=white&style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

</div>

---

## 📖 项目简介

**DongHai Global** 是为外贸业务打造的现代品牌门户（企业官网）。以**沉浸式全屏首屏**开场，结合**滚动视差**与**导航状态切换**，在深色沉浸与浅色内容之间自然过渡——品牌 Logo 会随滚动**自动在黑白两版间切换**，保持视觉一致性。

项目采用「**品牌前台 + 管理端**」双入口结构：前台为面向海外客户的门户首页，管理端提供登录与仪表盘框架，路由清晰、易于扩展。

> 💡 **设计定位**：不止是一个官网模板，而是一套可长期演进的品牌门户骨架——视觉、导航、路由、管理端均预留了充分的扩展空间。

## ✨ 特性

- ✅ **响应式布局** — 基于 Tailwind CSS 的移动优先设计，桌面 / 平板 / 手机全适配
- ✅ **沉浸式首屏** — 全屏视频背景 + 毛玻璃导航 + 渐入动效
- ✅ **滚动动效与导航状态切换** — 滚动时导航栏由透明沉浸态切换为毛玻璃态，Logo 自动切换黑白版本
- ✅ **品牌色系统** — 统一的中性色 + 品牌蓝，集中维护、易于替换
- ✅ **品牌前台首页** — 内置「首页 / 服务内容 / 客户案例 / 关于我们 / 联系我们」导航结构
- ✅ **管理端入口** — `/admin/login` 登录页 + `/admin/dashboard` 仪表盘框架，开箱即用
- ✅ **可扩展路由** — vue-router 懒加载路由，新增页面零成本
- ✅ **工程化开箱即用** — unplugin 自动导入（`ref` / `reactive` / 路由 API 无需手动 import）、Element Plus 按需加载

## 🖼️ 界面预览

![首页预览](docs/home.png)

> 📸 截图待补充：请运行 `npm run dev` 后截取首页，保存为 `docs/home.png` 即可在此展示。

## 🚀 快速开始

> 环境要求：**Node.js ≥ 18**（推荐 20+），包管理器使用 npm。

```bash
# 1. 安装依赖
npm install

# 2. 启动开发服务器（默认 http://localhost:5173）
npm run dev

# 3. 生产构建（输出到 dist/）
npm run build

# 4. 本地预览构建产物
npm run preview
```

| 命令 | 说明 |
| --- | --- |
| `npm run dev` | 启动开发服务器，支持 HMR 热更新 |
| `npm run build` | 执行生产构建，输出纯静态文件到 `dist/` |
| `npm run preview` | 本地预览生产构建结果 |

## 📁 项目结构

```
domestic-platform-vue/
├── public/                  # 静态资源（Logo 等，原样拷贝至构建产物）
│   ├── dh_logo.png
│   └── donghai_logo.png
├── src/
│   ├── assets/
│   │   └── main.css         # 全局样式
│   ├── views/
│   │   ├── public/
│   │   │   └── Home.vue     # 品牌前台首页（沉浸式首屏 + 滚动动效）
│   │   └── admin/           # 管理端
│   │       ├── Login.vue    # 管理端登录
│   │       └── Dashboard.vue# 管理端仪表盘
│   ├── router/
│   │   └── index.ts         # 路由配置（懒加载）
│   ├── App.vue              # 应用根组件
│   ├── main.js              # 入口
│   ├── auto-imports.d.ts    # unplugin-auto-import 自动生成
│   └── components.d.ts      # unplugin-vue-components 自动生成
├── index.html
├── package.json
├── vite.config.js           # Vite + 自动导入 / 组件按需注册配置
├── tailwind.config.js       # Tailwind 主题配置
└── postcss.config.js
```

## 🌐 部署

`npm run build` 产出的 `dist/` 为**纯静态资源，无需任何后端服务**，可直接托管到任意静态站点平台：

| 平台 | 说明 |
| --- | --- |
| **Nginx** | 将 `dist/` 指向站点根目录；需配置 `try_files $uri $uri/ /index.html;` 以支持前端路由（history 模式） |
| **GitHub Pages** | 仓库 Settings → Pages 选择分支根目录或 `dist/` 工作流发布 |
| **Vercel / Netlify** | 导入仓库，构建命令 `npm run build`，输出目录 `dist` |

## 🎨 自定义指南

**品牌名** — 修改 `src/views/public/Home.vue` 中导航栏的品牌文字（`DongHai`）与 `<footer>` 版权信息。

**Logo** — 替换 `public/` 下的 Logo 文件。当前首页滚动切换依赖两个文件，按文件名放入 `public/` 根目录即可生效：

- `/donghai_logo_black.png` — 深色内容区使用的**黑版 Logo**
- `/donghai_logo_white.png` — 深色沉浸首屏使用的**白版 Logo**

> ⚠️ **资源说明**：仓库当前 `public/` 仅包含 `dh_logo.png` 与 `donghai_logo.png`，**黑白两版 Logo（`donghai_logo_black.png` / `donghai_logo_white.png`）尚未提供**，请在设计定稿后将对应文件放入 `public/`；在补齐前，首屏 Logo 图片将无法加载（文字品牌名 `DongHai` 不受影响）。首屏背景视频与配图目前引用 Pexels / Unsplash 外链素材，可替换为自有素材以获得更稳定的加载体验。

**配色** — 在 `tailwind.config.js` 的 `theme.extend` 中注册品牌色令牌（如 `brand`），或直接调整 `Home.vue` 中的蓝色系工具类（`blue-500` / `blue-600` 等）即可全局换色。

**新增页面** — 在 `src/router/index.ts` 添加路由（懒加载组件），并在导航栏补充对应入口；管理端页面统一放入 `src/views/admin/`。

## 📄 License

[MIT](LICENSE)

---

<div align="center">

**© 2026 RongYu · DongHai Brand**

</div>
