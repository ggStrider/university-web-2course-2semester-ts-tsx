import type { Subscription, Order } from '../types/Subscription';
import type { Trainer } from '../types/Trainer';
import type { WorkoutClass } from '../types/WorkoutClass';
import type { Member } from '../types/Member';

const BASE_URL = 'https://dummyjson.com';

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

// --- Mock data ---
const mockSubscriptions: Subscription[] = [
  {
    id: 1,
    name: 'Basic',
    type: 'basic',
    price: 499,
    duration: 1,
    features: ['Gym access', 'Locker room', 'Free WiFi'],
    maxVisitsPerMonth: 12,
    includesTrainer: false,
    includesSpa: false,
    description: 'Perfect for occasional gym-goers who want flexibility.',
  },
  {
    id: 2,
    name: 'Standard',
    type: 'standard',
    price: 899,
    duration: 1,
    features: ['Unlimited gym access', 'Group classes', 'Locker room', 'Free WiFi', 'Nutrition guide'],
    maxVisitsPerMonth: null,
    includesTrainer: false,
    includesSpa: false,
    description: 'Our most popular plan. Full gym access + group classes.',
  },
  {
    id: 3,
    name: 'Premium',
    type: 'premium',
    price: 1499,
    duration: 1,
    features: [
      'Unlimited gym access',
      'All group classes',
      'Personal trainer (4 sessions/mo)',
      'Spa access',
      'Nutrition consultation',
      'Priority booking',
    ],
    maxVisitsPerMonth: null,
    includesTrainer: true,
    includesSpa: true,
    description: 'The ultimate fitness experience with personal training and spa.',
  },
];

const mockTrainers: Trainer[] = [
  {
    id: 1,
    firstName: 'Oleksandr',
    lastName: 'Kovalenko',
    email: 'o.kovalenko@fitclub.ua',
    phone: '+380501234567',
    specialization: ['Strength Training', 'Powerlifting'],
    experience: 7,
    rating: 4.8,
    bio: 'Former national powerlifting champion with 7 years of coaching experience.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    schedule: [
      { day: 'Monday', timeSlots: ['09:00', '11:00', '15:00'] },
      { day: 'Wednesday', timeSlots: ['09:00', '11:00', '17:00'] },
      { day: 'Friday', timeSlots: ['10:00', '14:00'] },
    ],
  },
  {
    id: 2,
    firstName: 'Mariia',
    lastName: 'Bondarenko',
    email: 'm.bondarenko@fitclub.ua',
    phone: '+380672345678',
    specialization: ['Yoga', 'Pilates', 'Stretching'],
    experience: 5,
    rating: 4.9,
    bio: 'Certified yoga instructor and pilates coach, focused on mindful movement.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    schedule: [
      { day: 'Tuesday', timeSlots: ['08:00', '10:00', '18:00'] },
      { day: 'Thursday', timeSlots: ['08:00', '10:00', '18:00'] },
      { day: 'Saturday', timeSlots: ['09:00', '11:00'] },
    ],
  },
  {
    id: 3,
    firstName: 'Dmytro',
    lastName: 'Shevchenko',
    email: 'd.shevchenko@fitclub.ua',
    phone: '+380933456789',
    specialization: ['CrossFit', 'HIIT', 'Functional Training'],
    experience: 4,
    rating: 4.7,
    bio: 'CrossFit Level 2 trainer. High-intensity workouts that deliver real results.',
    image: 'https://randomuser.me/api/portraits/men/56.jpg',
    schedule: [
      { day: 'Monday', timeSlots: ['07:00', '12:00', '19:00'] },
      { day: 'Wednesday', timeSlots: ['07:00', '12:00', '19:00'] },
      { day: 'Friday', timeSlots: ['07:00', '12:00'] },
    ],
  },
  {
    id: 4,
    firstName: 'Oksana',
    lastName: 'Lysenko',
    email: 'o.lysenko@fitclub.ua',
    phone: '+380504567890',
    specialization: ['Cardio', 'Zumba', 'Dance Fitness'],
    experience: 6,
    rating: 4.6,
    bio: 'Dance fitness specialist bringing energy and fun to every session.',
    image: 'https://randomuser.me/api/portraits/women/28.jpg',
    schedule: [
      { day: 'Tuesday', timeSlots: ['09:00', '11:00', '17:00'] },
      { day: 'Thursday', timeSlots: ['09:00', '11:00', '17:00'] },
      { day: 'Sunday', timeSlots: ['10:00', '12:00'] },
    ],
  },
];

const mockClasses: WorkoutClass[] = [
  {
    id: 1,
    name: 'Morning Yoga Flow',
    trainer: 'Mariia Bondarenko',
    trainerId: 2,
    category: 'Yoga',
    duration: 60,
    maxParticipants: 15,
    currentParticipants: 11,
    schedule: 'Tue & Thu 08:00',
    level: 'beginner',
    description: 'Start your day with energizing yoga flow. All levels welcome.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=250&fit=crop',
  },
  {
    id: 2,
    name: 'CrossFit WOD',
    trainer: 'Dmytro Shevchenko',
    trainerId: 3,
    category: 'CrossFit',
    duration: 45,
    maxParticipants: 12,
    currentParticipants: 10,
    schedule: 'Mon, Wed & Fri 07:00',
    level: 'advanced',
    description: 'Workout of the day. Functional movements at high intensity.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=250&fit=crop',
  },
  {
    id: 3,
    name: 'Zumba Party',
    trainer: 'Oksana Lysenko',
    trainerId: 4,
    category: 'Dance',
    duration: 50,
    maxParticipants: 20,
    currentParticipants: 14,
    schedule: 'Tue & Thu 17:00',
    level: 'beginner',
    description: 'Dance your way to fitness with Latin rhythms and fun choreography.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=250&fit=crop',
  },
  {
    id: 4,
    name: 'Powerlifting Basics',
    trainer: 'Oleksandr Kovalenko',
    trainerId: 1,
    category: 'Strength',
    duration: 75,
    maxParticipants: 8,
    currentParticipants: 6,
    schedule: 'Mon, Wed & Fri 09:00',
    level: 'intermediate',
    description: 'Master the squat, bench press and deadlift with proper technique.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=250&fit=crop',
  },
  {
    id: 5,
    name: 'Pilates Core',
    trainer: 'Mariia Bondarenko',
    trainerId: 2,
    category: 'Pilates',
    duration: 55,
    maxParticipants: 12,
    currentParticipants: 8,
    schedule: 'Sat 09:00',
    level: 'intermediate',
    description: 'Deep core work using classic pilates principles and apparatus.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop',
  },
  {
    id: 6,
    name: 'HIIT Blast',
    trainer: 'Dmytro Shevchenko',
    trainerId: 3,
    category: 'HIIT',
    duration: 30,
    maxParticipants: 15,
    currentParticipants: 13,
    schedule: 'Mon, Wed & Fri 19:00',
    level: 'advanced',
    description: '30-minute maximum effort. High intensity interval training.',
    image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=400&h=250&fit=crop',
  },
];

const mockMembers: Member[] = [
  {
    id: 1,
    firstName: 'Yaroslav',
    lastName: 'Oslam',
    email: 'yaroslav@email.com',
    phone: '+380501111111',
    age: 21,
    membershipType: 'premium',
    joinDate: '2025-01-15',
    status: 'active',
    trainerId: 1,
    image: 'https://randomuser.me/api/portraits/men/10.jpg',
  },
  {
    id: 2,
    firstName: 'Anna',
    lastName: 'Petrenko',
    email: 'anna.p@email.com',
    phone: '+380672222222',
    age: 28,
    membershipType: 'standard',
    joinDate: '2025-02-01',
    status: 'active',
    image: 'https://randomuser.me/api/portraits/women/12.jpg',
  },
  {
    id: 3,
    firstName: 'Ivan',
    lastName: 'Marchenko',
    email: 'ivan.m@email.com',
    phone: '+380933333333',
    age: 35,
    membershipType: 'basic',
    joinDate: '2024-11-20',
    status: 'inactive',
    image: 'https://randomuser.me/api/portraits/men/22.jpg',
  },
];

// --- API functions ---
export const api = {
  getSubscriptions: async (): Promise<Subscription[]> => {
    await delay(600);
    return mockSubscriptions;
  },

  getSubscriptionById: async (id: number): Promise<Subscription> => {
    await delay(400);
    const sub = mockSubscriptions.find((s) => s.id === id);
    if (!sub) throw new Error(`Subscription ${id} not found`);
    return sub;
  },

  getTrainers: async (): Promise<Trainer[]> => {
    await delay(700);
    return mockTrainers;
  },

  getTrainerById: async (id: number): Promise<Trainer> => {
    await delay(400);
    const trainer = mockTrainers.find((t) => t.id === id);
    if (!trainer) throw new Error(`Trainer ${id} not found`);
    return trainer;
  },

  getClasses: async (): Promise<WorkoutClass[]> => {
    await delay(600);
    return mockClasses;
  },

  getClassById: async (id: number): Promise<WorkoutClass> => {
    await delay(400);
    const cls = mockClasses.find((c) => c.id === id);
    if (!cls) throw new Error(`Class ${id} not found`);
    return cls;
  },

  getMembers: async (): Promise<Member[]> => {
    await delay(800);
    return mockMembers;
  },

  getMemberById: async (id: number): Promise<Member> => {
    await delay(400);
    const member = mockMembers.find((m) => m.id === id);
    if (!member) throw new Error(`Member ${id} not found`);
    return member;
  },

  // Uses DummyJSON users endpoint for extra data variety
  getAdditionalUsers: async () => {
    const response = await fetch(`${BASE_URL}/users?limit=5`);
    if (!response.ok) throw new Error('Failed to fetch users');
    return response.json();
  },

  placeOrder: async (order: Omit<Order, 'id' | 'createdAt' | 'status'>): Promise<Order> => {
    await delay(1200);
    return {
      ...order,
      id: `ORD-${Date.now()}`,
      createdAt: new Date().toISOString(),
      status: 'confirmed',
    };
  },
};

