import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }
  &.active {
    text-decoration: underline;
  }
`;
