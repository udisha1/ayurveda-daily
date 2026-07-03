# Contributing to AyurvedaDaily 🌿

Thank you for your interest in contributing to **AyurvedaDaily**! This is an Angular-based informational web app helping users explore Ayurvedic wellness — doshas, herbs, remedies, and daily routines.

This project is part of **GirlScript Summer of Code (GSSoC'26)**.

> **Disclaimer:** AyurvedaDaily is an informational project only. It does not provide medical advice, diagnosis, or treatment. Please keep this in mind when contributing content.

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Branch Naming Convention](#branch-naming-convention)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Pull Request Process](#pull-request-process)
- [Code & UI Guidelines](#code--ui-guidelines)
- [Reporting Issues](#reporting-issues)
- [GSSoC Guidelines](#gssoc-guidelines)

---

## Prerequisites

Make sure you have the following installed before setting up the project:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Angular CLI](https://angular.io/cli)

```bash
npm install -g @angular/cli
```

---

## Getting Started

### 1. Fork the Repository

Click the **Fork** button at the top right of this page to create your own copy.

### 2. Clone Your Fork

```bash
git clone https://github.com/<your-username>/ayurveda-daily.git
cd ayurveda-daily
```

### 3. Add the Upstream Remote

```bash
git remote add upstream https://github.com/udisha1/ayurveda-daily.git
```

### 4. Install Dependencies

```bash
npm install
```

### 5. Start the Development Server

```bash
ng serve
```

Open [http://localhost:4200/](http://localhost:4200/) in your browser. The app will auto-reload when you make changes.

---

## How to Contribute

1. **Find an issue** — Browse [Issues](https://github.com/udisha1/ayurveda-daily/issues) for open issues.
2. **Get assigned** — Comment on the issue requesting assignment. Do **not** start working until you are officially assigned.
3. **Sync your fork** before creating a branch:
   ```bash
   git checkout main
   git pull upstream main
   ```
4. **Create a new branch** for your changes (see naming convention below).
5. Make your changes, test locally, then commit and push.
6. **Open a Pull Request** targeting the `main` branch of the original repository.

---

## Branch Naming Convention

```
<type>/<short-description>
```

| Type | When to use |
|------|-------------|
| `feature/` | Adding new functionality |
| `fix/` | Fixing a bug |
| `documentation/` | Documentation-only changes |
| `style/` | UI/CSS changes with no logic impact |
| `refactor/` | Code restructuring without behavior changes |
| `chore/` | Config, dependency, or tooling updates |

**Examples:**
```
feature/herb-detail-page
fix/dosha-quiz-mobile-layout
docs/update-contributing-guide
style/improve-navbar-responsiveness
```

---

## Commit Message Guidelines

Write short, clear messages in the **imperative mood**:

```
Add herb detail component
Fix quiz result display on small screens
Update contributing guide with Angular setup
```

- Keep the first line under **72 characters**
- Reference the issue number where relevant: `Fix dosha card overflow (#12)`
- Avoid vague messages like `minor fix` or `update stuff`

---

## Pull Request Process

1. Make sure your branch is up to date with `upstream/main` before opening a PR.
2. In your PR description, include:
   - A summary of what you changed and why
   - The issue it closes: `Closes #<issue-number>`
   - **Screenshots or screen recordings** for any UI changes (required)
3. Wait for a maintainer review. Address feedback promptly and push updates to the same branch.
4. **Do not merge your own PR.** Only the repository owner merges PRs.

---

## Code & UI Guidelines

**Angular / TypeScript**
- Follow the existing project structure — place components, services, and modules where they logically belong.
- Keep components focused and small; avoid large monolithic components.
- Remove all `console.log` statements before submitting.
- Use meaningful, descriptive names for variables, functions, and components.

**UI & Styling**
- Keep all UI changes **consistent with the existing design** — fonts, colors, spacing.
- All new sections and components must be **responsive** and work well on mobile screens.
- Ensure text and interactive elements are **accessible** (sufficient contrast, readable font sizes, keyboard navigability).
- Do not introduce new CSS frameworks or UI libraries without discussing it in the issue first.

**Content**
- Any Ayurveda-related content added must be for **general educational purposes only**.
- Do not include anything that could be interpreted as medical advice or diagnosis.

**Testing**
- Run unit tests before submitting:
  ```bash
  ng test
  ```
- Make sure your changes do not break existing tests.
- Add tests for new logic where appropriate.

---

## Reporting Issues

If you find a bug or have a feature suggestion:

1. Check [existing issues](https://github.com/udisha1/ayurveda-daily/issues) to avoid duplicates.
2. Open a new issue with:
   - A clear, descriptive title
   - Steps to reproduce (for bugs)
   - Expected vs. actual behavior
   - Screenshots if relevant
   - Device / browser info for UI bugs

---

## GSSoC Guidelines

- Only work on issues **assigned to you**.
- One contributor per issue unless the maintainer explicitly states otherwise.
- Be respectful and constructive in all issue and PR discussions.
- Spam PRs, duplicate submissions, or low-effort contributions may result in disqualification from GSSoC points.
- All contributions must comply with the project's license.

---

## Need Help?

If you're stuck or have questions, leave a comment on the relevant issue. The maintainer or fellow contributors will be happy to help.

Happy contributing! 🌱