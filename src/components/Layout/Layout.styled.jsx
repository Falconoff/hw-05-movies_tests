import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  background-color: #fff;
  padding: 20px 40px;
  box-shadow: 0 4px 8px #555;
`;

export const Link = styled(NavLink)`
  font-size: 18px;
  color: #555;
  font-weight: 500;
  text-decoration: none;
  &:not(:last-child) {
    margin-right: 20px;
  }

  &.active {
    color: tomato;
  }
`;

export const Footer = styled.footer`
  /* position: absolute;
  bottom: 0; */
  /* box-sizing: border-box; */
  /* width: 100vw; */
  background-color: #fff;
  padding: 20px 40px;
  box-shadow: 0 -4px 8px #555;
`;
