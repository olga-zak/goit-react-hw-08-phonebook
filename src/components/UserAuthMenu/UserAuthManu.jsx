import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';

import { selectName } from 'redux/auth/auth-selectors';

export const UserAuthMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  return (
    <>
      <p>{`Welcome, ${name}!`}</p>
      <button onClick={() => dispatch(logOut())}>LogOut</button>
    </>
  );
};
