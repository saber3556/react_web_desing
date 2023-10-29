import React, {useState} from 'react';
import {Link, Outlet} from 'react-router-dom';
import MyPosts from './myPosts';
import './blog.css';

const Blog = () => {
    const [clicked, setClicked] = useState(false)
    const posts = MyPosts.map((item, index) => <tr key={index}><td>{item[0]}</td><td>{item[1]}</td><td>{item[2]}</td></tr>)
    return (

        <header className="Contact-header">
        <nav class="navbar2">
        <div class="max-width">
            <div class="logo"><a href="#">Blog <span>Page.</span></a></div>
            <ul class="menu2">
                <li><Link className="App-link" to='/' rel="noopener noreferrer" onClick="history.go(0)">Home</Link></li>
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
        <h1 class="title1">Blogs</h1>
        <div class="contact-content">
        <div class="column left">
        <div class="taxt"></div> 
            <Link to='' onClick={() => setClicked(false)}><button class="button">List all Posts</button></Link>
            <Link to='Create' onClick={() => setClicked(true)}><button class="button">Create Post</button></Link>
            <Outlet />
            <table style={clicked ? {display: 'none'} : {display: ''}} class="styled-table">
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Description</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {posts}
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
    )
}

export default Blog;