import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { routes } from 'helpers/routes';
import { Layout, Loader } from '../index';

const HomePage = lazy(() => import('pages/Homepage/Homepage'));
const ContactsPage = lazy(() => import('pages/Contacts/Contacts'));
const SignUpFormPage = lazy(() => import('pages/SignUp/SignUp'));
const SignInFormPage = lazy(() => import('pages/SignIn/SignIn'));

export function App() {
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
