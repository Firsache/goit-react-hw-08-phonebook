import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

import { routes } from 'helpers/routes';

import { selectedIsLoggedIn } from 'redux/auth/selectors';
import { selectError, selectLoader } from 'redux/contacts/selectors';
import { register } from 'redux/auth/auth-operations';
import { Button } from 'components/ContactForm/ContactForm.styled';

import { Loader, Section } from 'components';
import { Container } from 'common/common.styled';
import { TextField } from 'components/FormikForm/TextField';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectedIsLoggedIn);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoader);
  const navigate = useNavigate();

  const config = [
    { label: 'Name', type: 'text', name: 'name' },
    { label: 'Email', type: 'email', name: 'email' },
    { label: 'Password', type: 'password', name: 'password' },
  ];
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Must be more than 7 characters')
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    password: Yup.string()
      .min(7, 'Must be more than 7 characters')
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
  });
  const onSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
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
export default RegisterForm;

// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { BsEnvelope, BsPersonPlus, BsKey } from 'react-icons/bs';

// import { Loader, Section } from 'components';
// import { routes } from 'helpers/routes';
// import { selectedIsLoggedIn } from 'redux/auth/selectors';
// import { selectError, selectLoader } from 'redux/contacts/selectors';
// import { register } from 'redux/auth/auth-operations';

// import { Container } from 'common/common.styled';
// import {
//   Button,
//   Input,
//   Label,
//   Span,
// } from 'components/ContactForm/ContactForm.styled';

// const RegisterForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();
//   const isLoggedIn = useSelector(selectedIsLoggedIn);
//   const error = useSelector(selectError);
//   const loading = useSelector(selectLoader);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!isLoggedIn) return;
//     navigate(routes.CONTACTS);
//   }, [isLoggedIn, navigate]);

//   const handleInputChange = evt => {
//     const { name, value } = evt.target;

//     if (name === 'name') setName(value);
//     if (name === 'email') setEmail(value);
//     if (name === 'password') setPassword(value);
//   };

//   const handleSubmit = evt => {
//     evt.preventDefault();
//     dispatch(register({ name: name.trim(), email, password }));

//     setName('');
//     setEmail('');
//     setPassword('');
//   };

//   return (
//     <Container>
//       <Section title="Sign Up">
//         <form onSubmit={handleSubmit}>
//           <Label>
//             <Span>Name</Span>
//             <BsPersonPlus size={15} className="icon" />
//             <Input
//               type="text"
//               name="name"
//               minLength={3}
//               maxLength={20}
//               required
//               value={name}
//               onChange={handleInputChange}
//             />
//           </Label>
//           <Label>
//             <Span>Email</Span>
//             <BsEnvelope size={15} className="icon" />
//             <Input
//               type="email"
//               name="email"
//               minLength={3}
//               maxLength={30}
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
//               minLength={7}
//               maxLength={20}
//               required
//               value={password}
//               onChange={handleInputChange}
//             />
//           </Label>
//           <Button type="submit">Sign Up</Button>
//         </form>
//       </Section>
//       {loading && <Loader />}
//       {error && <div>Ooops, something went wrong.. Try a bit later</div>}
//     </Container>
//   );
// };

// export default RegisterForm;
