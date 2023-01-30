import { Link } from 'react-router-dom';

import { List, ListItem } from '@chakra-ui/react';
import { StyledLink } from './AuthNavigation.styled';

export const AuthNavigation1 = () => {
  return (
    <nav>
      <List display="flex" padding="13px">
        <ListItem>
          <StyledLink to="signup">Register</StyledLink>
        </ListItem>
        <ListItem ml="48px">
          <StyledLink to="login">Login</StyledLink>
        </ListItem>
      </List>
    </nav>
  );
};

export const AuthNavigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="signup">Register</Link>
        </li>
        <li>
          <Link to="login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};
