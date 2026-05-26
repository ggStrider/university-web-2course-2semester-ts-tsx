import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Exercise = {
  id: number;
  name: string;
  sets: number;
  reps: number;
  weight: number; // kg
};

type WorkoutState = {
  exercises: Exercise[];
  addExercise: (exercise: Exercise) => void;
  removeExercise: (id: number) => void;
  clearWorkout: () => void;
  filterByMinWeight: (minWeight: number) => Exercise[];
};

const useWorkoutStore = create<WorkoutState>()(
  persist(
    (set, get) => ({
      exercises: [],
      addExercise: (exercise) =>
        set((state) => {
          const exists = state.exercises.find((e) => e.id === exercise.id);
          if (exists) return state;
          return { exercises: [...state.exercises, exercise] };
        }),
      removeExercise: (id) =>
        set((state) => ({
          exercises: state.exercises.filter((e) => e.id !== id),
        })),
      clearWorkout: () => set({ exercises: [] }),
      filterByMinWeight: (minWeight) =>
        get().exercises.filter((e) => e.weight >= minWeight),
    }),
    { name: 'workout-storage' },
  ),
);

export default useWorkoutStore;
