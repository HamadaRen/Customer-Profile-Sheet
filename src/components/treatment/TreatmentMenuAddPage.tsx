import React, { useState } from 'react';
import styled from 'styled-components';

const TreatmentAddPage = () => {
  const [salon, setSalon] = useState<'hairSalon' | 'estheticSalon'>('estheticSalon');
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
            style={{ width: 43, height: 28}}
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
          <input 
          type='text'
          style={{width: 700, height: 30}}
          />
          </label>
          </MenuInputForm>
      <Price>
        <label>
        値段：
        <input
        type='text'
        style={{width: 300, height: 30}}
        />
        </label>
        </Price>
      <Time>
      <label>
        回数券：
        <input
        type="number"
        id="publicationPeriod1"
        name="period"
        style={{ width: 200, height: 40}}
        min={1}
        max={100}
        />
        </label>
        </Time>
      <AddButton>ボタン</AddButton>
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
const AddButton = styled.div`
  cursor: pointer;
  background: #007bbb;
  color: white;
  display: inline-block;
  padding: 1rem 5rem 0.5rem 5rem;
  border-radius: 3px;
  border: 0px;
  position: relative;
  margin-top: 1%;
  height: 35px;
  box-shadow: 1px 1.6px 1px #000;
  font-weight: bold;
  &:hover {
    transform: translateY(1px);
    box-shadow: none;
  }
`;

export default TreatmentAddPage;
