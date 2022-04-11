import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MyLink = styled(NavLink)`
  color: blue;
  display: inline-block;
  padding: 10px;
  margin: 10px;
  text-decoration: none;
  background-color: #ddd;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 2px 0px #66f;

  &.active {
    background-color: #eee;
    box-shadow: 1px 1px 2px 0px #66f;
  }
  :hover {
    background-color: #eee;
  }
`;
