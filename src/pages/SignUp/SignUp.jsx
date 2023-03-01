import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BsEnvelope, BsPersonPlus, BsKey } from 'react-icons/bs';

import { register } from 'redux/auth/auth-operations';
import { Container } from 'common/common.styled';
import {
  Button,
  Input,
  Label,
  Span,
} from 'components/ContactForm/ContactForm.styled';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = evt => {
    const { name, value } = evt.target;

    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(register({ name: name.trim(), email, password }));

    setName('');
    setEmail('');
    setPassword('');
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
            minLength={3}
            maxLength={20}
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
            minLength={3}
            maxLength={30}
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
            minLength={7}
            maxLength={20}
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

export default RegisterForm;
