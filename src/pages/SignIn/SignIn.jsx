import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

import { routes } from 'helpers/routes';

import { selectedIsLoggedIn } from 'redux/auth/selectors';
import { selectError, selectLoader } from 'redux/contacts/selectors';
import { logIn } from 'redux/auth/auth-operations';
import { Button } from 'components/ContactForm/ContactForm.styled';

import { Loader, Section } from 'components';
import { Container } from 'common/common.styled';
import { TextField } from 'components/FormikForm/TextField';

const SignInForm = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectedIsLoggedIn);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoader);
  const navigate = useNavigate();

  const config = [
    { label: 'Email', type: 'email', name: 'email' },
    { label: 'Password', type: 'password', name: 'password' },
  ];
  const initialValues = {
    email: '',
    password: '',
  };
  const validationSchema = Yup.object({
    password: Yup.string()
      .min(7, 'Must be more than 7 characters')
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
  });
  const onSubmit = values => {
    dispatch(logIn(values));
  };

  useEffect(() => {
    if (!isLoggedIn) return;
    navigate(routes.CONTACTS);
  }, [isLoggedIn, navigate]);

  return (
    <Container>
      <Section title="Sign In">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            {config.map(({ label, type, name }) => (
              <TextField key={name} label={label} type={type} name={name} />
            ))}
            <Button type="submit">Sign In</Button>
          </Form>
        </Formik>
      </Section>

      {loading && <Loader />}
      {error && <div>Ooops, something went wrong.. Try a bit later</div>}
    </Container>
  );
};
export default SignInForm;

// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// import { BsEnvelope, BsKey } from 'react-icons/bs';
// import { routes } from 'helpers/routes';

// import { Loader, Section } from 'components';
// import { selectedIsLoggedIn } from 'redux/auth/selectors';
// import { selectError, selectLoader } from 'redux/contacts/selectors';
// import { logIn } from 'redux/auth/auth-operations';
// import { Container } from 'common/common.styled';
// import {
//   Button,
//   Input,
//   Label,
//   Span,
// } from 'components/ContactForm/ContactForm.styled';

// const SignInForm = () => {
//   const dispatch = useDispatch();
//   const isLoggedIn = useSelector(selectedIsLoggedIn);
//   const error = useSelector(selectError);
//   const loading = useSelector(selectLoader);
//   const navigate = useNavigate();

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   useEffect(() => {
//     if (!isLoggedIn) return;
//     navigate(routes.CONTACTS);
//   }, [isLoggedIn, navigate]);

//   const handleInputChange = evt => {
//     const { name, value } = evt.target;

//     if (name === 'email') setEmail(value);
//     if (name === 'password') setPassword(value);
//   };

//   const handleSubmit = evt => {
//     evt.preventDefault();
//     dispatch(logIn({ email, password }));

//     setEmail('');
//     setPassword('');
//   };

//   return (
//     <Container>
//       <Section title="Sign In">
//         <form onSubmit={handleSubmit}>
//           <Label>
//             <Span>Email</Span>
//             <BsEnvelope size={15} className="icon" />
//             <Input
//               type="email"
//               name="email"
//               required
//               value={email}
//               onChange={handleInputChange}
//             />
//           </Label>
//           <Label>
//             <Span>Password</Span>
//             <BsKey size={15} className="icon" />
//             <Input
//               type="password"
//               name="password"
//               required
//               value={password}
//               onChange={handleInputChange}
//             />
//           </Label>
//           <Button type="submit">Sign In</Button>
//         </form>
//       </Section>

//       {loading && <Loader />}
//       {error && <div>Ooops, something went wrong.. Try a bit later</div>}
//     </Container>
//   );
// };
// export default SignInForm;
