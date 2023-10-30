import React from 'react'
import styles from './contactList.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getError, getFilteredContacts, getLoadingStatus } from 'store/selectors/contactSelectors'
import { deleteContact } from 'store/slices/contactsSlice'
import { Spinner, ErrorMessage } from 'components'

const ContactList = () => {
  const isLoading = useSelector(getLoadingStatus)
  const error = useSelector(getError)
  const contacts = useSelector(getFilteredContacts)
  const dispath = useDispatch()

  function onDeleteContact (contactId) {
    dispath(deleteContact(contactId))
  }
  
  function contactListContent () {
    return (
      <ul className={styles.list}>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <span>{contact.name}: {contact.phone}</span>
            <button className={styles['list-button']} onClick={() => onDeleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    )
  }

  const errorMsg = error ? <ErrorMessage/> : null
  const loader = isLoading ? <Spinner /> : null
  const contactList = (!errorMsg && ! loader) ? contactListContent() : null
  return (
    <>
      {errorMsg}
      {loader}
      {contactList}
    </>
  )
}

export default ContactList