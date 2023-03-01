import { BsEnvelope, BsLock } from 'react-icons/bs';
import { Section } from 'components';
import {
  Button,
  FormComponent,
  Input,
  Label,
  Span,
} from 'components/ContactForm/ContactForm.styled';
import { useState } from 'react';

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
    <Section titlePosition="end" title="Add contacts">
      <FormComponent onSubmit={handleSubmit}>
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
      </FormComponent>
    </Section>
  );
};

export default SignUpForm;
