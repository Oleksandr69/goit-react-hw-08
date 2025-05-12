import css from './ContactList.module.css'
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectLoading, selectError, selectFilteredContacts } from '../../redux/contacts/selectors';
import Loader from '../Loader/Loader';

const ContactList = () => {
    const error = useSelector(selectError);
    const loading = useSelector(selectLoading);
    const contact = useSelector(selectFilteredContacts);

    // console.log(contact, searchName);  
   
    return <div>
        {loading && <h3>Please wait. Loading...<Loader color='blue' loading={loading}/></h3>}
        {error && <h2>Sorry. Server is dead...<Loader color='red' loading={loading}/></h2>}
        <ul className={css.list}>
        {contact.map((card) => {

                return (<li key={card.id} className={css.cardItem}>
                    <Contact
                        contact={card}
                    />
                </li>);
            // }
        
        })}

        </ul>

        </div>
};

export default ContactList;