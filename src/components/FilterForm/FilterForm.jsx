import { useDispatch } from 'react-redux';
import { getFilterValue } from 'redux/filter/filterSlice';

import { Input } from '@chakra-ui/react';

export const FilterForm = () => {
  const dispatch = useDispatch();
  const handleChange = event => {
    const text = event.target.value.toLowerCase();
    dispatch(getFilterValue(text));
  };
  return (
    // <Label>
    //   Find contact by name:
    <Input
      type="text"
      name="filter"
      //value={filter}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      onChange={handleChange}
      required
      placeholder="Search for contact..."
      _placeholder={{ opacity: 0.4, color: 'blue.800' }}
      size="lg"
      variant="filled"
      focusBorderColor="blue.800"
      mb="15px"
    />
    // </Label>
  );
};
