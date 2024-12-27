import React from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
<Container  className='p-0'>
      <Navbar expand="lg" className="shadow-sm">
        <Container>
          <Link to={'/dashboard/home'} 
           style={{ textDecoration: 'none' }}
          >

          <Navbar.Brand  className='text-warning ms-5'>Dashboard</Navbar.Brand>
          </Link>

          <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto" className=' d-flex align-items-center'>
            
          <button className='border-0 bg-transparent'>
          <i className="fa-regular fa-bell me-5"></i>
          </button>
          </Col>
        </Row>
      </Form>

        </Container>
      </Navbar>
    </Container>

  )
}
