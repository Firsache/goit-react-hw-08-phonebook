import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { BsEnvelope, BsKey } from 'react-icons/bs';
import { routes } from 'helpers/routes';

import { selectedIsLoggedIn } from 'redux/auth/selectors';
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
  const isLoggedIn = useSelector(selectedIsLoggedIn);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (!isLoggedIn) return;
    navigate(routes.CONTACTS);
  }, [isLoggedIn, navigate]);

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
