# 🦉 Owl AI (Owl IDE)

<p align="center">
  <img src="./public/logo.png" alt="Owl AI Logo" width="120" />
</p>

<p align="center">
  <strong>Ship code at Owl speed with AI precision.</strong>
</p>

<p align="center">
  <a href="https://github.com/Ganesh5050/Owl-IDE/actions"><img src="https://img.shields.io/github/actions/workflow/status/Ganesh5050/Owl-IDE/ci.yml?branch=main&style=flat-square" alt="Build Status"></a>
  <img src="https://img.shields.io/github/license/Ganesh5050/Owl-IDE?style=flat-square" alt="License">
  <img src="https://img.shields.io/github/stars/Ganesh5050/Owl-IDE?style=flat-square" alt="Stars">
  <img src="https://img.shields.io/github/forks/Ganesh5050/Owl-IDE?style=flat-square" alt="Forks">
</p>

---

## 🌟 Overview

**Owl AI** (or **Owl IDE**) is a premium, next-generation AI-powered Integrated Development Environment (IDE) interface and SaaS landing platform. Built using **React**, **Vite**, **TypeScript**, and **Supabase**, Owl AI is designed to accelerate developer workflows with deep semantic understanding, multi-agent collaboration, and intuitive code-generation capabilities.

---

## ✨ Features

- **🔍 Deep Research**: Instantly analyze and understand your entire codebase with semantic context awareness and intelligent navigation.
- **📝 Plan Mode**: Strategic, AI-powered architectural planning that helps you visualize and design solutions before writing code.
- **⚡ Vibe Debugging**: An intuitive, context-aware debugger that detects why your code is broken and recommends elegant fixes.
- **🤖 Smart Model Auto-Selection**: Automatically chooses the optimal LLM/model for your current coding task to maximize productivity and efficiency.
- **✨ Tab It, Get It**: In-line smart autocomplete and context-aware next-edit suggestion engine.
- **🔌 Model Context Protocol (MCP)**: Dynamic client-server architecture enabling agents to seamlessly interact with external data sources and dev tools.
- **🎨 Glassmorphic Premium UI/UX**: Includes stunning dark/light mode toggles, micro-animations, text scramblers, circuit pulses, and fluid canvas designs.

---

## 🛠️ Technology Stack

- **Frontend**: [React 18](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 5](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/), [Framer Motion](https://www.framer.com/motion/) (animations)
- **Database & Auth**: [Supabase](https://supabase.com/)
- **Routing**: [React Router DOM v6](https://reactrouter.com/)
- **Scroller**: [Lenis](https://lenis.darkroom.engineering/) (smooth scrolling)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started

Follow these steps to set up and run Owl AI locally.

### 📋 Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18.x or higher)
- [npm](https://www.npmjs.com/) or [Bun](https://bun.sh/) (recommended)

### 1. Clone the Repository

```bash
git clone https://github.com/Ganesh5050/Owl-IDE.git
cd Owl-IDE
```

### 2. Install Dependencies

You can use either `npm` or `bun` to install dependencies:

```bash
# Using npm
npm install

# Using bun
bun install
```

### 3. Environment Variables Configuration

Create a `.env` file in the root directory and add your Supabase credentials:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_public_key
```

### 4. Database Setup (Supabase)

Initialize your Supabase database by running the SQL queries in `supabase-setup.sql` within your Supabase SQL Editor. This script sets up:
- The `profiles` table linked to your authenticated users.
- Row-Level Security (RLS) policies for secure reads, inserts, and updates.
- An automatic trigger function to generate a profile when a new user signs up.

### 5. Running Local Development Server

Run the development server locally:

```bash
# Using npm
npm run dev

# Using bun
bun run dev
```

Once started, the application will be available at:
👉 **[http://localhost:8081/](http://localhost:8081/)**

---

## 📁 Folder Structure

```text
├── public/                 # Static assets (logos, icons, placeholders)
├── src/
│   ├── assets/             # Images & visual assets
│   ├── components/         # Reusable React components & layout features
│   │   └── ui/             # Core UI components (buttons, input fields, cards, custom effects)
│   ├── hooks/              # Custom React hooks (toasts, scrolling, layout)
│   ├── lib/                # Library configurations (Supabase client, Tailwind utility helpers)
│   ├── pages/              # Application pages (Home, Login, Signup, Dashboard, Docs)
│   ├── App.tsx             # Main router and shell layout
│   └── main.tsx            # Application entry point
├── supabase-setup.sql      # Supabase database schema setup script
├── tailwind.config.ts      # Tailwind CSS theme configuration
└── vite.config.ts          # Vite build tool setup configuration
```

---

## 👥 Credits

* **Ganesh Panigrahi** — Co-founder & Architect of Owl AI.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
