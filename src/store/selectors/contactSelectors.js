const getContacts = (state) => state.contacts.contacts.items

const getFilter = (state) => state.contacts.filter

const getFilteredContacts = (state) => {
  const contacts = state.contacts.contacts.items
  const filter = state.contacts.filter
  if (!filter) return contacts

  return contacts.filter(contact => {
    if (contact.name.toLowerCase().includes(filter.toLowerCase())) return true
      
    return false
  })
}

const getLoadingStatus = (state) => state.contacts.contacts.isLoading

export {
  getContacts,
  getFilter,
  getFilteredContacts,
  getLoadingStatus
}