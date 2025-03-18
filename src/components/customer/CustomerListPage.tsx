import styled from 'styled-components';

type UserDetailsType = {
  lastName: string;
  firstName: string;
  lastNameKana: string;
  firstNameKana: string;
  birthday: string;
  gender: string;
  telephone: string;
  email: string;
  address: string;
};

type CustomerListPage = {
  userDataArray: UserDetailsType[];
};

const CustomerListPage = ({ userDataArray }: CustomerListPage) => {

  console.log('Listの方で受け取ったuserDataArray', userDataArray)

  return (
    <GridContainer>
      <div>姓</div>
      <div>名</div>
      <div>セイ</div>
      <div>メイ</div>
      <div>次回予約日</div>
    </GridContainer>
  );
};

const GridContainer = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  background: #efefef;
  display: grid;
  grid-template-columns: 0.5fr 0.5fr 0.5fr 0.5fr 4fr;
  grid-template-rows: 1fr;
  border: solid #000;
`;

export default CustomerListPage;
