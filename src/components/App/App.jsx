import { lazy, Suspense, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { routes } from 'helpers/routes';
import { Layout, Loader } from '../index';
import { getCurrentUser } from 'redux/auth/auth-operations';

const HomePage = lazy(() => import('pages/Homepage/Homepage'));
const ContactsPage = lazy(() => import('pages/Contacts/Contacts'));
const SignUpFormPage = lazy(() => import('pages/SignUp/SignUp'));
// const SignInFormPage = lazy(() => import('components/FormikForm/FormikForm'));
const SignInFormPage = lazy(() => import('pages/SignIn/SignIn'));

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={routes.HOME} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={routes.REGISTER} element={<SignUpFormPage />} />
          <Route path={routes.LOGIN} element={<SignInFormPage />} />
          <Route path={routes.CONTACTS} element={<ContactsPage />} />
        </Route>
        <Route path="*" element={<Navigate to={routes.HOME} />} />
      </Routes>
    </Suspense>
  );
}
