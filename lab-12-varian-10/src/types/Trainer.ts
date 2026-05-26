export interface Trainer {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialization: string[];
  experience: number;
  rating: number;
  bio: string;
  image?: string;
  schedule: Schedule[];
}

export interface Schedule {
  day: string;
  timeSlots: string[];
}

