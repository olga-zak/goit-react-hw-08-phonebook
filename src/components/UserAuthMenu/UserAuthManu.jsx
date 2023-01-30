import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';

import { selectName } from 'redux/auth/auth-selectors';

import { Text, Button } from '@chakra-ui/react';

export const UserAuthMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  return (
    <>
      <Text
        color="white"
        fontWeight="bold"
        fontSize="lg"
        p=".8rem"
      >{`Welcome, ${name}!`}</Text>

      <Button colorScheme="teal" size="lg" onClick={() => dispatch(logOut())}>
        LogOut
      </Button>
    </>
  );
};
