import React from 'react';
import { useHistory } from 'react-router';
import { FaUserCircle } from 'react-icons/fa';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Redirect } from 'react-router';

const Drop = () => {
  const history = useHistory();

  const Logout = () => {
    sessionStorage.removeItem('userData');
    history.push('/');
  };
  return (
    <>
      <Navbar variant="transparent" bg="transparent" expand="lg">
        <Container fluid>
          <FaUserCircle style={{ color: 'white', fontSize: '30px' }} />

          <Navbar.Toggle aria-controls="navbar-dark-example" />
          <Navbar.Collapse id="navbar-dark-example">
            <Nav>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title=""
                menuVariant="light"
              >
                <NavDropdown.Item
                  href="#action/3.1"
                  as="button"
                  onClick={Logout}
                >
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Drop;
