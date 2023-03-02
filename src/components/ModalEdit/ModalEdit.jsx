import { Input, Label, Span } from 'components/ContactForm/ContactForm.styled';
// import { useEffect } from 'react';

import { BsTelephonePlus } from 'react-icons/bs';
import { Backdrop, Modal } from './ModalEdit.styled';

const modalRoot = document.querySelector('#modal-root');

export const ModalEdit = ({ name, number }) => {
  //   useEffect(() => {
  //     function handleEscapeClick(evt) {
  //       if (evt.code === 'Escape') {
  //         onClose();
  //       }
  //     }
  //     window.addEventListener('keydown', handleEscapeClick);
  //     return () => {
  //       window.removeEventListener('keydown', handleEscapeClick);
  //     };
  //   }, [onClose]);

  const onClose = e => {};

  const handleBackdropClick = evt => {
    if (evt.target === evt.currentTarget) {
      //   onClose();
    }
  };

  const handleInputChange = e => {};

  return (
    (
      <Backdrop onClick={handleBackdropClick}>
        <Modal>
          <p>Name: {name}</p>
          <Label>
            <Span>Edit Number</Span>
            <BsTelephonePlus size={15} className="icon" />
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={handleInputChange}
            />
          </Label>
        </Modal>
        <button onClick={onClose}>close</button>
      </Backdrop>
    ),
    modalRoot
  );
};
