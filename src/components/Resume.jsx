import React from 'react';
import '../styles/resume.css';
import { Image } from 'react-bootstrap';

const Resume = () => {
	return (
		<div>
			<div className="experience-block">
				<div className="left-column">
					<div className="book-div">
						<img className="book" src="./assets/book.png" alt="Oops, error" />
					</div>
					<div className="line1"></div>
					<div className="dot"></div>
					<div className="line2"></div>
					<div className="dot"></div>
				</div>
				<div className="right-column">
					<h3 className="resume-title">Образование</h3>
					<div className="experience-item">
						<h3 className="experience-title">
							Донской государственный технический университет
						</h3>
						<p className="experience-year">2022 — н.в.</p>
						<p className="experience-cont">
							Учусь на очной форме обучения
							<br />
							направление Информатика и вычислительная техника
						</p>
					</div>
					<div className="experience-item">
						<h3 className="experience-title">Самообразование</h3>
						<p className="experience-year">2021 — н.в.</p>
						<p className="experience-cont">
							Самостоятельно изучаю различные технологии <br />с помощью
							бесплатных интернет ресурсов
						</p>
					</div>
				</div>
			</div>
			<div>
				<h1 className="resume-works-title">Мои работы</h1>
				<div className="projects">
					<div>
						<p className="project-name">Portfolio</p>
						<div className="project-div">
							<div className="project-image-div">
								<a
									href="https://github.com/KucherAnton/portfolio"
									target="_blank"
									rel="noreferrer">
									<Image
										className="project-image"
										src="./assets/project5.png"></Image>
								</a>
							</div>
						</div>
					</div>
					<div>
						<p className="project-name">React Chess</p>
						<div className="project-div">
							<div className="project-image-div">
								<a
									href="https://github.com/KucherAnton/react_chess"
									target="_blank"
									rel="noreferrer">
									<Image
										className="project-image"
										src="./assets/project4.png"></Image>
								</a>
							</div>
						</div>
					</div>
					<div>
						<p className="project-name">Music Visualizer</p>
						<div className="project-div">
							<div className="project-image-div">
								<a
									href="https://github.com/KucherAnton/music_visualizer"
									target="_blank"
									rel="noreferrer">
									<Image
										className="project-image"
										src="./assets/project3.png"></Image>
								</a>
							</div>
						</div>
					</div>
					<div>
						<p className="project-name">Game of Life</p>
						<div className="project-div">
							<div className="project-image-div">
								<a
									href="https://github.com/KucherAnton/game_of_life"
									target="_blank"
									rel="noreferrer">
									<Image
										className="project-image"
										src="./assets/project2.png"></Image>
								</a>
							</div>
						</div>
					</div>
					<div>
						<p className="project-name">ZinTech company</p>
						<div className="project-div">
							<div className="project-image-div">
								<a
									href="https://github.com/KucherAnton/ZinTech"
									target="_blank"
									rel="noreferrer">
									<Image
										className="project-image"
										src="./assets/project1.png"></Image>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Resume;
