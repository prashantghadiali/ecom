import React from 'react'
import {  Container } from 'react-bootstrap';
import Posts from './Posts';
import NavbarComp from '../Components/NavbarComp';

function Home() {
  return (
    <>
        <NavbarComp />
        <Container className='mt-4'>
            <Posts />      
        </Container>  
    </>
  )
}

export default Home
