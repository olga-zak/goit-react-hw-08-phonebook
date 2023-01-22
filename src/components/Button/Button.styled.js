import styled from 'styled-components';

export const ButtonStyled = styled.button`
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.2) 15px 28px 25px -18px;
  color: #41403e;
  cursor: pointer;
  display: block;
  font-size: 1rem;
  line-height: 23px;
  margin: 15px auto 0 auto;
  padding: 0.75rem;
  transition: all 235ms ease-in-out;
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px -5px;
    transform: translate3d(0, 2px, 0);
  }

  &:focus {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 4px -6px;
  }
`;
