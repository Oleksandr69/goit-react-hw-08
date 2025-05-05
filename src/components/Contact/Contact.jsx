import css from './Contact.module.css';
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

export default function Contact({ contact }) {
  
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div className={css.item}>
      <div>
        <p className={css.text}><FaUser/>     {contact.name} </p>
        <p className={css.text}><FaPhoneAlt/>     {contact.number} </p>
      </div>
      <button className={css.btn} onClick={handleDelete}>
        {/* handleDelete */}
        Delete
      </button>
    </div>
  );
}

