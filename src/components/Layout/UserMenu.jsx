import { useDispatch, useSelector } from 'react-redux';
import { selectedUserName } from 'redux/auth/selectors';
import { useMediaQuery } from 'react-responsive';

import { logOut } from 'redux/auth/auth-operations';
import defaultPicture from 'img/avatar.svg';
import { MenuUser, Button } from './Header.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectedUserName);
  const avatar = defaultPicture;

  const isDesktop = useMediaQuery({ minWidth: 767 });

  const handleLogOutClick = () => {
    dispatch(logOut());
  };

  return (
    <MenuUser>
      <img src={avatar} alt={userName} width={23} />
      {isDesktop && <div>Welcome, {userName}</div>}
      <Button onClick={handleLogOutClick}>Log out</Button>
    </MenuUser>
  );
};
