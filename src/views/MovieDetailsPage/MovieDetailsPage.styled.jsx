import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const MovieWrapper = styled.div`
  /* color: blue; */
`;

export const GoBackBtn = styled(Link)`
  display: inline-block;
  padding: 5px 10px;
  border: 1px solid #555;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;

  :hover,
  :focus {
    color: var(--accent-color);
  }
`;

export const MovieDetails = styled.div`
  display: flex;
  /* padding: 20px 0px; */
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #555;

  img {
    width: 250px;
    height: auto;
    margin-right: 20px;
  }

  span {
    display: inline-block;
    padding-right: 8px;
    /* margin-bottom: 20px; */
    /* border-right: 2px solid var(--accent-color); */
    :not(:first-child) {
      padding-left: 8px;
    }
    :not(:last-child) {
      border-right: 1px solid var(--accent-color);
    }
  }
`;

export const MovieTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const DetailName = styled.p`
  /* font-size: 16px;  */
  margin-bottom: 10px;
  margin-top: 20px;
  font-weight: 700;
`;

export const AdditionalInfoList = styled.div`
  /* padding: 0px 0px; */
  margin-top: 10px;
  border-bottom: 1px solid #555;

  ul {
    padding-left: 20px;
  }

  li:not(:last-child) {
    margin-bottom: 8px;
  }
  a:hover {
    /* text-decoration: none; */
    color: var(--accent-color);
  }
`;

export const LinkItem = styled(NavLink)`
  font-size: 18px;
  color: #555;
  font-weight: 500;
  text-decoration: none;

  &.active {
    color: tomato;
  }
`;
