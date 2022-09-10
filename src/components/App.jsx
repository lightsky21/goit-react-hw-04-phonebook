import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Container } from 'components/Components.styled'


import ContactsForm from "./ContactsForm";
import Filter from "./Filter";
import ContactList from "./ContactList";

const LS_KEY = 'contacts';

export function App() {

  // state = {
  // contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  //   {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  //   {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
  //   filter: '',
  
  // }
  const [contacts, setContacts] = useState([{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },]);
  const [filter, setFilter] = useState('');
//   componentDidUpdate(prevProps, prevState) {
//     const { contacts } = this.state;
//     if (prevState.contacts !== contacts) {
//       localStorage.setItem(LS_KEY, JSON.stringify(contacts))
//     }
//   }
  useEffect(() => {
  localStorage.setItem(LS_KEY, JSON.stringify(contacts))
  }, [contacts])
  useEffect(() => {
    const contacts = localStorage.getItem(LS_KEY);
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      setContacts(parsedContacts)
    };
  }, [])
//   componentDidMount() {
//     const contacts = localStorage.getItem(LS_KEY);
//     const parsedContacts = JSON.parse(contacts);
//     if (parsedContacts) {
//   this.setState({contacts:parsedContacts})
// }}
    

  
  const changeFilter = evt => {
    setFilter({ filter: evt.currentTarget.value });
    // const { name, value } = evt.currentTarget;
    // this.setState({ [name]: value });
  };

 const  checkContact = name => {
   

for (let i = 0; i < contacts.length; i += 1) {
  if (contacts[i].name === name) {
    return true
  }
  return false;
}
  }


  const addContact = ({ name, number }) => {
    // this.checkContact(name);
    const isContact = checkContact(name);

    if (isContact) {
      alert(`${name} is already in contacts`)
      return
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    
    }

    // this.setState(({contacts}) => ({
    //   contacts: [contact, ...contacts]
    // }))
    setContacts(prevState => ([contact, ...prevState]))
  }


  // const deleteContact = contactId => {
  //   this.setState(({contacts}) => ({
  //     contacts: contacts.filter(contact => contact.id !== contactId)
  //   }))
  const deleteContact = contactId => {
    setContacts(prevState => (
      prevState.filter(contact => contact.id !== contactId)
    ))
  
  }

  const getVisibleContacts = () => {
   
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => (contact.name.includes(normalizedFilter)))
  }
  
  
    
    const visibleContacts = getVisibleContacts();

    return (
      (<Container>
  <h1>Phonebook</h1>
        <ContactsForm onSubmit={addContact} />

  <h2>Contacts</h2>
        <Filter value={filter} onChange = {changeFilter} />
        <ContactList contacts={visibleContacts} onDeleteContact = {deleteContact} />
</Container>)
    )
  
};
