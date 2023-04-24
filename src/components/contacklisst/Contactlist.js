import React from 'react';
import PropTypes from 'prop-types';
import css from './Contactlist.module.css';
const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={css.contList}>
    {contacts.map(contact => (
      <li key={contact.id} className={css.listItem}>
        {contact.name}: {contact.number}
        <button
          className={css.myButton}
          onClick={() => onDeleteContact(contact.id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
