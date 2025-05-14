import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import css from './UserMenu.module.css';

const UserMenu = () => {


const dispatch = useDispatch();
const userName = useSelector(selectUser);


return (
    <div className={css.userMenu}>
        <p className={css.username}>Welcome,  {userName.name}.</p>
        <button className={css.btn} type='button' onClick={() => { dispatch(logoutThunk()) }}>
          Logout
        </button>
    </div>
)
}
export default UserMenu;