import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, FormField, FormBtn } from './ContactsForm.styled';
import { FormLabelText } from 'components/Components.styled';
// const INITIAL_STATE = {
//   name: '',
//   number: '',
// };
const CONTACTS_NAME = 'name';
const CONTACTS_NUMBER = 'number';
function ContactsForm({ onSubmit }) {
  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;
    
    switch (name) {
      case CONTACTS_NAME:
        setName(value);
        break;
      case CONTACTS_NUMBER:
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormField>
        <FormLabelText>Name</FormLabelText>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <FormLabelText>Number</FormLabelText>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </FormField>

      <FormBtn type="submit">Add contact</FormBtn>
    </Form>
  );
}

ContactsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactsForm;
