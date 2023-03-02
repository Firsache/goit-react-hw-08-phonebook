import { useDispatch, useSelector } from 'react-redux';
import { selectedUserName } from 'redux/auth/selectors';

import { logOut } from 'redux/auth/auth-operations';
import defaultPicture from 'img/avatar.svg';
import { MenuUser, Button } from './Header.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectedUserName);
  const avatar = defaultPicture;

  const handleLogOutClick = () => {
    // console.log('click');
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
