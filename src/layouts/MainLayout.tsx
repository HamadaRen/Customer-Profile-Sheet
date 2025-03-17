import { useRef } from "react";
import { SideBar } from "./Sidebar";
import { useAtomValue } from "jotai";
import {
  sideBarAnimationTypeAtom,
  visibleSideBarAtom,
} from "../state/application";
import { MainContainer, SBody, RightContainer } from "../styles/application";
import Header from "./Header";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const toaster = useRef<HTMLDivElement>(null);
  const visibleSideBar = useAtomValue(visibleSideBarAtom);
  const sideBarAnimationType = useAtomValue(sideBarAnimationTypeAtom);

  return (
    <MainContainer>
      <Header />
      <SBody>
        {visibleSideBar && <SideBar />}
        <RightContainer $visibleSidebar={sideBarAnimationType === "open"}>
          {children}
        </RightContainer>
      </SBody>
    </MainContainer>
  );
};
