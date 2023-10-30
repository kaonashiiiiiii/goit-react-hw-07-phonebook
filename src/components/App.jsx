import { useEffect } from "react";
import { ContactForm, FilterForm, Section, ContactList } from "."
import { useDispatch } from "react-redux";
import { fetchContacts } from "store/slices/contactsSlice";

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContacts())
    //eslint-disable-next-line
  }, [])

  return (
    <div>
      <Section title="Phonebook">
        <ContactForm/>
      </Section>
      <Section title="Contacts">
        <FilterForm />
        <ContactList />
      </Section>
    </div>
  );
}

export default App
