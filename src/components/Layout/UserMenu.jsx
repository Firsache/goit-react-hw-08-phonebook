import { useDispatch, useSelector } from 'react-redux';
import { selectedIsLoggedIn, selectedUserName } from 'redux/auth/selectors';

import { logOut } from 'redux/auth/auth-operations';
import defaultPicture from 'img/avatar.svg';
import { MenuUser, Button } from './Header.styled';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { routes } from 'helpers/routes';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectedUserName);
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectedIsLoggedIn);

  const avatar = defaultPicture;
  useEffect(() => {
    if (!isLoggedIn) {
      navigate(routes.LOGIN);
    }
  }, [isLoggedIn, navigate]);

  const handleLogOutClick = () => {
    dispatch(logOut());
  };

  return (
    <MenuUser>
      <img src={avatar} alt={userName} width={23} />
      <div>Welcome, {userName}</div>
      <Button onClick={handleLogOutClick}>Log out</Button>
    </MenuUser>
  );
};
