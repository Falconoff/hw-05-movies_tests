import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ListItem = styled.li`
  // background-color: #fff;
  // padding: 20px 40px;
  // box-shadow: 0 4px 10px #ccc;
  /* color: tomato; */
  margin-bottom: 4px;
  /* :hover,
  :focus {
    color: var(--accent-color); */
  /* } */

  /* a {
    text-decoration: none;
    color: inherit; */

  /* :hover,
    :focus {
      color: tomato;
    } */
  /* } */
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  :hover,
  :focus {
    color: var(--accent-color);
  }
`;
