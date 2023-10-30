import React, { useState } from 'react';
import '../App.css'
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { addPost } from '../redux/actions';
import { Link, useNavigate } from 'react-router-dom';

function CreatePost() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    // setting up state locally
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');

  // add post to redux and redirect to home page using navigate
  const handleAddPost = (event) => {
    event.preventDefault()
    const newPost = {
      id: Date.now(), // You can use a more sophisticated ID generation logic
      title,
      body,
      rating,
      price
    };
    dispatch(addPost(newPost));
    navigate('/');
    toast.success('Post added successfully!');
  };
  return (
    <div>
      <div className='App-header'>
        <h2>Create New Post</h2>
        <Form onSubmit={handleAddPost}>
            <Form.Group controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                type="text"
                placeholder="Enter post title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="formBody">
                <Form.Label>Body</Form.Label>
                <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter post body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="formBody">
                <Form.Label>Price</Form.Label>
                <Form.Control
                type="number"
                rows={3}
                placeholder="Enter Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="formBody">
                <Form.Label>Ratings</Form.Label>
                <Form.Control
                type="number"
                rows={3}
                placeholder="Enter Ratings"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                />
            </Form.Group>
            <br />
            <Button variant="primary" type="submit">
                Add Post
            </Button>{' '}
            <Link to="/"><Button variant='info'>Back to Home</Button></Link>
            </Form>
      </div>
    </div>
  )
}

export default CreatePost
