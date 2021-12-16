import React, { useState } from 'react';
import { Button, Col, Container, Dropdown, FormControl, InputGroup, Modal, Nav, NavDropdown, Row } from 'react-bootstrap';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="header">
      <Container>
        <Row className="d-flex align-items-center justify-content-xl-start justify-content-center pt-3 pb-xl-3 pb-0">

          <Col xl={2} lg={12}>
            <a href="/" className="d-flex align-items-center justify-content-xl-start justify-content-center mb-2 mb-lg-0 text-white text-decoration-none">
              <img className="img-fluid" src={logo} alt="Logo"/>
            </a>
          </Col>

          <Col xl={7} lg={12}>
            <InputGroup className="search justify-content-center mt-xl-0 mt-2">
              <FormControl
                placeholder="Search for..."
                aria-label="Search for..."
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-secondary" id="button-addon2">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" _css2="
                @media (max-width: ,768px,) {,font-size:20px;,} " className="Searchbar___StyledMdSearch-xnx3kr-5 fHBAIp" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
              </Button>
            </InputGroup>
          </Col>

          <Col xl={3} lg={12}>
            <div className="d-flex justify-content-xl-end justify-content-center">

              <Dropdown onClick={handleShow}>
                <Dropdown.Toggle className="btn-shadow" id="dropdown-basic"><span><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg></span>
                </Dropdown.Toggle>
              </Dropdown>
              
              <Modal show={show} onHide={handleClose} className="modal-right">
                  <Modal.Header closeButton>
                    <Modal.Title>My Cart</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>Coming Soon</p>
                  </Modal.Body>
                  {/* <Modal.Footer className="text-center">
                    <Button className="btn btn-checkout d-flex justify-content-center w-100">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path></svg>
                      <span>Process To checkout</span>
                    </Button>
                  </Modal.Footer> */}
              </Modal>

              <Dropdown>
                <Dropdown.Toggle className="btn-shadow" id="dropdown-basic"><span><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg></span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Coming soon</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown>
                <Dropdown.Toggle className="btn-shadow" id="dropdown-basic"><span><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Coming soon</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown>
                <Dropdown.Toggle className="btn-shadow" id="dropdown-basic"><span><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Coming soon</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

            </div>
          </Col>

        </Row>
      </Container>
      
      <div className="menu-bar">
        <Container>
          <Nav className="main-menu-bar d-flex align-items-center justify-content-between" activeKey="/home">
            <NavDropdown className="menubar-dropdown py-1" title="CATEGORIES" id="nav-dropdown">
              <NavDropdown.Item>Coming soon</NavDropdown.Item>
            </NavDropdown>
            <div className="d-flex menu-items">
              <Nav.Item>
                <Nav.Link href="/shop">SHOP</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/review">REVIEW</Nav.Link>
              </Nav.Item>
            </div>
          </Nav>
        </Container>
      </div>
    </div>
  );
};

export default Header;