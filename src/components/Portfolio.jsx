import React, { useState } from 'react';
import '../styles/portfolio.css';
import Card from 'react-bootstrap/Card';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import About from './About';
import Resume from './Resume';
import Contact from './Contact';

const Portfolio = () => {
	const [currentContent, setCurrentContent] = useState('about');

	const renderContent = () => {
		switch (currentContent) {
			case 'about':
				return <About />;
			case 'resume':
				return <Resume />;
			case 'contact':
				return <Contact />;
			default:
				return <About />;
		}
	};

	return (
		<div id="wrapper">
			<div className="main-block">
				<div className="main-block-person">
					<div className="person-info">
						<Card>
							<Card.Body>
								<Card.Img variant="top" src="./assets/pause.png" />
								<Card.Title className="person-name">Кучер Антон</Card.Title>
								<div className="person-work">
									<Card.Title>Web-разработчик</Card.Title>
								</div>
								<div className="person-separator"></div>
								<div>
									<div className="card-text">
										<div className="person-card-image">
											<Card.Img
												className="email"
												src="./assets/email.png"></Card.Img>
										</div>
										<div>
											<p className="info-title">E-mail</p>
											<p className="info-cont">KucherAnton200@gmail.com</p>
										</div>
									</div>
									<div className="card-text">
										<div className="person-card-image">
											<Card.Img
												className="phone"
												src="./assets/phone.png"></Card.Img>
										</div>
										<div>
											<p className="info-title">Телефон</p>
											<p className="info-cont">+7(928)177-91-07</p>
										</div>
									</div>
									<div className="card-text">
										<div className="person-card-image">
											<Card.Img
												className="github"
												src="./assets/github.png"></Card.Img>
										</div>
										<div>
											<p className="info-title">Github</p>
											<a
												href="https://github.com/KucherAnton"
												target="_blank"
												rel="noreferrer"
												style={{ textDecoration: 'none' }}>
												<p className="info-cont">KucherAnton</p>
											</a>
										</div>
									</div>
									<div className="card-text">
										<div className="person-card-image">
											<Card.Img
												className="location"
												src="./assets/location.png"></Card.Img>
										</div>
										<div>
											<p className="info-title">Местоположение</p>
											<p className="info-cont">Ростов-на-Дону</p>
										</div>
									</div>
								</div>
								<Card.Footer>
									<div className="footer-icons">
										<div className="telegram-img">
											<a
												href="https://t.me/Anton_Kucher"
												target="_blank"
												rel="noreferrer">
												<img
													className="tg"
													src="./assets/telegram.png"
													alt="Oops, error"></img>
											</a>
										</div>
										<div className="vk-img">
											<a
												href="https://vk.com/anton_kucher"
												target="_blank"
												rel="noreferrer">
												<img
													className="vk"
													src="./assets/vk.png"
													alt="Oops, error"></img>
											</a>
										</div>
									</div>
								</Card.Footer>
							</Card.Body>
						</Card>
					</div>
				</div>
				<div className="main-separator"></div>
				<div className="main-block-info">
					<div className="main-title">
						<p className="main-title-p">
							{currentContent === 'about'
								? 'Обо мне'
								: currentContent === 'resume'
								? 'Резюме'
								: 'Связаться'}
						</p>
					</div>
					<div className="info-separator"></div>
					<Navbar expand="lg" className="bg-body-tertiary">
						<Container>
							<Navbar.Collapse id="basic-navbar-nav">
								<Nav className="me-auto">
									<div>
										<Nav.Link
											href="#info"
											onClick={() => setCurrentContent('about')}
											className={
												currentContent === 'about' ? 'active-page' : ''
											}>
											Обо мне
										</Nav.Link>
									</div>
									<div>
										<Nav.Link
											href="#resume"
											onClick={() => setCurrentContent('resume')}
											className={
												currentContent === 'resume' ? 'active-page' : ''
											}>
											Резюме
										</Nav.Link>
									</div>
									<div>
										<Nav.Link
											href="#contact"
											onClick={() => setCurrentContent('contact')}
											className={
												currentContent === 'contact' ? 'active-page' : ''
											}>
											Связаться
										</Nav.Link>
									</div>
								</Nav>
							</Navbar.Collapse>
						</Container>
					</Navbar>
					<TransitionGroup>
						<CSSTransition key={currentContent} classNames="fade" timeout={300}>
							<div className="render-content">{renderContent()}</div>
						</CSSTransition>
					</TransitionGroup>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
