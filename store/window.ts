import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "../src/constants/";

interface WindowStore {
  windows: typeof WINDOW_CONFIG;
  nextZIndex: number;
  minimized: string[];
  minimizedWindow: (windowKey: string) => void;
  maximizeWindow: (windowKey: string) => void;
  openWindow: (windowKey: string, data: any) => void;
  closeWindow: (windowKey: string) => void;
  focusWindow: (windowKey: string) => void;
}

const useWindowStore = create<WindowStore>()(
  immer((set) => ({
    windows: WINDOW_CONFIG,
    minimized: [],
    nextZIndex: INITIAL_Z_INDEX + 1,
    openWindow: (windowKey, data: any = null) =>
      set((state) => {
        const win = state.windows[windowKey as keyof typeof WINDOW_CONFIG];
        win.isOpen = true;
        win.zIndex = state.nextZIndex;
        win.data = data ?? win.data;

        state.minimized = state.minimized.filter((item) => item !== windowKey);
        state.nextZIndex++;
      }),
    closeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey as keyof typeof WINDOW_CONFIG];
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
        state.minimized = state.minimized.filter((item) => item !== windowKey);
      }),
    minimizedWindow: (windowKey) => {
      set((state) => {
        const alreadyExist = state.minimized.find((item) => item === windowKey);
        if (!alreadyExist) {
          state.minimized.push(windowKey);
        }
        const win = state.windows[windowKey as keyof typeof WINDOW_CONFIG];
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
      });
    },
    focusWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey as keyof typeof WINDOW_CONFIG];
        win.zIndex = state.nextZIndex++;
      }),
    maximizeWindow: (windowKey) =>
      set((state) => {
        const isMaximized =
          state.windows[windowKey as keyof typeof WINDOW_CONFIG].isMaximized;
        if (isMaximized) {
          state.windows[windowKey as keyof typeof WINDOW_CONFIG].isMaximized =
            false;
        } else {
          state.windows[windowKey as keyof typeof WINDOW_CONFIG].isMaximized =
            true;
        }
      }),
  })),
);

export default useWindowStore;
