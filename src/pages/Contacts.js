// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { fetchContacts } from 'helpers/operations';

import { selectContact, selectError, selectLoading } from 'redux/selectors';
import { FormHeader, MainContainer } from 'components/App.styled';
import { ContactForm } from 'components/contactForm/contactForm';
import { Filter } from 'components/filter/filter';
import { ContactsText } from 'components/contactList/contactList.styled';
import { ContactList } from 'components/contactList/contactList';


const Contacts = () => {
  const contacts = useSelector(selectContact);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <MainContainer>
      <ToastContainer autoClose={2000} />
      <FormHeader>Phonebook</FormHeader>
      <ContactForm />
      <FormHeader>Contacts</FormHeader>
      <Filter />
      {isLoading && <ContactsText>Loading contacts...</ContactsText>}
      {error && <p>{error}</p>}
      {contacts && <ContactList />}
    </MainContainer>
  );
};

export default Contacts;
