import styled from 'styled-components';
import {
  Contact,
  CustomerName,
  CustomerNumber,
  FirstVisit,
  LastVisit,
  NumberOfVisitors,
  PersonInCharged,
  SharedInformation,
  SHeaderGradient,
  TicketInformation,
  UsedPeriod,
} from '../../styles/application';

const CustomerListHeader = () => {
  return (
    <>
      <SHeaderGradient>
        <GridHeader>
          <CustomerNumber>顧客No.</CustomerNumber>
          <CustomerName>顧客名</CustomerName>
          <Contact>連絡手段</Contact>
          <TicketInformation>チケット情報</TicketInformation>
          <NumberOfVisitors>来店数</NumberOfVisitors>
          <FirstVisit>初回来店</FirstVisit>
          <LastVisit>最終来店</LastVisit>
          <UsedPeriod>利用期間</UsedPeriod>
          <PersonInCharged>担当者名</PersonInCharged>
          <SharedInformation>共有事項</SharedInformation>
        </GridHeader>
      </SHeaderGradient>
    </>
  );
};

export default CustomerListHeader;

// const SHeader = styled.div`
//   display: flex;
//   padding: 4px 0px;
//   justify-content: center;
//   align-items: center;
//   align-self: stretch;
//   border-bottom: 1px solid var(--text-10, #d6d6d6);
//   background: #443e33;
//   color: var(--main-, #f3e6da);
//   font-family: 'Noto Sans JP';
//   font-size: 14px;
//   font-style: normal;
//   font-weight: 900;
//   line-height: normal;
// `;

const GridHeader = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 2fr 2fr 3fr 3.2fr 1.5fr 2fr 2fr 2fr 2fr 4.9fr;
  /* margin-right: 50rem; */
`;
