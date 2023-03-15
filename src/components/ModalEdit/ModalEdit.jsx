import { useDispatch, useSelector } from 'react-redux';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { BsX } from 'react-icons/bs';

import { editContactOperation } from 'redux/contacts/operations';
import { setEditModal } from 'redux/contacts/contactsSlice';

import { selectEditContact } from 'redux/contacts/selectors';
import { Backdrop, Modal, CloseBtn } from './ModalEdit.styled';
import { Button } from 'components/ContactForm/ContactForm.styled';
import { Section } from 'components';

import { TextField } from 'components/FormikForm/TextField';

const modalRoot = document.querySelector('#modal-root');

export const ModalEdit = () => {
  const editContact = useSelector(selectEditContact);
  const dispatch = useDispatch();

  useEffect(() => {
    function handleEscapeClick(evt) {
      if (evt.code === 'Escape') {
        dispatch(setEditModal());
      }
    }
    window.addEventListener('keydown', handleEscapeClick);
    return () => {
      window.removeEventListener('keydown', handleEscapeClick);
    };
  }, [dispatch]);

  const config = [
    { label: 'Name', type: 'text', name: 'name' },
    { label: 'Number', type: 'tel', name: 'number' },
  ];
  const initialValues = {
    name: editContact.name,
    number: editContact.number,
  };
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Must be more than 7 characters')
      .max(20, 'Must be 20 characters or less')
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        'Enter proper name'
      )
      .required('Required'),
    number: Yup.string()
      .min(7, 'Must be more than 7 characters')
      .max(20, 'Must be 20 characters or less')
      .matches(
        /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
        'Enter valid number'
      )
      .required('Required'),
  });
  const onSubmit = (values, { resetForm }) => {
    const name = values.name;
    const number = values.number;
    const user = { name, number, id: editContact.id };
    dispatch(editContactOperation(user));
    dispatch(setEditModal());

    resetForm();
  };

  const handleBackdropClick = evt => {
    if (evt.target === evt.currentTarget) {
      dispatch(setEditModal());
    }
  };
  const onCloseBtnClick = () => {
    dispatch(setEditModal());
  };

  const handleEscapeClick = evt => {
    if (evt.code === 'Escape') {
      dispatch(setEditModal());
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Modal onKeyDown={handleEscapeClick}>
        <Section titlePosition="end" title="Edit the contact">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form>
              {config.map(({ label, type, name }) => (
                <TextField key={name} label={label} type={type} name={name} />
              ))}
              <Button type="submit">Add contact</Button>
            </Form>
          </Formik>
        </Section>
        <CloseBtn onClick={onCloseBtnClick}>
          <BsX size={25} />
        </CloseBtn>
      </Modal>
    </Backdrop>,
    modalRoot
  );
};

// import { useDispatch, useSelector } from 'react-redux';
// import { createPortal } from 'react-dom';
// import { useEffect, useState } from 'react';

// import { BsPersonPlus, BsTelephonePlus, BsX } from 'react-icons/bs';

// import { editContactOperation } from 'redux/contacts/operations';
// import { setEditModal } from 'redux/contacts/contactsSlice';

// import { selectEditContact } from 'redux/contacts/selectors';
// import { Backdrop, Modal, CloseBtn } from './ModalEdit.styled';
// import {
//   FormComponent,
//   Input,
//   Label,
//   Span,
//   Button,
// } from 'components/ContactForm/ContactForm.styled';
// import { Section } from 'components';

// const modalRoot = document.querySelector('#modal-root');

// export const ModalEdit = () => {
//   const editContact = useSelector(selectEditContact);
//   const dispatch = useDispatch();
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   useEffect(() => {
//     setName(editContact.name);
//     setNumber(editContact.number);
//   }, [editContact.name, editContact.number]);

//   useEffect(() => {
//     function handleEscapeClick(evt) {
//       if (evt.code === 'Escape') {
//         dispatch(setEditModal());
//       }
//     }
//     window.addEventListener('keydown', handleEscapeClick);
//     return () => {
//       window.removeEventListener('keydown', handleEscapeClick);
//     };
//   }, [dispatch]);

//   const handleBackdropClick = evt => {
//     if (evt.target === evt.currentTarget) {
//       dispatch(setEditModal());
//     }
//   };
//   const onCloseBtnClick = () => {
//     dispatch(setEditModal());
//   };

//   const handleEscapeClick = evt => {
//     if (evt.code === 'Escape') {
//       dispatch(setEditModal());
//     }
//   };

//   const handleInputChange = evt => {
//     const { name, value } = evt.target;

//     if (name === 'name') setName(value);
//     if (name === 'number') setNumber(value);
//   };

//   const handleSubmit = evt => {
//     evt.preventDefault();
//     const user = { name, number, id: editContact.id };
//     dispatch(editContactOperation(user));
//     dispatch(setEditModal());
//     setName('');
//     setNumber('');
//   };

//   return createPortal(
//     <Backdrop onClick={handleBackdropClick}>
//       <Modal onKeyDown={handleEscapeClick}>
//         <Section titlePosition="end" title="Edit the contact">
//           <FormComponent onSubmit={handleSubmit}>
//             <Label>
//               <Span>Edit name</Span>
//               <BsPersonPlus size={15} className="icon" />
//               <Input
//                 type="text"
//                 name="name"
//                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                 required
//                 value={name}
//                 onChange={handleInputChange}
//               />
//             </Label>
//             <Label>
//               <Span>Edit number</Span>
//               <BsTelephonePlus size={15} className="icon" />
//               <Input
//                 type="tel"
//                 name="number"
//                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                 required
//                 value={number}
//                 onChange={handleInputChange}
//               />
//             </Label>
//             <Button type="submit">Edit contact</Button>
//           </FormComponent>
//         </Section>
//         <CloseBtn onClick={onCloseBtnClick}>
//           <BsX size={25} />
//         </CloseBtn>
//       </Modal>
//     </Backdrop>,
//     modalRoot
//   );
// };
