import { useAtom, useSetAtom } from 'jotai';
import { SHeader, UserData } from '../styles/application';
import { sideBarAnimationTypeAtom, visibleSideBarAtom } from '../state/application';
import { useState } from 'react';
import styled from 'styled-components';

const Header = () => {
  const [visibleSideBar, setVisibleSideBar] = useAtom(visibleSideBarAtom);
  const setSideBarAnimationType = useSetAtom(sideBarAnimationTypeAtom);
  //アニメーション作動中のstate
  const [isPlayingAnimation, setIsPlayingAnimation] = useState(false);

  //handleClick関数が呼び出されたとき（headerが押されたとき）
  const handleClick = () => {
    //trueはサイドバーがあいている状態
    //isPlayingAnimationがtrueなら処理終了(アニメーション中は処理を走らせない)
    if (isPlayingAnimation) return;
    //falseならtrueでsetにして次の処理を行う
    setIsPlayingAnimation(true);
    //sideBarAnimationTypeAtomがの中身(prev)がopenだった時falseをsetする
    //falseだった場合trueをsetして処理終了
    //setIsPlayingAnimationがtrueの時にopenとcloseが切り替わる
    //isPlayingAnimationの要素がopenの時===visibleSideBarがtrue
    setSideBarAnimationType((prev) => {
      return prev === 'open' ? 'close' : 'open';
    });
    setTimeout(() => {
      //サイドバーが開くアニメーションが0.3秒だからアニメーション中は処理を走らせない
      //setIsPlayingAnimationを0.3秒後にfalseにする
      setIsPlayingAnimation(false);
    }, 300);
    //もしvisibleSideBarがtrueなら
    if (visibleSideBar) {
      setTimeout(() => {
        //visibleSideBarを0.3秒後にfalseにする
        setVisibleSideBar(false);
      }, 300);
    } else {
      //それ以外ならvisibleSideBarをtrueにする
      setVisibleSideBar(true);
    }
  };

  //ヘッダーをクリックしたときにhandleClick関数を呼び出す
  return (
    <SHeader>
      <img src="/svg/icon_hamburger.svg" alt="" style={{ width: '2.5rem', height: '2.5rem' }} onClick={handleClick} />
      <p>for too 顧客管理システム</p>
      <UserData>
        <Department>エステ事業部</Department>
        <img src="/svg/icon_human_beige.svg" alt="" style={{ width: '1.125rem', height: '1.125rem' }} />
        <Administrator>濵田　錬</Administrator>
      </UserData>
    </SHeader>
  );
};

const Department = styled.p`
  color: var(--main-, #DCCEC1);
text-align: right;
font-family: "Noto Sans JP";
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: 1.8px;
`
const Administrator = styled.p`
color: var(--main-, #DCCEC1);
font-family: "Noto Sans JP";
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: 2.1px;
`


export default Header;
