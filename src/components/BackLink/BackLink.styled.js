import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const GoBackLink = styled(Link)`
 text-decoration: none;
 border: 1px solid orangered;
  border-radius: 4px;
  padding:7px 25px;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  color: black;
  box-shadow: rgb(9 30 66 / 25%) 0px 4px 8px -2px, rgb(9 30 66 / 8%) 0px 0px 0px 1px;
transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  
   :hover {
    color: orangered;
    border-color: black;
  }
 
`;

export const GoBackBox = styled.div`
  margin: 25px 0px; 
`;