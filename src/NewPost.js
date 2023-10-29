import React, {useState} from 'react';
import MyPosts from './myPosts';

const NewContact = () => {
    const [post, setPost] = useState({})
    return ( 
        <form onSubmit={AddNewPost}>
        <div class="fields">
         <div class="field name">
            <input required autoFocus type='text' onChange={updateResponse} value={post.subject || ''} name='subject' placeholder='Subject' /><br></br>
            </div>
            <div class="field email">
            <input required type='textarea' onChange={updateResponse} value={post.description || ''} name='description' placeholder='Description' /><br></br>
            </div>
            <div class="field">
            <input required type='date' onChange={updateResponse} value={post.date || ''} name='date' placeholder='Date' /><br></br>
            </div>
            <input class="button" type='submit' value='Add New Post' />
            </div>
        </form>
    )

    function updateResponse(event) {
        const name = event.target.name;
        const value = event.target.value;
        setPost({
            ...post,
            [name]: value
        });
    }

    function AddNewPost(event) {
        event.preventDefault();
        MyPosts.push([post.subject, post.description, post.date])
        setPost({})
    }
}

export default NewContact;