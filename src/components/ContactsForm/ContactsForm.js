import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, FormField, FormBtn } from './ContactsForm.styled';
import { FormLabelText } from 'components/Components.styled';
const INITIAL_STATE = {
  name: '',
  number: '',
};
class ContactsForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = { ...INITIAL_STATE };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormField>
          <FormLabelText>Name</FormLabelText>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleChange}
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
            onChange={this.handleChange}
          />
        </FormField>

        <FormBtn type="submit">Add contact</FormBtn>
      </Form>
    );
  }
}

export default ContactsForm;
