import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Container } from 'components/Components.styled'
import useLocalStorage from 'components/hooks/useLocalStorage';

import ContactsForm from "./ContactsForm";
import Filter from "./Filter";
import ContactList from "./ContactList";



export function App() {

    const [contacts, setContacts] = useLocalStorage('contactList', []);
  const [filter, setFilter] = useState('');


  const changeFilter = evt => {
    setFilter( evt.currentTarget.value );
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

    setContacts(prevState => ([contact, ...prevState]))
  }

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
