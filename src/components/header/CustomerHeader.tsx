import styled from "styled-components";


const CustomerListHeader = () => {
  return (
    <>
      <SHeader>名前</SHeader>
      <SHeader>カナ</SHeader>
      <SHeader>次回予約日</SHeader>
    </>
  );
};

export default CustomerListHeader;

const SHeader = styled.div`
  height: 2rem;
  border: 1px solid;
`;