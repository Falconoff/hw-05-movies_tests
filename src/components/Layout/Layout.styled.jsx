import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MainWrapper = styled.div`
  min-height: calc(100vh - 130px);
  /* background-color: #eee;   */
  padding: 20px 40px;
`;

export const Header = styled.header`
  /* background-color: #fff; */
  /* padding: 20px 40px; */
  display: block;
  padding-left: 40px;
  box-shadow: 0px 4px 20px #eee;
  /* z-index: 200; */
`;

export const Link = styled(NavLink)`
  display: inline-block;
  font-size: 18px;
  color: #555;
  font-weight: 500;
  text-decoration: none;
  padding: 17px 6px;
  /* padding-bottom: 17px; */
  &:not(:last-child) {
    margin-right: 20px;
  }

  :hover,
  :focus {
    color: var(--accent-color);
  }

  &.active {
    color: var(--accent-color);
    border-bottom: 4px solid var(--accent-color);
  }
`;

export const Footer = styled.footer`
  /* position: absolute;
  bottom: 0; */
  /* box-sizing: border-box; */
  /* width: 100vw; */
  /* background-color: #fff; */
  padding: 20px 40px;
  box-shadow: 0 -4px 20px #ccc;
`;
