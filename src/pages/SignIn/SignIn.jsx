import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BsEnvelope, BsKey } from 'react-icons/bs';

import { logIn } from 'redux/auth/auth-operations';
import { Container } from 'common/common.styled';
import {
  Button,
  Input,
  Label,
  Span,
} from 'components/ContactForm/ContactForm.styled';

const SignInForm = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = evt => {
    const { name, value } = evt.target;

    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(logIn({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
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
