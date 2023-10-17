import { create } from "zustand";
import { User } from "../types/graphql-request";

type IApplicationState = {
  user: User | null;
  setUser: (user: User) => void;
  logoutUser: () => void;
};

const useStore = create<IApplicationState>((set) => ({
  user: null,
  setUser: (user: User) => set({ user }),
  logoutUser: () => set({ user: null }),
}));

export { useStore };
