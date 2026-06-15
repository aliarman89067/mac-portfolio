import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { locations } from "../src/constants";

const DEFAULT_LOCATION = locations.work;

export type LocationType = (typeof locations)[keyof typeof locations];

interface LocationStore {
  activeLocation: LocationType | null;
  setActiveLocation: (location: LocationType | null) => void;
  resetActiveLocation: () => void;
}

const useLocationStore = create<LocationStore>()(
  immer((set) => ({
    activeLocation: DEFAULT_LOCATION,
    setActiveLocation: (location = null) =>
      set((state) => {
        state.activeLocation = location;
      }),
    resetActiveLocation: () =>
      set((state) => {
        state.activeLocation = DEFAULT_LOCATION;
      }),
  })),
);

export default useLocationStore;
