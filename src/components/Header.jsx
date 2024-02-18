import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
        <Navbar style={{backgroundColor:"grey"}}>
        <Container>
          <Navbar.Brand >
            <Link to={'/'} className='fs-4' style={{textDecoration:'none',color:'black'}} >
          <i className="fa-solid fa-cloud-arrow-down fa-fade"></i>{' '}
          
            Media Player
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header