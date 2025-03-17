import { atom } from "jotai";

export const sideBarAnimationTypeAtom = atom<"open" | "close">("open");

export const visibleSideBarAtom = atom<boolean>(true);
