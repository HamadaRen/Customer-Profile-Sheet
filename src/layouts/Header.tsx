import { useAtom, useSetAtom } from "jotai";
import { SHeader } from "../styles/application";
import {
  sideBarAnimationTypeAtom,
  visibleSideBarAtom,
} from "../state/application";
import { useState } from "react";

const Header = () => {
  const [visibleSideBar, setVisibleSideBar] = useAtom(visibleSideBarAtom);
  const setSideBarAnimationType = useSetAtom(sideBarAnimationTypeAtom);
  const [isPlayingAnimation, setIsPlayingAnimation] = useState(false);

  const handleClick = () => {
    if (isPlayingAnimation) return;
    setIsPlayingAnimation(true);
    setSideBarAnimationType((prev) => {
      return prev === "open" ? "close" : "open";
    });
    setTimeout(() => {
      setIsPlayingAnimation(false);
    }, 300);
    if (visibleSideBar) {
      setTimeout(() => {
        setVisibleSideBar(false);
      }, 300);
    } else {
      setVisibleSideBar(true);
    }
  };

  return <SHeader onClick={handleClick}>顧客管理システム（仮）</SHeader>;
};

export default Header;
