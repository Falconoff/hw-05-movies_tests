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
  box-shadow: 3px 3px 5px 0px #66f;

  &.active {
    background-color: #fff;
    box-shadow: 1px 1px 2px 0px #66f;
  }
  :hover {
    background-color: #fff;
    /* box-shadow: 3px 3px 5px 0px #44f; */
  }
`;
