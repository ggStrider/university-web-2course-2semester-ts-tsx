# FitClub SPA

Інформаційна система для співробітників фітнес-клубу.

Фінальний проєкт з дисципліни «Веб-технології та веб-дизайн», варіант 10.

## Технічний стек

- **React 18** + **TypeScript** (strict mode)
- **Vite** — збірка
- **React Router v6** — маршрутизація з lazy loading
- **React Hook Form** + **Zod** — форми та валідація
- **Context API + useReducer** — глобальний стан кошика
- **localStorage** — persist стан кошика між сесіями
- Inline styles, CSS Variables — без зовнішніх CSS-фреймворків
- **ESLint** + **Prettier** — linting та форматування

## Архітектура

```
src/
├── api/           # API функції (mock + DummyJSON)
├── components/
│   ├── atoms/     # Button, Input, Badge, Modal, LoadingSpinner
│   ├── molecules/ # SubscriptionCard, TrainerCard, ClassCard, MemberCard, SearchBar
│   └── organisms/ # Navbar
├── context/       # CartContext (глобальний стан)
├── hooks/         # useSubscriptions, useTrainers, useClasses, useMembers, useCart, useDebounce
├── pages/         # HomePage, SubscriptionsPage, SubscriptionDetailPage, TrainersPage,
│                  # TrainerDetailPage, ClassesPage, MembersPage, CartPage, CheckoutPage, NotFoundPage
└── types/         # Member.ts, Trainer.ts, Subscription.ts, WorkoutClass.ts
```

## Маршрути

| Шлях | Сторінка |
|---|---|
| `/` | Головна |
| `/subscriptions` | Каталог абонементів |
| `/subscription/:id` | Деталі абонементу |
| `/trainers` | Список тренерів |
| `/trainer/:id` | Профіль тренера |
| `/classes` | Групові заняття |
| `/members` | Список клієнтів |
| `/cart` | Кошик |
| `/checkout` | Оформлення замовлення |
| `*` | 404 |

## Реалізований функціонал

- Перегляд, фільтрація та пошук (з debounce) абонементів, тренерів, занять, членів
- Кошик з persist state (localStorage)
- Checkout форма з валідацією (React Hook Form + Zod)
- Loading / error states на всіх сторінках
- Lazy loading сторінок (React.lazy + Suspense)
- Custom hooks для кожного типу даних
- Atomic Design структура компонентів
- 404 сторінка

## Запуск

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Автор

Yaroslav Oslam — варіант 10

