import React, { useState } from 'react'
import styles from './contactForm.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getContacts } from 'store/selectors/contactSelectors'
import { addContact } from 'store/slices/contactsSlice'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const contacts = useSelector(getContacts)
  const dispatch = useDispatch()

  function checkContact (contact) {
    const isContantExist = contacts.find(item => item.name === contact.name)
    if (isContantExist) {
      alert (`${contact.name} is already in contacts`)
      return false
    }
    return true
  }

  function resetForm () {
    setName('')
    setPhone('')
  }

  function onAddContactClick () {
    if (!name || !phone) return
    const contact = {
      name,
      phone,
    }
    if (checkContact(contact)) {
      dispatch(addContact(contact))
    }
    resetForm()
  }
  return (
    <form className={styles['contact-form']}>
      <div>
        <label htmlFor="name">Name</label>
        <input value={name} type="text" name="name" required onChange={(e) => setName(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="number">Number</label>
        <input value={phone} type="tel" name="number" required onChange={(e) => setPhone(e.target.value)}/>
      </div>

      <button className={styles['contact-button']} type="button" onClick={onAddContactClick}>Add</button>
    </form>
  )
}

export default ContactForm