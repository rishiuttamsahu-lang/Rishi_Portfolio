# 🚀 Rishi Portfolio

<div align="center">

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-7.3.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Scoped-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-222?style=for-the-badge&logo=github&logoColor=white)

A modern, animated personal portfolio website built with **React** and **Vite**, showcasing projects, skills, and services offered by **Rishikesh Uttam Sahu** — a passionate Computer Science student and full-stack developer.

</div>

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
- [📦 Available Scripts](#-available-scripts)
- [🌐 Deployment](#-deployment)
- [📬 Contact](#-contact)

---

## ✨ Features

- **Hero Section** — Animated background powered by UnicornStudio with a call-to-action
- **About Section** — Personal bio with an interactive flip-card image animation
- **Skills Carousel** — Infinite auto-scrolling carousel showcasing the tech stack
- **Projects Showcase** — Project cards with descriptions, tech tags, GitHub links, and live demo links
- **Services Section** — Overview of services offered (Full Stack Dev, AI Integration, Web Apps)
- **Contact Form** — Functional contact form integrated with the [Web3Forms](https://web3forms.com/) API
- **Responsive Design** — Mobile-friendly layout with a hamburger navigation menu
- **Social Links** — Quick access to GitHub, LinkedIn, and Instagram throughout the site
- **Smooth Scrolling** — CSS-powered smooth in-page navigation

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **UI Library** | React 19 |
| **Build Tool** | Vite 7 |
| **Routing** | React Router DOM 7 |
| **Icons** | FontAwesome, React Icons |
| **Animation** | UnicornStudio (CDN), CSS animations |
| **Contact API** | Web3Forms |
| **Linting** | ESLint 9 |
| **Deployment** | GitHub Pages (`gh-pages`) |

---

## 📁 Project Structure

```
Rishi_Portfolio/
├── public/                 # Static assets (favicon, images)
│   ├── icon.png
│   ├── img1.png
│   ├── img3.png
│   └── img4.png
├── src/
│   ├── assets/             # Internal images
│   ├── components/
│   │   ├── Header.jsx      # Sticky navigation bar with mobile hamburger menu
│   │   └── Header.css
│   ├── pages/
│   │   ├── Hero/           # Landing section with animated background
│   │   ├── About/          # Bio, flip-card, and skills carousel
│   │   ├── Project/        # Portfolio project cards
│   │   ├── Services/       # Services offered
│   │   ├── Contact/        # Contact form (Web3Forms API)
│   │   └── Footer/         # Footer with social links
│   ├── App.jsx             # Root component, page composition
│   ├── main.jsx            # React entry point
│   └── index.css           # Global styles
├── index.html              # HTML entry point
├── vite.config.js          # Vite configuration
├── eslint.config.js        # ESLint configuration
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) v18 or higher
- [npm](https://www.npmjs.com/) v9 or higher

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rishiuttamsahu-lang/Rishi_Portfolio.git
   cd Rishi_Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running Locally

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`.

---

## 📦 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the Vite development server with hot reload |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check for code issues |
| `npm run deploy` | Build and deploy to GitHub Pages |

---

## 🌐 Deployment

This project is configured to deploy to **GitHub Pages** using the `gh-pages` package.

```bash
npm run deploy
```

This command builds the project and publishes the `dist/` folder to the `gh-pages` branch of the repository, making the site publicly accessible.

---

## 📬 Contact

**Rishikesh Uttam Sahu**

- 📧 Email: [rishiuttamsahu@gmail.com](mailto:rishiuttamsahu@gmail.com)
- 📍 Location: Bhiwandi, Maharashtra, India
- 🐙 GitHub: [@rishiuttamsahu-lang](https://github.com/rishiuttamsahu-lang/)
- 📸 Instagram: [@itz_rishi_8468](https://www.instagram.com/itz_rishi_8468/)

---

<div align="center">

Made with ❤️ by Rishikesh Uttam Sahu

</div>
