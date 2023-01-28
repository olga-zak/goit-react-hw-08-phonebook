import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LogoLink = styled(NavLink)`
  display: flex;
  align-items: center;
  height: 30px;
`;

export const LogoText = styled.p`
  font-family: 'Bebas Neue', cursive;
  margin-left: 5px;
  font-size: 30px;
`;
