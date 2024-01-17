import { atom, selector } from "recoil";

export const pageState = atom({
  key: "pageState",
  default: 1,
});

export const userState = atom<User | null>({
  key: "userState",
  default: null,
});
