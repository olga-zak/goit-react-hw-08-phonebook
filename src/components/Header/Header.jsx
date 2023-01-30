import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';

import {
  Flex,
  Container,
  Link,
  Stack,
  Box,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
  Icon,
} from '@chakra-ui/react';
//import { NavLink } from 'react-router-dom';

import { UserAuthMenu1 } from 'components/UserAuthMenu/UserAuthManu';
import { AuthNavigation1 } from 'components/AuthNavigation/AuthNavigation';
import { StyledNavLink } from './Header.styled';

export const Header = () => {
  const token = useSelector(selectToken);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      backgroundColor="blue.800"
      justifyContent="space-between"
      alignItems="center"
      pt=".5rem"
      pb=".5rem"
      position="sticky"
      top="0"
      zIndex={1}
      boxShadow="base"
      as="nav"
    >
      <Container
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        maxW={['sm', '4xl']}
      >
        <StyledNavLink to="/">
          <Icon viewBox="0 0 512 512" color="white">
            <path
              fill="currentColor"
              d="M80.5.7C49.4 5.1 23.3 28.6 14.3 60.1c-1.7 6.1-1.8 15.4-1.8 195.9s.1 189.8 1.8 195.9c8.1 28.6 29.2 49.7 57.8 57.8 6.1 1.7 14 1.8 152.9 1.8s146.8-.1 152.9-1.8c28.6-8.1 49.7-29.2 57.8-57.8 1.7-6.1 1.8-15.4 1.8-195.9s-.1-189.8-1.8-195.9c-8-28.3-28.6-49.1-57.2-57.7C372.8.7 364.3.6 228 .4 148.5.3 82.2.5 80.5.7zm293.7 43c8.8 4.1 16 11.3 20.1 20.1l3.2 6.7v371l-3.2 6.7c-4.1 8.8-11.3 16-20.1 20.1l-6.7 3.2h-285l-6.7-3.2c-8.8-4.1-16-11.3-20.1-20.1l-3.2-6.7v-371l3.2-6.7c5.2-11.1 16-20.1 27-22.7 2.2-.5 64.7-.8 144.3-.8l140.5.2 6.7 3.2z"
            />
            <path
              fill="currentColor"
              d="M213.3 131.5c-30.9 5.6-52.5 35.5-48.4 66.9 4.1 31 29 53 60.1 53s56-22 60.1-53c4.1-31.6-17.6-61.4-48.8-66.9-9.4-1.7-13.6-1.7-23 0zM158.6 261.1c-22.3 16.8-38.6 43-38.6 61.9 0 27.7 16.3 41.1 54.9 45 13.4 1.3 86.8 1.3 100.2 0 38.6-3.9 54.9-17.3 54.9-45 0-14.7-10.9-35.9-26.5-51.5-5.5-5.5-18.2-15.5-19.6-15.5-.4 0-3.6 2.1-7.1 4.8-7.9 5.9-19.2 11.4-29.4 14.4-11.4 3.3-33.4 3.3-44.7 0-10.6-3-21.4-8.3-29.3-14.3-3.6-2.7-6.9-4.9-7.3-4.9-.4 0-3.8 2.3-7.5 5.1zM462 122v40.2l11.4-.4c10.9-.3 11.7-.5 15.7-3.3 2.4-1.7 5.7-5.3 7.4-7.9l3-4.9.3-21.1c.4-23.8-.2-27.4-5.5-33.6-5.6-6.5-10.1-8.3-22-8.8l-10.3-.4V122zM462 262.1v40.1l10.8-.4c10-.3 11.2-.5 15.8-3.3 3-1.9 6-4.9 7.9-7.9l3-4.9.3-21.1c.4-25.5-.1-28-7.2-35.2-6-5.9-10.4-7.4-22.5-7.4H462v40.1zM462 402v40.2l10.8-.4c10-.3 11.2-.5 15.8-3.3 3-1.9 6-4.9 7.9-7.9l3-4.9v-23.6c0-25.9-.1-26.6-6.4-32.8-5.2-5.3-9.6-6.7-20.8-7.1l-10.3-.4V402z"
            />
          </Icon>
          PHONEBOOK
        </StyledNavLink>

        {token && <StyledNavLink to="contacts">CONTACTS</StyledNavLink>}

        <Box onClick={onOpen} display={{ base: 'block', md: 'none' }}>
          <svg
            fill="white"
            width="12px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </Box>
        <Drawer onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay>
            <DrawerContent backgroundColor="blue.800">
              <DrawerCloseButton color="white" />
              <DrawerHeader
                borderBottomWidth="2px"
                borderBottomColor="blue.700"
                backgroundColor="blue.900"
                color="blue.100"
              >
                Menu
              </DrawerHeader>
              <DrawerBody p="0">
                <Stack spacing={0}>
                  <Link
                    color="white"
                    fontWeight="bold"
                    fontSize="lg"
                    p=".8rem"
                    paddingLeft="1.5rem"
                    _hover={{
                      backgroundColor: 'blue.700',
                    }}
                  >
                    PORTFOLIO
                  </Link>
                  <Link
                    fontSize="lg"
                    fontWeight="bold"
                    color="white"
                    p=".8rem"
                    paddingLeft="1.5rem"
                    _hover={{
                      backgroundColor: 'blue.700',
                    }}
                  >
                    ABOUT
                  </Link>
                  <Link
                    fontWeight="bold"
                    fontSize="lg"
                    color="white"
                    p=".8rem"
                    paddingLeft="1.5rem"
                    _hover={{
                      backgroundColor: 'blue.700',
                    }}
                  >
                    CONTACT
                  </Link>
                </Stack>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>

        <Stack
          display={{ base: 'none', md: 'flex' }}
          spacing={12}
          isInline
          ml="auto"
          alignItems="center"
        >
          {token ? <UserAuthMenu1 /> : <AuthNavigation1 />}
        </Stack>
      </Container>
    </Flex>
  );
};
