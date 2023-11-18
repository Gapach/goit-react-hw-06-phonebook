import css from './ContactList.module.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { removeContact } from 'redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(getContacts);
    const dispatch = useDispatch();
    const currentFilter = useSelector(getFilter);
    const visibleContacts = contacts.filter(el =>
      el.name.toLowerCase().includes(currentFilter.toLowerCase())
    );
  return (
    <ul className="list">
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
          <button className={css.btn} onClick={() => {
              dispatch(removeContact(id));
            }}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};


export default ContactList;


