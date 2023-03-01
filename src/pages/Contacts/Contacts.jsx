import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilteredName } from 'redux/contacts/selectors';
// import { deleteContact } from 'redux/contacts/contactsSlice';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ContactForm, Filter, Notification, Section } from 'components';
import { Button } from 'components/ContactForm/ContactForm.styled';

import { List, Item, Text } from './Contacts.styled';
import { useEffect } from 'react';
import { getContacts, delContacts } from 'redux/contacts/operations';
import { Container } from 'common/common.styled';

const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
  const filteredName = useSelector(selectFilteredName);
  // const error = useSelector(selectError);
  // const loading = useSelector(selectLoader);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const deleteSelectedContact = contactId => {
    dispatch(delContacts(contactId));
  };

  const getFilteredContacts = (contacts, filter) => {
    return contacts.filter(c =>
      c.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts(contacts, filteredName);

  return (
    <Container>
      <ContactForm />
      <Section title="Contacts">
        {(contacts.length > 1 || filteredName) && <Filter />}
        {Boolean(filteredContacts.length) && (
          <List>
            {filteredContacts.map(({ id, name, phone }) => (
              <Item key={id}>
                <Text>
                  {name}: <span>{phone}</span>
                </Text>
                <Button
                  onClick={() => {
                    deleteSelectedContact(id);
                  }}
                >
                  Delete
                </Button>
              </Item>
            ))}
          </List>
        )}
        {!Boolean(contacts.length) && (
          <Notification message="There are no contacts in the phonebook yet..." />
        )}
        {Boolean(contacts.length) && !Boolean(filteredContacts.length) && (
          <Notification message="There isn't such a contact..." />
        )}
      </Section>
      {/* {loading && <Loader themeNorm={normalizedTheme} />}
      {error && <div>Ooops, something went wrong.. Try a bit later</div>} */}
      <ToastContainer autoClose={3000} />
    </Container>
  );
};

export default ContactsPage;
