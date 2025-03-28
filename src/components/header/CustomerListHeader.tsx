import styled from "styled-components";


const CustomerListHeader = () => {
  return (
    <>
      <SHeader>名前</SHeader>
      <SHeader>カナ</SHeader>
      <SHeader>性別</SHeader>
      <SHeader>編集　/　削除</SHeader>
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