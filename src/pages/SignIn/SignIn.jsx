import { BsEnvelope, BsPersonPlus, BsKey } from 'react-icons/bs';

import {
  Button,
  Input,
  Label,
  Span,
} from 'components/ContactForm/ContactForm.styled';
import { useState } from 'react';
import { Container } from 'components/App/App.styled';

const SignInForm = () => {
  //   const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = evt => {
    const { name, value } = evt.target;

    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    //     dispatch(getSignInFrom({ name: name.trim(), email, password }));
    //     setName('');
    //     setEmail('');
    //   setPassword('');
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Label>
          <Span>Name</Span>
          <BsPersonPlus size={15} className="icon" />
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleInputChange}
          />
        </Label>
        <Label>
          <Span>Email</Span>
          <BsEnvelope size={15} className="icon" />
          <Input
            type="email"
            name="email"
            required
            value={email}
            onChange={handleInputChange}
          />
        </Label>
        <Label>
          <Span>Password</Span>
          <BsKey size={15} className="icon" />
          <Input
            type="password"
            name="password"
            required
            value={password}
            onChange={handleInputChange}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </form>
    </Container>
  );
};
export default SignInForm;
