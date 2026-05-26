import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/organisms/Navbar';
import { LoadingSpinner } from './components/atoms/LoadingSpinner';

// Lazy-loaded pages
const HomePage = lazy(() => import('./pages/HomePage').then((m) => ({ default: m.HomePage })));
const SubscriptionsPage = lazy(() => import('./pages/SubscriptionsPage').then((m) => ({ default: m.SubscriptionsPage })));
const SubscriptionDetailPage = lazy(() => import('./pages/SubscriptionDetailPage').then((m) => ({ default: m.SubscriptionDetailPage })));
const TrainersPage = lazy(() => import('./pages/TrainersPage').then((m) => ({ default: m.TrainersPage })));
const TrainerDetailPage = lazy(() => import('./pages/TrainerDetailPage').then((m) => ({ default: m.TrainerDetailPage })));
const ClassesPage = lazy(() => import('./pages/ClassesPage').then((m) => ({ default: m.ClassesPage })));
const MembersPage = lazy(() => import('./pages/MembersPage').then((m) => ({ default: m.MembersPage })));
const CartPage = lazy(() => import('./pages/CartPage').then((m) => ({ default: m.CartPage })));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage').then((m) => ({ default: m.CheckoutPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })));

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div style={{ minHeight: '100vh', background: '#0f0f0f', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
          <Navbar />
          <Suspense fallback={<LoadingSpinner text="Loading..." />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/subscriptions" element={<SubscriptionsPage />} />
              <Route path="/subscription/:id" element={<SubscriptionDetailPage />} />
              <Route path="/trainers" element={<TrainersPage />} />
              <Route path="/trainer/:id" element={<TrainerDetailPage />} />
              <Route path="/classes" element={<ClassesPage />} />
              <Route path="/members" element={<MembersPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

