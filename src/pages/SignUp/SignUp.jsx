import { BsEnvelope, BsLock } from 'react-icons/bs';
import {
  Button,
  Input,
  Label,
  Span,
} from 'components/ContactForm/ContactForm.styled';
import { useState } from 'react';
import { Container } from 'components/App/App.styled';

const SignUpForm = () => {
  //   const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = evt => {
    const { name, value } = evt.target;

    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    //     dispatch(getSignUpFrom({ email, password }));
    //     setEmail('');
    //   setPassword('');
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
          <BsLock size={15} className="icon" />
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

export default SignUpForm;
