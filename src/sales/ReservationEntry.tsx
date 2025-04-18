import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import WeekNumber from 'react-datepicker/dist/week_number';

type UserDetailsType = {
  id: string;
  name: string;
  nameKana: string;
  birthday: string;
  gender: string;
  tel: string;
  email: string;
  address: string;
  created_at: string;
  update_at: string;
  delete_at: string;
};

type ListItemAry = {
  id: string;
  category: string;
  name: string;
  delete_at: string;
  price: number;
};

type PiecesType = {
  id: string;
  quantity: number;
};

type SalesType = {
  customer_id: string;
  treatment_id: string;
  quantity_id: string;
  treatment_flag: string;
};

const ReservationEntry = () => {
  const [salonCategory, setSalonCategory] = useState<'estheticSalon' | 'hairSalon'>('estheticSalon');
  const [customerCandidateAry, setCustomerCandidateAry] = useState<UserDetailsType[]>([]);
  const [estheticCandidateAry, setEstheticCandidateAry] = useState<ListItemAry[]>([]);
  const [hairCandidateAry, setHairCandidateAry] = useState<ListItemAry[]>([]);
  const [piecesAry, setPiecesAry] = useState<PiecesType[]>([]);
  const [customerId, setCustomerId] = useState<string>('');
  const [customerName, setCustomerName] = useState<string>('');
  const [estheticId, setEstheticId] = useState<string>('');
  const [estheticName, setEstheticName] = useState<string>('');
  const [hairId, setHairId] = useState<string>('');
  const [hairName, setHairName] = useState<string>('');
  const [numberId, setNumberId] = useState<string>('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [showTreatmentDropdown, setShowTreatmentDropdown] = useState(false);
  const [customerFilteredOptions, setCustomerFilteredOptions] = useState(customerCandidateAry);
  const [estheticFilteredOptions, setEstheticFilteredOptions] = useState(estheticCandidateAry);
  const [hairFilteredOptions, setHairFilteredOptions] = useState(hairCandidateAry);
  const [treatmentFlg, setTreatmentFlg] = useState<string>('1')

  const [salesDetails, setSalesDetails] = useState<SalesType>({
    customer_id: '',
    treatment_id: '',
    quantity_id: '',
    treatment_flag: ''
  });

  const getCustomerData = async () => {
    const customerData = await axios.get('http://localhost:3010/customer');
    setCustomerCandidateAry(customerData.data);
    setCustomerFilteredOptions(customerData.data);

    const estheticData = await axios.get('http://localhost:3010/treatment/esthetic');
    setEstheticCandidateAry(estheticData.data);
    setEstheticFilteredOptions(estheticData.data);

    const hairData = await axios.get('http://localhost:3010/treatment/hair');
    setHairCandidateAry(hairData.data);
    setHairFilteredOptions(hairData.data);

    const piecesData = await axios.get('http://localhost:3010/pieces');
    setPiecesAry(piecesData.data);
  };

  const handleClick = () => {
    // .then(() => window.location.replace(`http://localhost:3000/sales`));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCustomerName(value);
    if (value.trim() === '') {
      setCustomerFilteredOptions(customerCandidateAry);
      setShowDropdown(true);
    } else {
      setCustomerFilteredOptions(
        customerCandidateAry.filter((customer) => customer.nameKana.toLowerCase().includes(value.toLowerCase()))
      );
      setShowDropdown(true);
    }
  };

  const handleEstheticChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEstheticName(value);
    if (value.trim() === '') {
      setEstheticFilteredOptions(estheticCandidateAry);
      setShowTreatmentDropdown(true);
    } else {
      setEstheticFilteredOptions(
        estheticCandidateAry.filter((esthetic) => esthetic.name.toLowerCase().includes(value.toLowerCase()))
      );
      setShowTreatmentDropdown(true);
    }
  };

  const handleHairChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setHairName(value);
    if (value.trim() === '') {
      setHairFilteredOptions(hairCandidateAry);
      setShowTreatmentDropdown(true);
    } else {
      setHairFilteredOptions(hairCandidateAry.filter((hair) => hair.name.toLowerCase().includes(value.toLowerCase())));
      setShowTreatmentDropdown(true);
    }
  };

  const handleSelect = (id: string, name: string) => {
    setCustomerId(id);
    setCustomerName(name);
    setShowDropdown(false);
  };

  const handleEstheticSelect = (id: string, name: string) => {
    setEstheticId(id);
    setHairId('');
    setEstheticName(name);
    setHairName('');
    setShowTreatmentDropdown(false);
  };

  const handleHairSelect = (id: string, name: string) => {
    setHairId(id);
    setEstheticId('');
    setHairName(name);
    setEstheticName('');
    setShowTreatmentDropdown(false);
  };

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value: number = event.target.valueAsNumber;
    const strValue = String(value)
    setNumberId(strValue);
  }

  const handleRegistration = async () => {

    await axios.post('http://localhost:3010/sales/add', {salesDetails})

    .then(() => window.location.replace(`http://localhost:3000/sales`));
  }

  useEffect(() => {
    getCustomerData();
  }, []);

  useEffect(() => {
    setSalesDetails((prev) => ({ ...prev, customer_id: customerId }))
    setSalesDetails((prev) => ({ ...prev, treatment_id: estheticId || hairId}))
    setSalesDetails((prev) => ({ ...prev, quantity_id: numberId}))
    setSalesDetails((prev) => ({ ...prev, treatment_flag: treatmentFlg}))
  },[customerId, estheticId, hairId, numberId, treatmentFlg])

  const params = useParams();
  const id = params.id;

  console.log('リクエストするデータ', salesDetails);

  return (
    <Container>
      <div style={{ position: 'relative', textAlign: 'center' }}>
        <h2>購入情報作成</h2>
      </div>
      <CustomerName>
        顧客名　：　
        <input
          style={{ width: 500, height: 60, marginRight: 80, color: 'black' }}
          placeholder="ヤマダ　タロウ"
          type="search"
          value={customerName}
          onChange={handleChange}
          onFocus={() => {
            setShowDropdown(true);
          }}
        />
        {showDropdown && customerFilteredOptions.length > 0 && (
          //  customerFilteredOptions と　customerCandidateAry
          <ul
            style={{
              position: 'absolute',
              width: '37%',
              left: '32%',
              border: '1px solid #000',
              backgroundColor: 'white',
              listStyle: 'none',
              margin: 0,
              padding: 0,
              maxHeight: '150px',
              overflowY: 'auto',
              zIndex: 1000,
            }}
          >
            {customerFilteredOptions.map((customer) => (
              <li
                key={customer.id}
                onClick={() => handleSelect(customer.id, customer.nameKana)}
                style={{
                  padding: '8px',
                  cursor: 'pointer',
                  border: '0.5px solid #000',
                  backgroundColor: customerId === customer.id ? '#a10606' : '#ccc',
                }}
              >
                {customer.nameKana}
              </li>
            ))}
          </ul>
        )}
      </CustomerName>

      <div style={{ marginTop: '4%', textAlign: 'center', paddingRight: '20%' }}>
        <label>
          <input
            type="radio"
            id="estheticTreatment"
            name="category"
            value={'estheticSalon'}
            onChange={() => setSalonCategory('estheticSalon')}
            onClick={() => setTreatmentFlg('1')}
            defaultChecked
          />
          エステサロン
        </label>
        <label>
          <input
            type="radio"
            id="hairTreatment"
            name="category"
            value={'hairSalon'}
            onChange={() => setSalonCategory('hairSalon')}
            onClick={() => setTreatmentFlg('2')}
          />
          ヘアサロン
        </label>
      </div>

      <TreatmentName>
        施術名　：　
        <input
          style={{ width: 500, height: 60, marginRight: 80 }}
          placeholder="◯◯コース"
          type="search"
          value={salonCategory === 'estheticSalon' ? estheticName : hairName}
          onChange={salonCategory === 'estheticSalon' ? handleEstheticChange : handleHairChange}
          onFocus={() => {
            setShowTreatmentDropdown(true);
          }}
        ></input>
        {salonCategory === 'estheticSalon'
          ? showTreatmentDropdown &&
            estheticFilteredOptions.length > 0 && (
              <ul
                style={{
                  position: 'absolute',
                  width: '37%',
                  left: '32%',
                  border: '1px solid #000',
                  backgroundColor: 'white',
                  listStyle: 'none',
                  margin: 0,
                  padding: 0,
                  maxHeight: '150px',
                  overflowY: 'auto',
                  zIndex: 1000,
                }}
              >
                {estheticFilteredOptions.map((esthetic) => (
                  <li
                    key={esthetic.id}
                    onClick={() => handleEstheticSelect(esthetic.id, esthetic.name)}
                    style={{
                      padding: '8px',
                      cursor: 'pointer',
                      border: '0.5px solid #000',
                      backgroundColor: estheticId === esthetic.id ? '#a10606' : '#ccc',
                    }}
                  >
                    {esthetic.name}
                  </li>
                ))}
              </ul>
            )
          : showTreatmentDropdown &&
            hairFilteredOptions.length > 0 && (
              <ul
                style={{
                  position: 'absolute',
                  width: '37%',
                  left: '32%',
                  border: '1px solid #000',
                  backgroundColor: 'white',
                  listStyle: 'none',
                  margin: 0,
                  padding: 0,
                  maxHeight: '150px',
                  overflowY: 'auto',
                  zIndex: 1000,
                }}
              >
                {hairFilteredOptions.map((hair) => (
                  <li
                    key={hair.id}
                    onClick={() => handleHairSelect(hair.id, hair.name)}
                    style={{
                      padding: '8px',
                      cursor: 'pointer',
                      border: '0.5px solid #000',
                      backgroundColor: hairId === hair.id ? '#a10606' : '#ccc',
                    }}
                  >
                    {hair.name}
                  </li>
                ))}
              </ul>
            )}
      </TreatmentName>
      <CustomerName>
        回数　：　
        <input type="number" style={{ width: 500, height: 60, marginRight: 70 }} placeholder="0" min={1} max={100} onChange={handleNumberChange} />
      </CustomerName>
      <ReservationAdd onClick={handleRegistration}>
        購入情報を作成する
      </ReservationAdd>
    </Container>
  );
};

const Container = styled.div`
  background: #efefef;
  width: 100%;
  height: 100%;
`;
const CustomerName = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
  height: 15%;
  margin-top: 3%;
`;
const TreatmentName = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
  height: 15%;
`;
const ReservationAdd = styled.div`
  background: greenyellow;
  position: relative;
  text-decoration: dashed;
  color: inherit;
  font-weight: bold;
  box-shadow: 1px 1.6px 1px #000;
  top: 5%;
  left: 38%;
  width: 13%;
  padding: 1.5% 8%;
  &:hover {
    transform: translateY(1px);
    box-shadow: none;
  }
`;

export default ReservationEntry;
