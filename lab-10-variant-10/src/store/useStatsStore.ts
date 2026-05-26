import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Record = {
  exerciseName: string;
  maxWeight: number; // kg
  date: string;
};

type StatsState = {
  records: Record[];
  setRecord: (record: Record) => void;
  removeRecord: (exerciseName: string) => void;
  clearRecords: () => void;
  filterByMinWeight: (minWeight: number) => Record[];
};

const useStatsStore = create<StatsState>()(
  persist(
    (set, get) => ({
      records: [],
      setRecord: (record) =>
        set((state) => {
          const existing = state.records.find(
            (r) => r.exerciseName === record.exerciseName,
          );
          if (existing) {
            return {
              records: state.records.map((r) =>
                r.exerciseName === record.exerciseName ? record : r,
              ),
            };
          }
          return { records: [...state.records, record] };
        }),
      removeRecord: (exerciseName) =>
        set((state) => ({
          records: state.records.filter((r) => r.exerciseName !== exerciseName),
        })),
      clearRecords: () => set({ records: [] }),
      filterByMinWeight: (minWeight) =>
        get().records.filter((r) => r.maxWeight >= minWeight),
    }),
    { name: 'stats-storage' },
  ),
);

export default useStatsStore;
