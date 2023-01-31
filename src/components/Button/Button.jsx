import { ButtonStyled } from './Button.styled';
import { Button, Center } from '@chakra-ui/react';
export const Button1 = ({ text, clickHandler }) => {
  return <ButtonStyled onClick={clickHandler}>{text}</ButtonStyled>;
};

export const ButtonChakra = ({ text, clickHandler }) => {
  return (
    <Center>
      <Button colorScheme="teal" size="lg" onClick={clickHandler}>
        {text}
      </Button>
    </Center>
  );
};
