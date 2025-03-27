import React from 'react'
import styled from 'styled-components';
import TreatmentMenuHeader from '../header/TreatmentMenuHeader';
import ModeEditRoundedIcon from '@mui/icons-material/ModeEditRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import OperationHeaderButton from '../header/OperationHeaderButton';
import IconButton from '@mui/material/IconButton';


type ListItemAry = {
  name: string,
  price: number,
  time: number,
}

const TreatmentMenuList = () => {
  const listItemAry: ListItemAry[] = ([
    {
    name: 'aaa',
    price: 111,
    time: 1
  },
    {
    name: 'bbb',
    price: 222,
    time: 2
  },
    {
    name: 'ccc',
    price: 333,
    time: 3
  }
])
  return (
    <>
      <OperationHeaderButton />
    <GridContainer>
      <TreatmentMenuHeader />
      <>
      {listItemAry.map((listItem) => (
        <>
        <ListItem>{listItem.name}</ListItem>
        <ListItem>{listItem.price}</ListItem>
        <ListItem>{listItem.time}</ListItem>
        <ListItem>
        <IconButton style={{alignItems: 'center', paddingTop: 1, marginRight: 30}}>
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
`;

export default TreatmentMenuList
