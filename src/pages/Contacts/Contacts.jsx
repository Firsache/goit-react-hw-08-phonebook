import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { routes } from 'helpers/routes';
import WithAuthRedirect from 'HOC/WithAuthRedirect';

import {
  selectContacts,
  selectEditModal,
  selectError,
  selectFilteredName,
  selectLoader,
} from 'redux/contacts/selectors';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getContacts, delContacts } from 'redux/contacts/operations';
import {
  ContactForm,
  Filter,
  Loader,
  ModalEdit,
  Notification,
  Section,
} from 'components';
import { Button } from 'components/ContactForm/ContactForm.styled';

import { List, Item, Text } from './Contacts.styled';
import { Container } from 'common/common.styled';
import { setEditModal } from 'redux/contacts/contactsSlice';

const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
  const filteredName = useSelector(selectFilteredName);
  const editModal = useSelector(selectEditModal);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoader);

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
  const toggleModal = () => {
    dispatch(setEditModal());
  };

  const filteredContacts = getFilteredContacts(contacts, filteredName);

  return (
    <Container>
      <ContactForm />
      <Section title="Contacts">
        {(contacts.length > 1 || filteredName) && <Filter />}
        {Boolean(filteredContacts.length) && (
          <List>
            {filteredContacts.map(({ id, name, number }) => (
              <Item key={id}>
                <Text>
                  {name}: <span>{number}</span>
                </Text>
                <Button
                  onClick={() => {
                    toggleModal();
                  }}
                >
                  Edit
                </Button>
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
      {loading && <Loader />}
      {error && <div>Ooops, something went wrong.. Try a bit later</div>}
      <ToastContainer autoClose={3000} />
      {editModal && <ModalEdit />}
    </Container>
  );
};

export default WithAuthRedirect(ContactsPage, routes.LOGIN);