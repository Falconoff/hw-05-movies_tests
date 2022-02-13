import styled from 'styled-components';

export const CastWrap = styled.div`
  /* padding: 20px 40px; */
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const ActorCard = styled.div`
  /* color: blue; */
  display: flex;
  margin-bottom: 10px;

  img {
    /* width: 250px;
    height: auto; */
    margin-right: 20px;
  }

  p {
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;

export const CastList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const NoPhoto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 154px;
  height: 230px;
  border: 2px solid #555;
  /* padding: 20px 40px; */
  margin-right: 20px;
`;
