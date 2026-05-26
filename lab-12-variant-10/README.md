# FitClub SPA

A single-page web application built for fitness club staff management.

This project was developed as a final assignment for the **Web Technologies and Web Design** course (Variant 10).

---

## Tech Stack

- **React 18**
- **TypeScript** (strict mode)
- **Vite** for build tooling
- **React Router v6** with lazy-loaded routes
- **React Hook Form** + **Zod** for form handling and validation
- **Context API + useReducer** for global cart state management
- **localStorage** for cart persistence between sessions
- Inline styles + CSS Variables (no external CSS frameworks)
- **ESLint** + **Prettier** for code quality and formatting

---

## Project Structure

```text
src/
├── api/           # API layer (mock data + DummyJSON)
├── components/
│   ├── atoms/     # Button, Input, Badge, Modal, LoadingSpinner
│   ├── molecules/ # SubscriptionCard, TrainerCard, ClassCard, MemberCard, SearchBar
│   └── organisms/ # Navbar
├── context/       # Global cart state
├── hooks/         # Custom hooks
├── pages/         # Application pages
└── types/         # TypeScript models
```

---

## Available Routes

| Route | Description |
|-------|-------------|
| `/` | Home page |
| `/subscriptions` | Subscription catalog |
| `/subscription/:id` | Subscription details |
| `/trainers` | Trainers list |
| `/trainer/:id` | Trainer profile |
| `/classes` | Group classes |
| `/members` | Members list |
| `/cart` | Shopping cart |
| `/checkout` | Checkout page |
| `*` | 404 page |

---

## Features

- Browse, filter, and search subscriptions, trainers, classes, and members
- Debounced search for improved UX
- Persistent cart state using localStorage
- Checkout form with schema-based validation
- Loading and error handling across all pages
- Route-based code splitting with lazy loading
- Custom hooks for data management
- Atomic Design component architecture
- Custom 404 page

---

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

## Production Build

Build the project:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## Author

**Yaroslav Oslam**
