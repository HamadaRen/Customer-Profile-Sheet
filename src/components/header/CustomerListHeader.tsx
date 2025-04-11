import styled from "styled-components";


const CustomerListHeader = () => {
  return (
    <>
      <SHeader>顧客No.</SHeader>
      <SHeader>顧客名</SHeader>
      <SHeader>連絡手段</SHeader>
      <SHeader>チケット情報</SHeader>
      <SHeader>来店数</SHeader>
      <SHeader>初回来店</SHeader>
      <SHeader>最終来店</SHeader>
      <SHeader>利用期間</SHeader>
      <SHeader>担当者名</SHeader>
      <SHeader>共有事項</SHeader>
    </>
  );
};

export default CustomerListHeader;

const SHeader = styled.div`
  height: 2rem;
  border: #000 1px solid;
  background-color: #052B52;
  color: #fff;
`;