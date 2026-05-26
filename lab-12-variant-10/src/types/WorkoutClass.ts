export interface WorkoutClass {
  id: number;
  name: string;
  trainer: string;
  trainerId: number;
  category: string;
  duration: number; // minutes
  maxParticipants: number;
  currentParticipants: number;
  schedule: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  image?: string;
}

