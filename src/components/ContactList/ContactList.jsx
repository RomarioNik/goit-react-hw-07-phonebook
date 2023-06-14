import { useSelector } from 'react-redux';
import ContactItem from 'components/ContactItem';
import { List } from './ContactList.styled';
import { getContacts, getFilterValue } from 'redux/selector';

const filterContacts = (contacts, checkName) => {
  const normalizedFilter = checkName.toLocaleLowerCase();
  return contacts.filter(({ name }) =>
    name.toLocaleLowerCase().includes(normalizedFilter)
  );
};

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const newName = useSelector(getFilterValue);

  const filteredContacts = filterContacts(contacts, newName);

  if (filteredContacts.length === 0) return null;

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
};

export default ContactList;
