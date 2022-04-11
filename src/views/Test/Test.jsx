import { Outlet } from 'react-router-dom';
import { MyLink } from './Test.styled';

export default function Test() {
  return (
    <>
      <h1>Hello Test</h1>
      <hr />
      <nav>
        <MyLink to="pink">link to pink</MyLink>
        {/* <span>...</span> */}
        <MyLink to="green-1">link to green</MyLink>
        <MyLink to="green-2">link to green with text</MyLink>
      </nav>
      <Outlet />
    </>
  );
}
