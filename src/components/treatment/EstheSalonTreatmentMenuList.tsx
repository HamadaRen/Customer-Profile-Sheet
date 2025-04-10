import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import TreatmentMenuHeader from '../header/TreatmentMenuHeader';
import ModeEditRoundedIcon from '@mui/icons-material/ModeEditRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import OperationHeaderButton from '../header/EstheSalonOperationHeaderButton';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { AppBar, Tab, Tabs } from '@mui/material';
import TreatmentTab from '../header/TreatmentTab';
import axios from 'axios';


type EstheticTreatmentAry = {
  id: string,
  category: string,
  name: string,
  delete_at: string,
  price: number
}

const TreatmentMenuList = () => {
  const [hoveredId, setHoveredId] = useState<string>('');
  const [estheticTreatmentDataArray, setEstheticTreatmentDataArray] = useState<EstheticTreatmentAry[]>([])

  const getTreatmentData = async () => {
    const estheticData = await axios.get('http://localhost:3010/treatment/esthetic');
    setEstheticTreatmentDataArray(estheticData.data);
  };

const handleEditClick = (id: string) => {
  window.location.replace(`http://localhost:3000/treatmentMenu/esthetic/${id}`)
}

//論理削除してリスト内をすぐに更新する関数
//.then + .catchでエラー確認しながら削除ボタン押した瞬間に反応してくれるようになる
const handleDelete = async (id: string) => {
  await axios
    .put(`http://localhost:3010/treatment/esthetic/delete/${id}`)
    .then(() => {
      getTreatmentData();
    })
    .catch(() => {
      console.log('キャッチエラー');
    });
};
//ここまで

useEffect(() => {
  getTreatmentData()
},[])

  return (
    <>
      <OperationHeaderButton />
    <GridContainer>
      <TreatmentMenuHeader />
      <>
      {estheticTreatmentDataArray.map((listItem) => (
        <>
        <ListItem
        key={listItem.id}
        onMouseEnter={() => setHoveredId(listItem.id)}
        onMouseLeave={() => setHoveredId('')}
        $selected={hoveredId === listItem.id}
        as={Link}
        to={`/treatmentMenu/esthetic/${listItem.id}`}
        >
          {listItem.name}
          </ListItem>

        <ListItem
        onMouseEnter={() => setHoveredId(listItem.id)}
        onMouseLeave={() => setHoveredId('')}
        $selected={hoveredId === listItem.id}
        as={Link}
        to={`/treatmentMenu/esthetic/${listItem.id}`}
        >
          {listItem.price + '円'}
          </ListItem>

        <SButton
        onMouseEnter={() => setHoveredId(listItem.id)}
        onMouseLeave={() => setHoveredId('')}
        $selected={hoveredId === listItem.id}
        >
        <IconButton 
        style={{alignItems: 'center', paddingTop: 1, marginRight: 30}}
        onClick={() => handleEditClick(listItem.id)}
        
        >
          <ModeEditRoundedIcon />
        </IconButton>

        <IconButton 
        style={{alignItems: 'center', paddingTop: 1}}
        onClick={() => handleDelete(listItem.id)}
        >
          <DeleteForeverRoundedIcon style={{position: 'relative', color: 'red'}} />
        </IconButton>

          </SButton>
          </>
      ))}
      </>
    </GridContainer>
      </>
  )
}

const GridContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 5fr 3fr 2fr;
  grid-auto-rows: 2rem;
  border: 1px solid #000;
`;
const ListItem = styled.div<{$selected?: boolean}>`
  border: 1px solid #000;
  background-color: ${({$selected}) => ($selected ? '#bbc8e6' : '#efefef')};
  text-align: center;
  padding-top: 1%;
  color: inherit;
  text-decoration: dashed;
`;
const SButton = styled.div<{$selected?: boolean}>`
  border: 1px solid #000;
  background-color: ${({$selected}) => ($selected ? '#efefef' : '#efefef')};
  text-align: center;
  padding-top: 1%;
  color: inherit;
`;

export default TreatmentMenuList
