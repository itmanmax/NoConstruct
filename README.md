# NoConstruct - "建设中"页面项目

这是一个基于 Next.js 构建的现代化"建设中"页面项目，集成了 Firebase Studio 和 Google AI Genkit 技术栈。

## 📋 项目概述

NoConstruct 是一个优雅的"Under Construction"页面解决方案，适用于需要在网站或应用开发期间展示临时页面的场景。项目采用现代化的设计理念，提供了美观的UI界面和流畅的用户体验。

## ✨ 核心功能

- **🚧 页面状态指示器**: 清晰显示"建设中"状态的醒目标题
- **🎨 推广布局**: 实现视觉吸引力强的布局设计，包含专门的推广区域
- **🖼️ 背景图片**: 展示与 MAX 品牌相关的背景图片，丰富页面设计
- **📊 进度指示器**: 模拟项目进度的动态进度条
- **🌐 双语支持**: 同时支持中文和英文内容展示
- **📱 响应式设计**: 完美适配桌面端和移动端设备

## 🎨 设计规范

- **主色调**: 柔和蓝色 (#90AFC5) - 传达平静和期待感
- **背景色**: 浅灰色 (#D3D5D8) - 提供干净中性的背景
- **强调色**: 柔和橙色 (#E29664) - 突出重要元素
- **字体**: 'Inter' 无衬线字体 - 现代化且易读的设计
- **效果**: 简洁清爽的布局，背景图片模糊效果，微妙的加载动画

## 🛠️ 技术栈

### 前端框架
- **Next.js 15.2.3** - React 全栈框架
- **React 18.3.1** - 用户界面库
- **TypeScript** - 类型安全的 JavaScript

### UI 组件库
- **Radix UI** - 无障碍的 UI 组件库
- **Tailwind CSS 3.4.1** - 实用优先的 CSS 框架
- **Tailwind CSS Animate** - 动画扩展
- **Lucide React** - 现代图标库

### AI 和后端服务
- **Google AI Genkit 1.8.0** - AI 应用开发工具包
- **Firebase** - 后端即服务平台

### 开发工具
- **Turbopack** - 快速构建工具
- **ESLint** - 代码质量检查
- **PostCSS** - CSS 处理工具

## 🚀 快速开始

### 环境要求

- Node.js 20 或更高版本
- npm 或 yarn 包管理器

### 安装步骤

1. **克隆项目**
   ```bash
   git clone <repository-url>
   cd NoConstruct
   ```

2. **安装依赖**
   ```bash
   npm install
   # 或
   yarn install
   ```

3. **配置环境变量**
   ```bash
   cp .env.example .env.local
   # 编辑 .env.local 文件，配置必要的环境变量
   ```

4. **启动开发服务器**
   ```bash
   npm run dev
   # 或
   yarn dev
   ```

5. **打开浏览器**
   
   访问 [http://localhost:9002](http://localhost:9002) 查看页面效果

### AI 功能开发

如果需要使用 AI 功能，可以启动 Genkit 开发服务器：

```bash
# 启动 Genkit 开发模式
npm run genkit:dev

# 启动 Genkit 监视模式（自动重载）
npm run genkit:watch
```

## 📁 项目结构

```
NoConstruct/
├── src/
│   ├── app/                 # Next.js App Router 页面
│   │   ├── page.tsx        # 主页面组件
│   │   ├── layout.tsx      # 根布局组件
│   │   └── globals.css     # 全局样式
│   ├── components/         # React 组件
│   │   └── ui/            # UI 组件库
│   ├── hooks/             # 自定义 React Hooks
│   ├── lib/               # 工具函数库
│   └── ai/                # AI 相关配置
│       ├── genkit.ts      # Genkit 配置
│       └── dev.ts         # 开发环境配置
├── docs/                  # 项目文档
│   └── blueprint.md       # 设计蓝图
├── components.json        # Shadcn UI 配置
├── tailwind.config.ts     # Tailwind CSS 配置
├── next.config.ts         # Next.js 配置
├── apphosting.yaml        # Firebase App Hosting 配置
└── package.json           # 项目依赖配置
```

## 🔧 可用脚本

- `npm run dev` - 启动开发服务器（使用 Turbopack，端口 9002）
- `npm run build` - 构建生产版本
- `npm run start` - 启动生产服务器
- `npm run lint` - 运行 ESLint 代码检查
- `npm run typecheck` - 运行 TypeScript 类型检查
- `npm run genkit:dev` - 启动 Genkit AI 开发服务器
- `npm run genkit:watch` - 启动 Genkit 监视模式

## 🚀 部署

### Firebase App Hosting

项目已配置为使用 Firebase App Hosting 进行部署：

1. 确保已安装 Firebase CLI
2. 运行构建命令：`npm run build`
3. 按照 Firebase 部署流程进行部署

### 其他部署平台

项目也可以部署到其他支持 Next.js 的平台，如 Vercel、Netlify 等。

## 🎯 自定义指南

### 修改页面内容

编辑 `src/app/page.tsx` 文件来自定义页面内容：
- 修改标题和描述文字
- 调整进度条显示
- 更新推广区域内容

### 修改样式主题

编辑 `tailwind.config.ts` 和 `src/app/globals.css` 来调整颜色主题和样式。

### 添加新功能

在 `src/components` 目录下创建新组件，在 `src/hooks` 中添加自定义 hooks。

## 📄 许可证

本项目采用 MIT 许可证。详情请查看 LICENSE 文件。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目。

## 📞 支持

如有问题或建议，请通过以下方式联系：
- 提交 GitHub Issue
- 发送邮件至项目维护者

---

⚡ 使用 Next.js + Firebase Studio + Google AI Genkit 构建
