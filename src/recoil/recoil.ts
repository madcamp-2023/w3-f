import { atom } from "recoil";

export const pageState = atom({
  key: "pageState",
  default: 0,
});

export const userState = atom<User | null>({
  key: "userState",
  default: null,
});
