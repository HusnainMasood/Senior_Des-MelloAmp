import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<Navbar bg="primary" expand="lg" variant="dark">
			<Container fluid>
				<Navbar.Brand>
					<Link to="/">MelloAmp</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav className="m-auto">
						<Form className="d-flex">
							<Form.Control
								type="search"
								placeholder="Search"
								className="me-2"
								aria-label="Search"
							/>
						</Form>
					</Nav>
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: '100px' }}
						navbarScroll>
						<Nav.Link>
							<Link to="/mynotes">Home</Link>
						</Nav.Link>
						<NavDropdown title="Said Shaldan" id="navbarScrollingDropdown">
							<NavDropdown.Item href="#action4">My Profile</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action5">Logout</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
