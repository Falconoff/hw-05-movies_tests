import { useRef } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { MyLink } from './Test.styled';

export default function Test() {
  const refContainer = useRef('initialValue');

  console.log('refContainer.current.value:', refContainer.current.value);
  return (
    <>
      <h1>Hello Test</h1>
      <input ref={refContainer} type="text" value="123" />
      <hr />
      <nav>
        <MyLink
          to="pink"
          style={({ isActive }) => {
            return {
              display: 'block',
              margin: '1rem 0',
              color: isActive ? 'red' : 'blue',
            };
          }}
        >
          link to pink
        </MyLink>
        {/* <span>...</span> */}
        <MyLink
          to="green-1"
          className={({ isActive }) => (isActive ? 'red' : 'blue')}
        >
          link to green
        </MyLink>
        <MyLink
          to="green-2"
          className={({ isActive }) => (isActive ? 'red' : 'blue')}
        >
          link to green with text
        </MyLink>

        <NavLink
          to="test-1"
          style={({ isActive }) => {
            return {
              display: 'block',
              margin: '1rem 0',
              color: isActive ? 'red' : 'blue',
            };
          }}
        >
          link to test-1 (isActive change inline-style)
        </NavLink>
        {/* <span>...</span> */}
        <NavLink
          to="test-2"
          className={({ isActive }) => (isActive ? 'red' : 'blue')}
        >
          link to test-2 (isActive change class-name)
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
