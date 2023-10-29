import React from 'react';

import './home.css';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <>

        
        <nav class="navbar">
        <div class="max-width">
            <div class="logo"><a href="#">Home<span>Page.</span></a></div>
            <ul class="menu">
                <li><Link className="App-link" to='/' rel="noopener noreferrer">Home</Link></li>
                <li><Link className="App-link" to='/Contacts' rel="noopener noreferrer">Contacts</Link></li>
                <li><Link className="App-link" to='/Blog' rel="noopener noreferrer">blog</Link></li>
            </ul>
            <div class="menu-btn">
                <ion-icon name="list-outline"></ion-icon>
            </div>
        </div>
    </nav>

        <div class="home" id="home">
         <div class="max-width">
          <div class="home-content">
            <div class="text-1">Hello,</div>
            <div class="text-3"> We are : <span class="typing"></span></div>
            <div class="text-2">Welcome to Our Homepage</div>
            
            <p class="text-4">
                You can browse our page with the <Link className="App-link" to='/Contacts' rel="noopener noreferrer">Contacts</Link> or <Link className="App-link" to='/Blog' rel="noopener noreferrer">blog</Link> links
            </p>
          </div>
         </div>
        </div>
       
        </>
    )
}

export default Home;