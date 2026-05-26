import { useState, useEffect, useCallback } from 'react';
import { api } from '../api/fitnessApi';
import type { Subscription } from '../types/Subscription';
import type { Trainer } from '../types/Trainer';
import type { WorkoutClass } from '../types/WorkoutClass';
import type { Member } from '../types/Member';
import { useCartContext } from '../context/CartContext';

// --- useDebounce ---
export function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState<T>(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounced;
}

// --- useSubscriptions ---
export function useSubscriptions() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    api
      .getSubscriptions()
      .then((data) => {
        if (!cancelled) setSubscriptions(data);
      })
      .catch((e: Error) => {
        if (!cancelled) setError(e.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, []);

  return { subscriptions, loading, error };
}

// --- useSubscription (single) ---
export function useSubscription(id: number) {
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    api
      .getSubscriptionById(id)
      .then((data) => { if (!cancelled) setSubscription(data); })
      .catch((e: Error) => { if (!cancelled) setError(e.message); })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [id]);

  return { subscription, loading, error };
}

// --- useTrainers ---
export function useTrainers() {
  const [trainers, setTrainers] = useState<Trainer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    api
      .getTrainers()
      .then((data) => { if (!cancelled) setTrainers(data); })
      .catch((e: Error) => { if (!cancelled) setError(e.message); })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, []);

  return { trainers, loading, error };
}

// --- useTrainer (single) ---
export function useTrainer(id: number) {
  const [trainer, setTrainer] = useState<Trainer | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    api
      .getTrainerById(id)
      .then((data) => { if (!cancelled) setTrainer(data); })
      .catch((e: Error) => { if (!cancelled) setError(e.message); })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [id]);

  return { trainer, loading, error };
}

// --- useClasses ---
export function useClasses() {
  const [classes, setClasses] = useState<WorkoutClass[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    api
      .getClasses()
      .then((data) => { if (!cancelled) setClasses(data); })
      .catch((e: Error) => { if (!cancelled) setError(e.message); })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, []);

  return { classes, loading, error };
}

// --- useMembers ---
export function useMembers() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    api
      .getMembers()
      .then((data) => { if (!cancelled) setMembers(data); })
      .catch((e: Error) => { if (!cancelled) setError(e.message); })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, []);

  return { members, loading, error };
}

// --- useCart (wrapper over context) ---
export function useCart() {
  const cart = useCartContext();

  const isInCart = useCallback(
    (id: number) => cart.items.some((i) => i.subscription.id === id),
    [cart.items]
  );

  return { ...cart, isInCart };
}

