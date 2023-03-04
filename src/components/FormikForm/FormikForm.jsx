import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

// import { BsEnvelope, BsKey } from 'react-icons/bs';
import { routes } from 'helpers/routes';

import { selectedIsLoggedIn } from 'redux/auth/selectors';
import { selectError, selectLoader } from 'redux/contacts/selectors';
import { logIn } from 'redux/auth/auth-operations';
import { Button } from 'components/ContactForm/ContactForm.styled';

import { Loader, Section } from 'components';
import { Container } from 'common/common.styled';
import { TextField } from './TextField';
const FormikForm = () => {
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
export default FormikForm;
