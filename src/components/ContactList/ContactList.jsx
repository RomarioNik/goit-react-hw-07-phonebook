import { useSelector } from 'react-redux';
import ContactItem from 'components/ContactItem';
import { List, Loading, Error } from './ContactList.styled';
import { getContacts, getFilterValue } from 'redux/selector';

const filterContacts = (contacts, checkName) => {
  const normalizedFilter = checkName.toLocaleLowerCase();
  return contacts.filter(({ name }) =>
    name.toLocaleLowerCase().includes(normalizedFilter)
  );
};

const ContactList = () => {
  const { items, isLoading, error } = useSelector(getContacts);
  const newName = useSelector(getFilterValue);

  const filteredContacts = filterContacts(items, newName);

  if (filteredContacts.length === 0) return null;

  return (
    <>
      {isLoading && !error && <Loading>Loading contacts...</Loading>}
      {error && <Error>{`${error}. Try again :)`}</Error>}
      <List>
        {filteredContacts.length > 0 &&
          filteredContacts.map(({ id, name, phone }) => (
            <ContactItem key={id} id={id} name={name} phone={phone} />
          ))}
      </List>
    </>
  );
};

export default ContactList;
