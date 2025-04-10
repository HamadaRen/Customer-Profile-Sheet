import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type TreatmentDetailsType = {
  salonName: string;
  name: string;
  price: number;
};

const TreatmentAddPage = () => {
  // const [salon, setSalon] = useState<'hairSalon' | 'estheticSalon'>('estheticSalon');
  const [treatmentDetails, setTreatmentDetails] = useState<TreatmentDetailsType>({
    salonName: 'estheticSalon',
    name: '',
    price: NaN,
  });

  console.log('登録した施術', treatmentDetails);
  const name = treatmentDetails.name;
  const price = treatmentDetails.price;

  const handleClick = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (treatmentDetails.salonName === '' || treatmentDetails.name === '' || treatmentDetails.price === 0) {
      return alert('入力されていない項目があります');
    }
    if (treatmentDetails.salonName === 'estheticSalon') {
      await axios.post('http://localhost:3010/treatment/esthetic/add', { name: name, price: price })
      .then(() => window.location.replace(`http://localhost:3000/treatmentMenu`));
    } else if (treatmentDetails.salonName === 'hairSalon') {
      await axios.post('http://localhost:3010/treatment/hair/add', { name: name, price: price })
      .then(() => window.location.replace(`http://localhost:3000/treatmentMenu`));
    }


    setTreatmentDetails({
      salonName: 'estheticSalon',
      name: '',
      price: NaN,
    });
  };

  return (
    <Container>
      <SalonTabs>
        <h2>施術追加</h2>
      </SalonTabs>
      <MenuInputForm>
        <label>
          サロンカテゴリ:　
          <label htmlFor="categoryChoice2">
          <input
            type="radio"
            id="categoryChoice2"
            name="category"
            value={'estheticSalon'}
            style={{ width: 43, height: 28 }}
            onChange={(e) => setTreatmentDetails((prev) => ({ ...prev, salonName: 'estheticSalon' }))}
            defaultChecked
          />
            エステサロン</label>
          <label htmlFor="categoryChoice1">
          <input
            type="radio"
            id="categoryChoice1"
            name="category"
            value={'hairSalon'}
            style={{ width: 43, height: 28 }}
            onChange={(e) => setTreatmentDetails((prev) => ({ ...prev, salonName: 'hairSalon' }))}
          />
            ヘアサロン</label>
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
            type="text"
            style={{ width: 700, height: 30 }}
            placeholder="◯◯コース"
            onChange={(e) => setTreatmentDetails((prev) => ({ ...prev, name: e.target.value }))}
            value={treatmentDetails.name}
          />
        </label>
      </MenuInputForm>
      <Price>
        <label>
          値段：
          <input
            type="number"
            style={{ width: 300, height: 30 }}
            placeholder='0'
            onChange={(e) => setTreatmentDetails((prev) => ({ ...prev, price: e.target.valueAsNumber }))}
            value={treatmentDetails.price}
          />
        </label>
      </Price>
      <Time>
        {/* <label>
        回数券：
        <input
        type="number"
        id="publicationPeriod1"
        name="period"
        style={{ width: 200, height: 40}}
        min={1}
        max={100}
        />
        </label> */}
      </Time>
      <div>
        <AddButton onClick={handleClick}>
          この内容で追加する
        </AddButton>
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
const AddButton = styled.div`
  cursor: pointer;
  background: #007bbb;
  color: white;
  display: inline-block;
  padding: 1rem 3rem 0.5rem 3rem;
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
