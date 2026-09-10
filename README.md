# Roomify 🏠

**AI-powered architectural visualization platform that transforms 2D floor plans and spaces into realistic interior visualizations.**

Roomify combines a modern React application with AI-powered image generation to help users visualize architectural and interior-design concepts faster.

## ✨ Features

* 🖼️ **AI-Powered Visualization** — Transform uploaded architectural images into realistic visualizations using AI.
* 📐 **Architectural Visualization** — Generate interior concepts from existing floor plans and spaces.
* 🔄 **Image Comparison** — Compare original images with AI-generated visualizations.
* ☁️ **Cloud-Based Storage** — Store and manage generated assets using cloud infrastructure.
* 🔐 **Authentication** — Secure user authentication and personalized project workflows.
* 📁 **Project Management** — Organize and access generated visualization projects.
* ⚡ **Responsive UI** — Modern responsive interface built with React and Tailwind CSS.
* 🧩 **Component-Based Architecture** — Reusable UI components and separated application/service logic.

## 🛠️ Tech Stack

### Frontend

* React
* TypeScript
* React Router
* Tailwind CSS

### AI & Cloud

* Puter.js
* Gemini AI
* Puter Storage
* Puter KV
* Puter Workers

### Development & Infrastructure

* Docker
* ESLint
* TypeScript

## 🏗️ Architecture

Roomify separates the user interface, application routes, reusable components, and external service integrations.

```text
┌─────────────────────────────────────┐
│              React UI               │
│     Components + Tailwind CSS       │
└──────────────────┬──────────────────┘
                   │
                   ▼
┌─────────────────────────────────────┐
│          React Router / App         │
│        Application Workflows        │
└──────────────────┬──────────────────┘
                   │
                   ▼
┌─────────────────────────────────────┐
│          Service / Action Layer     │
│                                     │
│  AI Actions │ Puter │ Storage       │
└─────────────┬──────────────┬────────┘
              │              │
              ▼              ▼
        ┌──────────┐   ┌──────────────┐
        │ Gemini AI│   │ Puter Cloud  │
        └──────────┘   │ Storage/KV   │
                       └──────────────┘
```

## 🔄 AI Visualization Workflow

The core visualization workflow follows this process:

```text
User uploads image
        ↓
Image validation / processing
        ↓
Image sent to AI service
        ↓
Gemini generates visualization
        ↓
Generated image returned
        ↓
Project/result persisted
        ↓
User compares original and generated result
```

The application keeps the AI integration isolated from the UI through dedicated action/service modules, making the codebase easier to maintain and extend.

## 📂 Project Structure

```text
roomify/
├── app/
│   ├── routes/
│   └── ...
├── components/
│   └── ...
├── lib/
│   ├── ai.action.ts
│   ├── puter.action.ts
│   └── ...
├── public/
├── Dockerfile
├── package.json
├── tsconfig.json
└── ...
```

### Key Areas

**`app/`**
Contains application routes and page-level functionality.

**`components/`**
Contains reusable UI components used throughout the application.

**`lib/`**
Contains integrations and application logic for services such as AI and Puter.

**`public/`**
Contains static assets.

## 🚀 Getting Started

### Prerequisites

Make sure you have:

* Node.js installed
* npm installed
* A Puter account/configuration required by the application

### Installation

Clone the repository:

```bash
git clone https://github.com/minakshi240/roomify.git
```

Navigate to the project:

```bash
cd roomify
```

Install dependencies:

```bash
npm install
```

Create your environment configuration based on the project's environment example:

```bash
cp .env.example .env
```

Add the required configuration values.

Start the development server:

```bash
npm run dev
```

Then open the local development URL shown in your terminal.

## 🐳 Docker

Roomify also includes Docker configuration for containerized development/deployment.

Build the image:

```bash
docker build -t roomify .
```

Run the container:

```bash
docker run -p 3000:3000 roomify
```

## 📌 Engineering Focus

Roomify was built with a focus on:

* AI integration within a real user workflow
* Component-driven frontend architecture
* Separation of UI and external service logic
* Asynchronous image-generation workflows
* Cloud-based asset management
* Responsive user experience
* Maintainable TypeScript code

## 🔮 Future Improvements

Planned improvements include:

* Visualization history and version management
* Multiple visualization styles and generation controls
* Project sharing and collaboration
* Improved generation progress states
* Retry and failure recovery workflows
* Enhanced project organization
* Additional AI-powered architectural workflows

## 👩‍💻 Author

**Minakshi Das**

GitHub: [@minakshi240](https://github.com/minakshi240)

---

> Roomify is an AI-focused full-stack project exploring how generative AI can be integrated into practical architectural visualization workflows.
