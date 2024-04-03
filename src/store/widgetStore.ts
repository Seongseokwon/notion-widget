import { Widget } from "@prisma/client";
import { create } from "zustand";

interface State {
  widget: Widget | null;
}

interface Actions {
  selectWidget: (widget: Widget) => void;
  editWidget: (payload: Record<string, any>) => void;
}

export const useWidgetStore = create<State & Actions>((set) => ({
  widget: null,
  selectWidget: (widget: Widget) => set(() => ({ widget })),
  editWidget: (payload: Record<string, any>) =>
    set((state) => ({ ...state, ...payload })),
}));
