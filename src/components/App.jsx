import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container } from 'components/Components.styled'


import ContactsForm from "./ContactsForm";
import Filter from "./Filter";
import ContactList from "./ContactList";

const LS_KEY = 'contacts';

export class App extends Component {

  state = {
  contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
    filter: '',
  
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(contacts))
    }
  }

  componentDidMount() {
    const contacts = localStorage.getItem(LS_KEY);
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
  this.setState({contacts:parsedContacts})
}
    

  }
  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
    // const { name, value } = evt.currentTarget;
    // this.setState({ [name]: value });
  };

  checkContact = name => {
    const { contacts } = this.state;

for (let i = 0; i < contacts.length; i += 1) {
  if (contacts[i].name === name) {
    return true
  }
  return false;
}
  }


  addContact = ({ name, number }) => {
    // this.checkContact(name);
    const isContact = this.checkContact(name);

    if (isContact) {
      alert(`${name} is already in contacts`)
      return
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    
    }

    this.setState(({contacts}) => ({
      contacts: [contact, ...contacts]
    }))
  }


  deleteContact = contactId => {
    this.setState(({contacts}) => ({
      contacts: contacts.filter(contact => contact.id !== contactId)
    }))
  }

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => (contact.name.includes(normalizedFilter)))
  }
  
  render() {
    const {  filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      (<Container>
  <h1>Phonebook</h1>
        <ContactsForm onSubmit={ this.addContact} />

  <h2>Contacts</h2>
        <Filter value={filter} onChange = {this.changeFilter} />
        <ContactList contacts={visibleContacts} onDeleteContact = {this.deleteContact} />
</Container>)
    )
  }
};
