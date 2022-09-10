// import { Btn } from 'components/Components.styled';
import PropTypes from 'prop-types';
import { ListItem, ListItemText, ListItemBtn } from './ContactList.styled';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <ListItemText>
            {name} : {number}
          </ListItemText>
          <ListItemBtn type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </ListItemBtn>
        </ListItem>
      ))}
    </ul>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
