import { User } from "@/types/user-type";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserStore {
  user: User | null;
  setUser: (userData: User) => void;
  clearUser: () => void;
}

/**
 * 로컬 스토리지에 데이터를 저장합니다.
 * @author hwitae
 * @returns user: 로그인 된 유저의 정보입니다.
 * @returns setUser: 로그인 성공 후 가져온 유저 정보를 로컬 스토리지에 할당합니다.
 * @returns clearUser: 로컬 스토리지의 유저 데이터를 null로 만듭니다.
 */
const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
    }),
    {
      name: "user-storage",
    }
  )
);

export default useUserStore;
