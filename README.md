# Chrisx - AI-Powered Relationship Assistant

<div align="center">
  <img src="public/hero.png" alt="Chrisx Logo" width="280">
  <p>Strengthening relationships with AI-powered communication</p>
  
  <a href="https://github.com/Rdrudra99/chrisx">
    <img src="https://img.shields.io/github/stars/Rdrudra99/chrisx?style=social" alt="GitHub stars">
  </a>
  <a href="https://github.com/Rdrudra99/chrisx/fork">
    <img src="https://img.shields.io/github/forks/Rdrudra99/chrisx?style=social" alt="GitHub forks">
  </a>
  <a href="https://github.com/Rdrudra99/chrisx/issues">
    <img src="https://img.shields.io/github/issues/Rdrudra99/chrisx" alt="GitHub issues">
  </a>
  <p><a href="https://github.com/Rdrudra99/chrisx">https://github.com/Rdrudra99/chrisx</a></p>
</div>

<div align="center">
  <a href="#-features">Features</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-installation">Installation</a> •
  <a href="#-environment-setup">Environment Setup</a> •
  <a href="#-contributing">Contributing</a>
</div>

## ✨ Features

- **AI-Powered Chat**: Engage with an AI assistant that helps with relationship questions and advice
- **Web Search Integration**: Get real-time information from the web when needed
- **Citation Support**: View sources with inline citations for accurate information
- **Reasoning Transparency**: See the AI's reasoning process behind responses
- **Modern UI**: Clean, responsive interface built with Next.js and Tailwind CSS

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm
- [Clerk](https://clerk.com/) account (for authentication)
- [Vercel AI Gateway](https://vercel.com/changelog/introducing-ai-elements) API key

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/Rdrudra99/chrisx.git
cd chrisx
```

2. Install dependencies:

```bash
pnpm install
```

3. Set up your environment variables (see next section)

4. Start the development server:

```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔐 Environment Setup

Create a `.env` file in the root directory based on the provided `.env.example`:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=  # Your Clerk publishable key
CLERK_SECRET_KEY=                   # Your Clerk secret key
AI_GATEWAY_API_KEY=                 # Your Vercel AI Gateway API key
```

### How to obtain the keys:

1. **Clerk Authentication Keys**
   - Sign up at [clerk.com](https://clerk.com/)
   - Create a new application
   - Navigate to API Keys in your dashboard
   - Copy your Publishable Key and Secret Key

2. **Vercel AI Gateway API Key**
   - Sign up or log in at [vercel.com](https://vercel.com/)
   - Navigate to the AI section in your dashboard
   - Generate a new API key for AI Gateway
   - For more information, see [Vercel AI Elements](https://vercel.com/changelog/introducing-ai-elements)

## 🏗️ Project Structure

```
chrisx/
├── public/              # Static assets
├── src/
│   ├── app/             # Next.js app directory
│   │   ├── api/         # API routes
│   │   │   └── chat/    # Chat API endpoint
│   │   ├── chat/        # Chat page
│   │   └── (landingpage)/ # Landing page
│   ├── components/      # React components
│   │   ├── ui/          # UI components
│   │   └── shared/      # Shared components
│   ├── hooks/           # Custom React hooks
│   └── lib/             # Utility functions
└── ...                  # Configuration files
```

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Authentication**: [Clerk](https://clerk.com/)
- **AI Integration**: [Vercel AI SDK](https://sdk.vercel.ai/docs)
- **UI Components**: Custom components with [shadcn/ui](https://ui.shadcn.com/)

## 👥 Contributing

We welcome contributions to Chrisx! Here's how you can help:

### Ways to Contribute

- **Report bugs**: Submit issues for any bugs you encounter
- **Suggest features**: Have an idea? We'd love to hear it!
- **Submit pull requests**: Implement new features or fix bugs

### Development Workflow

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Test your changes locally
5. Commit with descriptive messages: `git commit -m 'Add: detailed description'`
6. Push to your fork: `git push origin feature/your-feature-name`
7. Submit a pull request

### Contribution Guidelines

- Follow the existing code style and patterns
- Keep commits focused and atomic
- Write clear commit messages
- Include tests for new functionality
- Update documentation for changes

### Setting Up for Development

1. Make sure you have all prerequisites installed
2. Set up environment variables as described above
3. Run `pnpm dev` to start the development server

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/) - React framework
- [Clerk](https://clerk.com/) - Authentication
- [Vercel](https://vercel.com/) - Hosting and AI SDK
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI components

---

<div align="center">
  Made with ❤️ by <a href="https://github.com/Rdrudra99">Rudra Narayan Dash</a>
  <p>
    <a href="https://github.com/Rdrudra99/chrisx">https://github.com/Rdrudra99/chrisx</a>
  </p>
</div>
