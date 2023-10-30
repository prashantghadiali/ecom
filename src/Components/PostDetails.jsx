import React from 'react';
import { Link, useParams } from 'react-router-dom'; // Import useParams from react-router-dom
import { useSelector } from 'react-redux';
import { Button, Card, Container } from 'react-bootstrap';
import NavbarComp from './NavbarComp';
import AddToCartButton from './AddToCartButton';



function PostDetails() {
    const { postId } = useParams(); // For Get the postId from the URL parameters

    const { posts, loading, error } = useSelector((state) => state);
  
    const post =  posts.posts.find(p => p.id == postId);


    if (loading) {
      return <p>Loading...</p>;
    }
    if (error) {
      return <p>Error: {error}</p>;
    }
    return (
      <>
      <NavbarComp />
      <Container className="mt-4">
      <Card>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
          <Card.Text>
            <strong>Price:</strong> &#8377; {post.price}
          </Card.Text>
          <Card.Text>
            <strong>Ratings:</strong> {post.rating}
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <AddToCartButton item={post} />{' '}
      <Link to="/"><Button variant='info'>Back to Home</Button></Link>
    </Container>
    </>
    )
}

export default PostDetails
