import { useAtomValue } from 'jotai';
import { Link, useLocation } from 'react-router-dom';
import { sideBarAnimationTypeAtom } from '../state/application';
import { SidebarHeader, StyledRow, StyledRowManagement, StyledSideBar } from '../styles/sideBar';

export const SideBar = () => {
  const location = useLocation();
  //アトムの値を読み取らずに更新する
  //sideBarAnimationTypeAtomのopenとcloseの変化にかかわらずアニメーション処理を走らせる
  const sideBarAnimationType = useAtomValue(sideBarAnimationTypeAtom);

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
