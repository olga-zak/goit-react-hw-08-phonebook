import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from 'redux/contacts/contacts-operations';
import { getIsLoading, getError } from 'redux/contacts/contacts-selectors';

import { ButtonChakra } from 'components/Button/Button';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { AddForm } from 'components/AddForm/AddForm';
import { FilterForm } from 'components/FilterForm/FilterForm';
import { Loader } from 'components/Loader/Loader';

import { Wrapper, FormsWrapper } from './ContactsPage.styled';

import { Box } from '@chakra-ui/react';

export const ContactsPage = () => {
  const [isContactsListShown, setIsContactsListShown] = useState(false);
  const [isAddFormShown, setIsAddFormShown] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  //showContactsList - запрос на сервер за контактами + показать эти контакты
  const showContactsList = () => {
    setIsContactsListShown(true);
    dispatch(fetchContacts());
  };

  const showAddForm = () => {
    setIsAddFormShown(true);
  };

  const closeAddForm = () => {
    setIsAddFormShown(false);
  };

  return (
    <>
      <Box bg="gray.200" width="100wh" height="100vh" padding="15px">
        {isContactsListShown ? (
          <>
            {isLoading && <Loader />}
            <Wrapper>
              {!isLoading && <ContactsList />}

              <FormsWrapper>
                {!isLoading && !error && (
                  <>
                    <FilterForm />
                    {!isAddFormShown && (
                      <ButtonChakra
                        text="Add Contact"
                        clickHandler={showAddForm}
                      />
                    )}
                  </>
                )}
                {isAddFormShown && !isLoading && (
                  <AddForm closeForm={closeAddForm} />
                )}
              </FormsWrapper>
            </Wrapper>
          </>
        ) : (
          <ButtonChakra text="Show contacts" clickHandler={showContactsList} />
        )}
        {error && <p>eto oshibka {error.message}</p>}
      </Box>
    </>
  );
};
