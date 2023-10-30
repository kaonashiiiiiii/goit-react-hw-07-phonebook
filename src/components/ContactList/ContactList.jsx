import React from 'react'
import styles from './contactList.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getFilteredContacts, getLoadingStatus } from 'store/selectors/contactSelectors'
import { deleteContact } from 'store/slices/contactsSlice'
import Spinner from 'components/Spinner/Spinner'

const ContactList = () => {
  const isLoading = useSelector(getLoadingStatus)
  const contacts = useSelector(getFilteredContacts)
  const dispath = useDispatch()

  function onDeleteContact (contactId) {
    dispath(deleteContact(contactId))
  }
  
  return (
    <>
      { isLoading ? <Spinner /> : 
        <ul className={styles.list}>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <span>{contact.name}: {contact.phone}</span>
              <button className={styles['list-button']} onClick={() => onDeleteContact(contact.id)}>Delete</button>
            </li>
          ))}
        </ul>
      }
    </>
  )
}

export default ContactList