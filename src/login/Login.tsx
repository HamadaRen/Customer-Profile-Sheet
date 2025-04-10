import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Login = () => {
  return (
    <ListItem as={Link} to={`/treatmentMenu`}>
      aaa
    </ListItem>
  );
};

const ListItem = styled.div<{ $selected?: boolean }>`
  border: 1px solid #000;
  background-color: ${({ $selected }) => ($selected ? '#bbc8e6' : '#efefef')};
  text-align: center;
  padding-top: 1%;
  color: inherit;
`;

export default Login;
