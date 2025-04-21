import {
  Contact,
  CustomerName,
  CustomerNumber,
  FirstVisit,
  GridHeader,
  LastVisit,
  NumberOfVisitors,
  PersonInCharged,
  SharedInformation,
  SHeaderGradient,
  TicketInformation,
  UsedPeriod,
} from '../../styles/customerListHeader';

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
