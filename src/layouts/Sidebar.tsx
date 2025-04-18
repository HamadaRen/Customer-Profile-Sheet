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
import { SidebarHeader } from '../styles/application';

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
      <SidebarHeader>基本機能</SidebarHeader>
      <StyledRow $selected={location.pathname === '/'} as={Link} to="/" style={{ marginBottom: '3.75rem' }}>
        <img src="/svg/icon_people.svg" alt="" style={{ width: '1.25rem', height: '1.25rem' }} />
        <p>顧客管理</p>
      </StyledRow>
      {/* <StyledRow $selected={location.pathname === '/treatmentMenu'} as={Link} to="/treatmentMenu">
        施術マスタ
      </StyledRow> */}
      {/* <StyledRow $selected={location.pathname === '/sales'} as={Link} to="/sales" style={{ marginBottom: '3.75rem' }}>
        売上マスタ
      </StyledRow> */}
      <SidebarHeader>管理者機能</SidebarHeader>
      <StyledRowManagement>
        <img src="/svg/icon_money.svg" alt="" style={{ width: '1.25rem', height: '1.25rem' }} />
        <p>売り上げ管理</p>
      </StyledRowManagement>
      <StyledRowManagement>
        <img src="/svg/icon_graph.svg" alt="" style={{ width: '1.25rem', height: '1.25rem' }} />
        <p>分析</p>
      </StyledRowManagement>
      <StyledRowManagement>
        <img src="/svg/icon_file.svg" alt="" style={{ width: '1.25rem', height: '1.25rem' }} />
        <p>メニュー料金マスタ</p>
      </StyledRowManagement>
      <StyledRowManagement>
        <img src="/svg/icon_ticket.svg" alt="" style={{ width: '1.25rem', height: '1.25rem' }} />
        <p>チケット管理マスタ</p>
      </StyledRowManagement>
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
  animation: ${({ $animation }) => ($animation === 'open' ? 'open' : 'close')} 0.3s forwards;
  white-space: nowrap;
  overflow: hidden;
  background-color: ${COLORS.MAIN_SIDEBAR_BROWN};
  color: white;
  display: flex;
  width: 17.75rem;
  height: 100%;
  padding-top: 0.9375rem;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
`;

const StyledRow = styled.div<{ $selected?: boolean }>`
  display: flex;
  height: 1.5rem;
  padding: 0.5rem 0.625rem 0.5rem 1.875rem;
  align-items: center;
  gap: 0.5rem;
  align-self: stretch;
  text-decoration: dashed;
  font-size: 1.125rem;
  font-weight: 900;
  background-color: ${({ $selected }) => ($selected ? '#393b2e' : 'transparent')};
  color: ${({ $selected }) => ($selected ? '#c8d5ad' : '#DCCEC1')};
  border-left: ${({ $selected }) => ($selected ? '0.375rem solid #c8d5ad' : '0.375rem solid #393b2e')};

  &:hover {
    background-color: #393b2e;
  }
`;

const StyledRowManagement = styled.div<{ $selected?: boolean }>`
  display: flex;
  height: 2.4rem;
  padding: 0 0.625rem 0 1.875rem;
  align-items: center;
  gap: 0.5rem;
  align-self: stretch;
  color: #dccec1;
  font-size: 0.9rem;
  font-weight: 500;
  line-height: normal;
  background-color: ${({ $selected }) => ($selected ? '#454137' : 'transparent')};
  
  &:hover {
    background-color: #393b2e;
  }
`;
