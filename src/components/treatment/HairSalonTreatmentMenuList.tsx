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
import HairSalonOperationHeaderButton from '../header/HairSalonOperationHeaderButton';
import axios from 'axios';


type ListItemAry = {
  id: string,
  category: string,
  name: string,
  delete_at: string,
}

const HairSalonTreatMenuList = () => {
  const [hoveredId, setHoveredId] = useState<string>('');
  const [hairTreatmentDataArray, setHairTreatmentDataArray] = useState<ListItemAry[]>([])

  const getTreatmentData = async () => {
    const hairData = await axios.get('http://localhost:3010/treatment/hair')
    setHairTreatmentDataArray(hairData.data)
  }

const handleEditClick = (id: string) => {
  window.location.replace(`http://localhost:3000/treatmentMenu/${id}`)
}

useEffect(() => {
  getTreatmentData()
},[])

//論理削除してリスト内をすぐに更新する関数
//.then + .catchでエラー確認しながら削除ボタン押した瞬間に反応してくれるようになる
// const handleDelete = async (id: string) => {
//   console.log('id', id);
//   await axios
//     .put(`http://localhost:3010/delete/${id}`)
//     .then(() => {
//       getCustomerData();
//       console.log('@@@@@@')
//     })
//     .catch(() => {
//       console.log('キャッチエラー');
//     });
// };
//ここまで

  return (
    <>
      <HairSalonOperationHeaderButton />
    <GridContainer>
      <TreatmentMenuHeader />
      <>
      {hairTreatmentDataArray.map((listItem) => (
        <>
        <ListItem
        onMouseEnter={() => setHoveredId(listItem.id)}
        onMouseLeave={() => setHoveredId('')}
        $selected={hoveredId === listItem.id}
        as={Link}
        to={`/treatmentMenu/${listItem.id}`}
        >
          {listItem.name}
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
        <IconButton style={{alignItems: 'center', paddingTop: 1}}>
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
`;
const SButton = styled.div<{$selected?: boolean}>`
  border: 1px solid #000;
  background-color: ${({$selected}) => ($selected ? '#efefef' : '#efefef')};
  text-align: center;
  padding-top: 1%;
  color: inherit;
`;

export default HairSalonTreatMenuList
