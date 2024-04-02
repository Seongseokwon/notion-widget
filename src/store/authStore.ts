import { User } from "@prisma/client";
import { create } from "zustand";

interface State {
  user: WithoutPassUser | null;
}

type WithoutPassUser = Omit<User, "hashedPassword">;

interface Actions {
  setUser: (user: WithoutPassUser) => void;
  initUser: () => void;
}

export const useAuthStore = create<State & Actions>((set) => ({
  user: null,
  setUser: (user: WithoutPassUser) => set(() => ({ user })),
  initUser: () => set(() => ({ user: null })),
}));
