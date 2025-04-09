import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import SalesListHeader from '../components/header/SalesListHeader';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { IconButton } from '@mui/material';

type SalesAryType = {
  id: string;
  customer_id: string;
  customer_name: string;
  treatment_id: string;
  treatment_name: string;
  treatment_price: number;
  quantity_id: string;
  treatment_flag: string;
  created_at: string
};

const HairSalonSalesList = () => {
  const [hoveredId, setHoveredId] = useState<string>('');
  const [estheticSales, setEstheticSales] = useState<SalesAryType[]>([])

  const getSalesId = async () => {
    const salesData = await axios.get('http://localhost:3010/sales/hair')
    const treatmentDetail = salesData.data
    setEstheticSales(treatmentDetail)
  }

    //論理削除してリスト内をすぐに更新する関数
//.then + .catchでエラー確認しながら削除ボタン押した瞬間に反応してくれるようになる
const handleDelete = async (id: string) => {
  console.log('hakka')
  axios.put(`http://localhost:3010/sales/deleted/${id}`)
    .then(() => {
      getSalesId();
    })
    .catch(() => {
      console.log('キャッチエラー');
    });
};

  useEffect(() => {
    getSalesId()
  },[])

  return (
    <GridContainer>
      <SalesListHeader />
      <>
      {estheticSales.map((listItem) => (
          <>
            <ListItem
              key={listItem.id}
              onMouseEnter={() => setHoveredId(listItem.id)}
              onMouseLeave={() => setHoveredId('')}
              $selected={hoveredId === listItem.id}
            >
              {listItem.created_at.substring(0,10)}
            </ListItem>
            <ListItem
              onMouseEnter={() => setHoveredId(listItem.id)}
              onMouseLeave={() => setHoveredId('')}
              $selected={hoveredId === listItem.id}
            >
              {listItem.customer_name}
            </ListItem>
            <ListItem
              onMouseEnter={() => setHoveredId(listItem.id)}
              onMouseLeave={() => setHoveredId('')}
              $selected={hoveredId === listItem.id}
            >
              {listItem.treatment_name}
            </ListItem>
            <ListItem
              onMouseEnter={() => setHoveredId(listItem.id)}
              onMouseLeave={() => setHoveredId('')}
              $selected={hoveredId === listItem.id}
            >
              {listItem.treatment_price + '円'}
            </ListItem>
            <ListItem
              onMouseEnter={() => setHoveredId(listItem.id)}
              onMouseLeave={() => setHoveredId('')}
              $selected={hoveredId === listItem.id}
            >
              {listItem.quantity_id}
            </ListItem>
            <SButton
              onMouseEnter={() => setHoveredId(listItem.id)}
              onMouseLeave={() => setHoveredId('')}
              $selected={hoveredId === listItem.id}
            >
              <IconButton style={{ alignItems: 'center', paddingTop: 1 }} onClick={() => handleDelete(listItem.id)}>
                <DeleteForeverRoundedIcon style={{ position: 'relative', color: 'red' }} />
              </IconButton>
            </SButton>
          </>
        ))}
      </>
    </GridContainer>
  )
}

const GridContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 2fr 4fr 3fr 2fr 2fr 2fr;
  grid-auto-rows: 2rem;
  border: 1px solid #000;
`;
const ListItem = styled.div<{$selected?: boolean}>`
  border: 1px solid #000;
  background-color: ${({$selected}) => ($selected ? '#bbc8e6' : '#efefef')};
  text-align: center;
  text-decoration: dashed;
  color: inherit;
`;
const SButton = styled.div<{$selected?: boolean}>`
  border: 1px solid #000;
  background-color: ${({$selected}) => ($selected ? '#efefef' : '#efefef')};
  text-align: center;
  padding-top: 1%;
  color: inherit;
`;

export default HairSalonSalesList
