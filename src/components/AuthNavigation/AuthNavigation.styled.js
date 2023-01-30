import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  padding: 13px;
  border-radius: 0.5rem;
  font-size: 18px;
  font-weight: bold;
  line-height: 28px;
  text-transform: uppercase;
  color: white;
  transition: 150ms ease-in-out;

  &:hover {
    background-color: #38b2ac;
  }
`;
