import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TreatmentMenuEditPage = () => {
  const [salon, setSalon] = useState<'hairSalon' | 'estheticSalon'>('estheticSalon');

  const handleRegistration = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // if (
    //   userDetails.name === '' ||
    //   userDetails.nameKana === '' ||
    //   userDetails.gender === '' ||
    //   userDetails.tel === '' ||
    //   userDetails.email === ''
    // ) {
    //   alert('入力していない項目があります');
    //   return;
    // }
  }

  const handleDelete = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // await axios.put(`http://localhost:3010/put/delete/${id}`, {id});
  };

  return (
    <Container>
      <SalonTabs>
        <h2>施術追加</h2>
      </SalonTabs>
      <MenuInputForm>
        <label>
          カテゴリ:
          <input
            type="radio"
            id="categoryChoice2"
            name="category"
            value={'estheticSalon'}
            style={{ width: 43, height: 28 }}
            defaultChecked
          />
          <label htmlFor="categoryChoice2">エステサロン</label>
          <input
            type="radio"
            id="categoryChoice1"
            name="category"
            value={'hairSalon'}
            style={{ width: 43, height: 28 }}
          />
          <label htmlFor="categoryChoice1">ヘアサロン</label>
        </label>
      </MenuInputForm>
      {/* <MenuInputForm>
        <label>
          カテゴリー：入れたジャンルをプルダウンで出す
          <input 
          type='text'
          style={{width: 300, height: 30}}
          />
          </label>
          </MenuInputForm> */}
      <MenuInputForm>
        <label>
          施術名：
          <input type="text" style={{ width: 700, height: 30 }} />
        </label>
      </MenuInputForm>
      <Price>
        <label>
          値段：
          <input type="text" style={{ width: 300, height: 30 }} />
        </label>
      </Price>
      <Time>
        <label>
          回数券：
          <input
            type="number"
            id="publicationPeriod1"
            name="period"
            style={{ width: 200, height: 40 }}
            min={1}
            max={100}
          />
        </label>
      </Time>
      <div>
        <div onClick={handleRegistration}>
          <RegistrationButton as={Link} to={'/treatmentMenu'}>
            内容を確定する
          </RegistrationButton>
        </div>
        <div onClick={handleDelete}>
          <DeleteButton as={Link} to={'/treatmentMenu'}>
            顧客情報を削除する
          </DeleteButton>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  background: #efefef;
`;
const SalonTabs = styled.div`
  text-align: center;
  width: 100%;
  position: relative;
`;
const MenuInputForm = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 1%;
  font-size: 150%;
  padding: 2%;
`;
const Price = styled.div`
  width: 90%;
  position: relative;
  margin-bottom: 1%;
  font-size: 150%;
  padding: 2%;
`;
const Time = styled.div`
  width: 90%;
  position: relative;
  margin-bottom: 1%;
  font-size: 150%;
  padding: 2%;
`;
const Remarks = styled.textarea`
  width: 90%;
  position: relative;
  margin-bottom: 1%;
  font-size: 150%;
  padding: 2%;
`;
const RegistrationButton = styled.div`
  cursor: pointer;
  background: #007bbb;
  color: #fff;
  border-radius: 3px;
  border: 0px;
  position: relative;
  top: 1rem;
  right: 7rem;
  display: inline-block;
  padding: 0.8rem 2rem;
  font-weight: bold;
  box-shadow: 1px 1.6px 1px #000;
  margin-right: 2%;
  &:hover {
    transform: translateY(1px);
    box-shadow: none;
  }
`;
const DeleteButton = styled.div`
  cursor: pointer;
  background: #ea553a;
  color: #fff;
  border-radius: 3px;
  border: 0px;
  position: relative;
  bottom: 2.1rem;
  left: 9rem;
  display: inline-block;
  padding: 0.8rem 1.5rem;
  font-weight: bold;
  box-shadow: 1px 1.6px 1px #000;
  &:hover {
    transform: translateY(1px);
    box-shadow: none;
  }
`;

export default TreatmentMenuEditPage;
