import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';

import { routes } from 'helpers/routes';
import WithAuthRedirect from 'HOC/WithAuthRedirect';
import { getContacts, delContacts } from 'redux/contacts/operations';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  selectContacts,
  selectEditModal,
  selectError,
  selectFilteredName,
  selectIsDeleting,
  selectLoader,
} from 'redux/contacts/selectors';

import {
  ContactForm,
  Filter,
  Loader,
  LoaderDel,
  ModalEdit,
  Notification,
  Section,
} from 'components';

import {
  Button,
  ButtonSecondary,
} from 'components/ContactForm/ContactForm.styled';

import { List, Item, Text, ButtonsContainer } from './Contacts.styled';
import { Container } from 'common/common.styled';
import { setEditContact, setEditModal } from 'redux/contacts/contactsSlice';

const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
  const filteredName = useSelector(selectFilteredName);
  const editModal = useSelector(selectEditModal);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoader);
  const loadingDel = useSelector(selectIsDeleting);

  const dispatch = useDispatch();
  const delId = useRef(null);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const deleteSelectedContact = contactId => {
    delId.current = contactId;
    dispatch(delContacts(contactId));
  };

  const getFilteredContacts = (contacts, filter) => {
    return contacts.filter(c =>
      c.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const toggleModal = contactUser => {
    dispatch(setEditContact(contactUser));
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

                <ButtonsContainer>
                  <ButtonSecondary
                    onClick={() => {
                      toggleModal({ id, name, number });
                    }}
                  >
                    Edit
                  </ButtonSecondary>
                  <Button
                    onClick={() => {
                      deleteSelectedContact(id);
                    }}
                  >
                    {loadingDel && id === delId.current ? (
                      <LoaderDel />
                    ) : (
                      'Delete'
                    )}
                  </Button>
                </ButtonsContainer>
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
