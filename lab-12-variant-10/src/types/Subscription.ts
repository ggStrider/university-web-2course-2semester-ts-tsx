export interface Subscription {
  id: number;
  name: string;
  type: 'basic' | 'standard' | 'premium';
  price: number;
  duration: number; // in months
  features: string[];
  maxVisitsPerMonth: number | null;
  includesTrainer: boolean;
  includesSpa: boolean;
  description: string;
}

export interface CartItem {
  subscription: Subscription;
  quantity: number;
}

export interface Order {
  id?: string;
  items: CartItem[];
  customer: OrderCustomer;
  total: number;
  createdAt?: string;
  status?: 'pending' | 'confirmed';
}

export interface OrderCustomer {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  notes?: string;
}

