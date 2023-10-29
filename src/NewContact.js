import React, {useState} from 'react';
import MyContacts from './myContacts';
import './contacts.css'; 

const NewContact = () => {
    const [contact, setContact] = useState({})
    return ( 
        <form onSubmit={AddNewContact}>
        <div class="fields">
            <div class="field name">
            <input autoFocus required type='text' onChange={updateResponse} value={contact.name || ''} name='name' placeholder='Name' /><br></br>
            </div>
            <div class="field email">
            <input required type='text' onChange={updateResponse} value={contact.phoneNumber || ''} name='phoneNumber' placeholder='Phone Number' /><br></br>
            </div>
            <div class="field">
            
            <input required type='email' onChange={updateResponse} value={contact.email || ''} name='email' placeholder='Email' /><br></br>
            </div>
            <input  class="button" type='submit' value='Add New Contact' />
            </div>
            
        </form>
    )

    function updateResponse(event) {
        const name = event.target.name;
        const value = event.target.value;
        setContact({
            ...contact,
            [name]: value
        });
    }

    function AddNewContact(event) {
        event.preventDefault();
        MyContacts.push([contact.name, contact.phoneNumber, contact.email]);
        setContact({})
    }
}

export default NewContact;