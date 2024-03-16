import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import '../styles/navbarcomp.css';

const NavBarComp = ({ handleContentChange, currentContent }) => {
	return (
		<Navbar expand="lg" className="bg-body-tertiary">
			<Container>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<div>
							<Nav.Link
								href="#info"
								onClick={() => handleContentChange('about')}
								className={currentContent === 'about' ? 'active-page' : ''}>
								Обо мне
							</Nav.Link>
						</div>
						<div>
							<Nav.Link
								href="#resume"
								onClick={() => handleContentChange('resume')}
								className={currentContent === 'resume' ? 'active-page' : ''}>
								Резюме
							</Nav.Link>
						</div>
						<div>
							<Nav.Link
								href="#contact"
								onClick={() => handleContentChange('contact')}
								className={currentContent === 'contact' ? 'active-page' : ''}>
								Связаться
							</Nav.Link>
						</div>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBarComp;
