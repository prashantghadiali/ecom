import React, { useEffect, useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap';

function Home() {
    const [post, setPosts] = useState('');
    useEffect(()=> {
        fetch("https://my-json-server.typicode.com/typicode/demo/posts")
        .then(resp => resp.json())
        .then(data => setPosts(data))
        .catch(err => console.log(err))
    }, [])
    console.log("post :", post);
  return (
    <>
        <Container className='mt-4'>
            {post.map((p) =>
            <Card key={p.id} className="mb-4" style={{ minWidth: '15rem', maxWidth: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{p.title}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
             )}
        </Container>
    </>
  )
}

export default Home
