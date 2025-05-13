import css from './AppBar.module.css';
import  Navigation  from '../Navigation/Navigation';
import  UserMenu  from '../UserMenu/UserMenu';
import  AuthNav  from '../AuthNav/AuthNav';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';



const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
      <header className={css.headerApp}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
    )
}

export default AppBar;
