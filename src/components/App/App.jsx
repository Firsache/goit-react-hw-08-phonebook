import { lazy, Suspense, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { routes } from 'helpers/routes';
import { Layout, Loader } from '../index';
import { selectToken } from 'redux/auth/selectors';
import { getCurrentUser } from 'redux/auth/auth-operations';

const HomePage = lazy(() => import('pages/Homepage/Homepage'));
const ContactsPage = lazy(() => import('pages/Contacts/Contacts'));
const SignUpFormPage = lazy(() => import('pages/SignUp/SignUp'));
const SignInFormPage = lazy(() => import('pages/SignIn/SignIn'));

export function App() {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(token);

    if (!token) return;

    dispatch(getCurrentUser());
  }, [dispatch, token]);
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
