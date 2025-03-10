# <p align="center">promiseono.vercel.app</p>

<p align="center"><img width="700" alt="image" src="https://github.com/user-attachments/assets/fd2ee3bb-74ca-4e8c-813a-eda7ab8c8521" /></p>
<p align="center">Personal portfolio website built with React, Tailwind CSS, and Framer Motion. Bundled with Vite and deployed on Vercel.</p>
<p align="center">
  <a href="https://github.com/pononokp/portfolio/releases/latest" target="_blank"><img alt="GitHub release" src="https://img.shields.io/github/release/pononokp/portfolio.svg?logo=github&color=red"></a>
    <a href="https://github.com/pononokp/portfolio/actions?workflow=jobs" target="_blank"><img alt="Workflow" src="https://img.shields.io/github/actions/workflow/status/pononokp/portfolio/.github%2Fworkflows%2Fjobs.yml?&logo=github"></a>
</p>

## 🧭 Table of Contents

- [promiseono.vercel.app](#promiseonovercelapp)
  - [Table of Contents](#-table-of-contents)
  - [Directory Structure](#%EF%B8%8F-directory-structure)
  - [Local Run](#-local-run)
    - [Tech Stack](#techstack)
    - [Steps](#steps)

## 🏗️ Directory Structure

```bash
src/
├── assets/         # Static assets
├── components/     # Shared React components
    ├── example-component/     # Example related component folder
        ├── example-component1.tsx     # Example component
        ├── example-component2.tsx     # Example component
        ├── index.tsx                 # export file for all components in folder
    ├── styles/         # Custom styles and css files
    ├── utils/          # Helper functions
    ├── views/          # Sections in the main page
    └── lib/            # Shared libraries
```

## 🚀 Local Run

### Tech Stack

- **Frontend**: React (built with Vite)  in TS
- **Deployment**: Vercel  
- **Package Manager**: pnpm  
- **Development Setup**: Static assets are bundled with Vite and served by Vercel.  


### Steps

1. Clone this repository

```bash
git clone https://github.com/pononokp/portfolio.git
```

2. Navigate into the project directory

```bash
cd portfolio
```

3. Install the dependencies

```bash
pnpm install
```

4. Run the development server

```bash
pnpm run dev
```

5. Build for production

```bash
pnpm build
```
