import { useAtomValue } from 'jotai';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../styles/color';
import { sideBarAnimationTypeAtom } from '../state/application';
import CustomerEntryPage from '../components/customer/CustomerEntryPage';
import { useState } from 'react';
import { homedir } from 'os';
import CustomerListPage from '../components/customer/CustomerListPage';
import { SidebarItemsType } from '../types/application';

export const SideBar = () => {
  const [sidebarItems, setSidebarItems] = useState<SidebarItemsType>('customer');
  const location = useLocation();
  //アトムの値を読み取らずに更新する
  //sideBarAnimationTypeAtomのopenとcloseの変化にかかわらずアニメーション処理を走らせる
  const sideBarAnimationType = useAtomValue(sideBarAnimationTypeAtom);
  // const [screenChange, setScreenChange] = useState()

  // alert(location.pathname)

  return (
    <StyledSideBar $animation={sideBarAnimationType}>
      <StyledRow $selected={location.pathname === '/'} as={Link} to="/">
        顧客リスト
      </StyledRow>
      <StyledRow $selected={location.pathname === '/customer/entry'} as={Link} to="/customer/entry">
        顧客マスタ
      </StyledRow>
      <StyledRow
      // $selected={location.pathname === '/customer'}
      // as={Link}
      // to="/app/base-location"
      >
        施術マスタ
      </StyledRow>
      <StyledRow
      // $selected={location.pathname === "/app/facility"}
      // as={Link}
      // to="/app/facility"
      >
        予約マスタ
      </StyledRow>
    </StyledSideBar>
  );
};

//openとcloseをkeyにしてそれぞれの形を作成
const StyledSideBar = styled.div<{ $animation: 'open' | 'close' }>`
  @keyframes open {
    0% {
      width: 0;
    }
    100% {
      width: 13rem;
    }
  }

  @keyframes close {
    0% {
      width: 13rem;
    }
    100% {
      width: 0;
    }
  }
  width: 0;
  animation: ${({ $animation }) => ($animation === 'open' ? 'open' : 'close')} 0.3s forwards;
  white-space: nowrap;
  overflow: hidden;
  background-color: ${COLORS.DEEP_BLUE};
  color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StyledRow = styled.div<{ $selected?: boolean }>`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  padding: 0.8rem 1rem;
  cursor: pointer;
  border-bottom: 1px solid #fafafa;
  background-color: ${({ $selected }) => ($selected ? '#526A8E' : 'transparent')};
  &:hover {
    background-color: #526a8e;
  }
`;
