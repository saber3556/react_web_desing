import React, {useState} from 'react';
import {Link, Outlet} from 'react-router-dom';
import MyContacts from './myContacts';
import './contacts.css';

const Contacts = () => {
    const [clicked, setClicked] = useState(false)
    const my_contacts = MyContacts.map((item, index) => <tr key={index}><td>{item[0]}</td><td>{item[1]}</td><td>{item[2]}</td></tr>)
    return (
<>
<header className="Contact-header">
        <nav class="navbar1">
        <div class="max-width">
            <div class="logo"><a href="#">Contact <span>Page.</span></a></div>
            <ul class="menu1">
                <li><Link className="App-link" to='/' rel="noopener noreferrer">Home</Link></li>
                <li><Link className="App-link" to='/Contacts' rel="noopener noreferrer">Contacts</Link></li>
                <li><Link className="App-link" to='/Blog' rel="noopener noreferrer">Blog</Link></li>
            </ul>
            <div class="menu-btn">
                <ion-icon name="list-outline"></ion-icon>
            </div>
        </div>
    </nav>


        <div class="contact" id="contact">
        <div class="max-width">
            <h1 class="title">Contacts</h1>
            <div class="contact-content">
            <div class="column left">
            <div class="taxt"></div> 
            <Link to='' onClick={() => setClicked(false)}><button class="button">Display Contacts</button></Link>
            <Link to='Create' onClick={() => setClicked(true)}><button class="button">Create Contact</button></Link>
            <Outlet />
            <table style={clicked ? {display: 'none'} : {display: ''}} class="styled-table">
                <thead>
                    <tr class="active-row">
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {my_contacts}
                </tbody>
            </table>
            </div>
            </div>
            </div>
            <footer>
            <span >Created By <a href="#">Professionals</a> |<span><ion-icon name="earth-outline"></ion-icon></span> 2023 All Rights Reserved</span>
            </footer>
        </div>
         
        </header>
        
        </>
    )
}

export default Contacts;