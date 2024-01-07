// import logo from './logo.svg';
import { IoPersonAddSharp } from "react-icons/io5";
import React, {useEffect, useState} from "react";
import "./App.css";
import Contacts from "./components/Contacts";
import contactsData from "./contacts.json";
import AddContact from "./components/AddContact";
function App() {
  const [showForm, setShowForm] = useState(false);
  const [contacts, setContacts] = useState(contactsData);

  useEffect(() => {
    fetch("http://localhost:3005/contact")
      .then((res) => res.json())
      .then((res) => {
        // login
        console.log(res);
        setContacts([...contacts, ...res.contacts]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <>
    <div className="header">
      <h1>Contacts App</h1>
    </div>
    <div className="outerContainer">
      <div className="leftContainer">
        <p>{contacts.map((contact) => (<Contacts contactProp={contact}/>))}</p>
      </div>
      <div className="rightContainer">
        {
          showForm && <AddContact/>
        }
      </div>
      <div
        onClick={() => {
          setShowForm(!showForm);
        }}
        className="addButton"
        title="add contact"
      >
        <IoPersonAddSharp size={25} color="white" />
      </div>
    </div>
  </>
}

export default App;
