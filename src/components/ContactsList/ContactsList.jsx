import { useSelector, useDispatch } from 'react-redux';

import { getContacts } from 'redux/contacts/contacts-selectors';
import { deleteContact } from 'redux/contacts/contacts-operations';
import { getFilterQueue } from 'redux/filter/filter-selectors';

import { List, Item, Name, Phone } from './ContactsList.styled';
import { Button } from '@chakra-ui/button';
import { Center } from '@chakra-ui/layout';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterQueue);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filterValue)
  );

  return (
    <List>
      {filteredContacts.map(contact => {
        return (
          <Item key={contact.id}>
            <Name>{contact.name}</Name>
            <Phone>Phone number: {contact.number}</Phone>
            <Center>
              <Button
                colorScheme="teal"
                size="lg"
                onClick={() => dispatch(deleteContact(contact.id))}
              >
                Delete
              </Button>
            </Center>
          </Item>
        );
      })}
    </List>
  );
};
