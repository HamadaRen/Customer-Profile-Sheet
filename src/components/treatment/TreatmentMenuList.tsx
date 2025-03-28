import React, { useState } from 'react'
import styled from 'styled-components';
import TreatmentMenuHeader from '../header/TreatmentMenuHeader';
import ModeEditRoundedIcon from '@mui/icons-material/ModeEditRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import OperationHeaderButton from '../header/OperationHeaderButton';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { AppBar, Tab, Tabs } from '@mui/material';
import TreatmentTab from '../header/TreatmentTab';


type ListItemAry = {
  id: string,
  name: string,
  price: number,
  time: number,
}

const TreatmentMenuList = () => {
  const [hoveredId, setHoveredId] = useState<string>('');
  const listItemAry: ListItemAry[] = ([
    {
      id:'1',
    name: 'aaa',
    price: 111,
    time: 1
  },
    {
      id:'2',
    name: 'bbb',
    price: 222,
    time: 2
  },
    {
      id:'3',
    name: 'ccc',
    price: 333,
    time: 3
  }
])

const handleEditClick = (id: string) => {
  window.location.replace(`http://localhost:3000/treatmentMenu/${id}`)
}

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
      <OperationHeaderButton />
    <GridContainer>
      <TreatmentMenuHeader />
      <>
      {listItemAry.map((listItem) => (
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

        <ListItem
        onMouseEnter={() => setHoveredId(listItem.id)}
        onMouseLeave={() => setHoveredId('')}
        $selected={hoveredId === listItem.id}
        as={Link}
        to={`/treatmentMenu/${listItem.id}`}
        >
          {listItem.price}
          </ListItem>

        <ListItem
        onMouseEnter={() => setHoveredId(listItem.id)}
        onMouseLeave={() => setHoveredId('')}
        $selected={hoveredId === listItem.id}
        as={Link}
        to={`/treatmentMenu/${listItem.id}`}
        >
          {listItem.time}
          </ListItem>
        <ListItem>
        <IconButton 
        style={{alignItems: 'center', paddingTop: 1, marginRight: 30}}
        onClick={() => handleEditClick(listItem.id)}
        >
          <ModeEditRoundedIcon />
        </IconButton>
        <IconButton style={{alignItems: 'center', paddingTop: 1}}>
          <DeleteForeverRoundedIcon style={{position: 'relative', color: 'red'}} />
        </IconButton>
          </ListItem>
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
  grid-template-columns: 5fr 3fr 2fr 2fr;
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

export default TreatmentMenuList
