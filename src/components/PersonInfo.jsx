import React, { useEffect, useRef, useState } from 'react';
import { Card } from 'react-bootstrap';
import '../styles/personinfo.css';

const PersonInfo = ({ currentContent }) => {
	const isMobile = window.innerWidth <= 768;
	const buttonRef = useRef(null);
	const [isButtonClicked, setIsButtonClicked] = useState(false);
	const [isPersonSeparatorVisible, setPersonSeparatorVisible] = useState(
		!isMobile
	);
	const [isContentVisible, setIsContentVisible] = useState(!isMobile);

	useEffect(() => {
		setIsContentVisible(false);
		setPersonSeparatorVisible(false);
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		const handleButtonClick = () => {
			setIsButtonClicked((prevState) => !prevState);
		};

		const buttonElement = buttonRef.current;
		if (buttonElement) {
			buttonElement.addEventListener('click', handleButtonClick);

			return () => {
				buttonElement.removeEventListener('click', handleButtonClick);
			};
		}
	}, []);

	useEffect(() => {
		const aboutPage = document.querySelector('.about-page');
		const resumePage = document.querySelector('.resume-page');
		const contactPage = document.querySelector('.contact-page');

		switch (currentContent) {
			case 'about':
				if (aboutPage) {
					if (isButtonClicked) {
						aboutPage.classList.add('about-page-active');
					} else {
						aboutPage.classList.remove('about-page-active');
					}
				}
				break;
			case 'resume':
				if (resumePage) {
					if (isButtonClicked) {
						resumePage.classList.add('resume-page-active');
					} else {
						resumePage.classList.remove('resume-page-active');
					}
				}
				break;
			case 'contact':
				if (contactPage) {
					if (isButtonClicked) {
						contactPage.classList.add('contact-page-active');
					} else {
						contactPage.classList.remove('contact-page-active');
					}
				}
				break;
			default:
				break;
		}
	}, [isButtonClicked, currentContent]);

	const toggleContentVisibility = () => {
		setIsContentVisible((prevState) => !prevState);
	};

	const switchPersonSeparator = () => {
		setPersonSeparatorVisible(!isPersonSeparatorVisible);
	};

	return (
		<div className="main-block-person">
			<div>
				<Card>
					<Card.Body>
						<div className="person-content">
							<Card.Img variant="top" src="./assets/pause.png" />
							<div>
								<Card.Title className="person-name">Кучер Антон</Card.Title>
								<div className="person-work">
									<Card.Title>Web-разработчик</Card.Title>
								</div>
							</div>
						</div>

						<div
							className={`info-content ${isContentVisible ? 'visible' : ''}`}>
							<div
								className={`person-separator ${
									isContentVisible ? 'visible' : ''
								}`}></div>
							<div className="card-text-container">
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
											className="location"
											src="./assets/location.png"></Card.Img>
									</div>
									<div>
										<p className="info-title">Местоположение</p>
										<p className="info-cont">Ростов-на-Дону</p>
									</div>
								</div>
							</div>
							{isMobile && (
								<div
									className={`person-separator2 ${
										isContentVisible ? 'visible' : ''
									}`}></div>
							)}
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
									<div className="github-img">
										<a
											href="https://github.com/KucherAnton"
											target="_blank"
											rel="noreferrer">
											<img
												className="github"
												src="./assets/github.png"
												alt="Oops, error"></img>
										</a>
									</div>
									<div className="codewars-img">
										<a
											href="https://www.codewars.com/users/KucherAnton"
											target="_blank"
											rel="noreferrer">
											<img
												className="codewars"
												src="./assets/codewars.png"
												alt="Oops, error"></img>
										</a>
									</div>
								</div>
							</Card.Footer>
						</div>
						<button
							className="show-content"
							ref={buttonRef}
							onClick={() => {
								toggleContentVisibility();
								switchPersonSeparator();
							}}>
							{window.innerWidth <= 700 ? (
								isContentVisible ? (
									<img src="./assets/arrowup.png" alt="up-arrow" />
								) : (
									<img src="./assets/arrowdown.png" alt="down-arrow" />
								)
							) : isContentVisible ? (
								'Скрыть контакты'
							) : (
								'Показать контакты'
							)}
						</button>
					</Card.Body>
				</Card>
			</div>
		</div>
	);
};

export default PersonInfo;
