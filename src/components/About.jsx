import React from 'react';
import '../styles/about.css';

const About = () => {
	return (
		<div className="about-page">
			<div>
				<h6 className="main-info-text">
					Привет! Меня зовут Антон, я фронтенд-разработчик. Моя цель - создавать
					веб-сайты, которые сочетают в себе эстетику и функциональность,
					удовлетворяя потребности пользователей.
				</h6>
				<h6 className="main-info-text">
					Мои навыки включают в себя владение HTML, CSS и JavaScript, а также
					опыт работы с библиотекой React. На веб-сайте есть ссылка на Github,
					где вы можете ознакомиться с моими работами, а также ссылка на профиль
					CodeWars.
				</h6>
				<h6 className="main-info-text">
					Я ищу возможность применить свои знания и навыки в динамичной команде,
					в которой смогу развиваться и стремиться к профессиональному росту в
					области веб-разработки. Если вы заинтересованы в моих навыках, вы
					можете связаться со мной через форму на веб-сайте, буду рад обсудить
					возможность сотрудничества и ответить на любые вопросы.
				</h6>
			</div>
			<div>
				<p className="work-title">Чем я занимаюсь</p>
				<div className="specialization-works">
					<div className="work-type">
						<img
							className="work-image-web"
							src="./assets/web.png"
							alt="Oops, error"
						/>
						<p className="work-text">Верстка и стилизация веб-страниц</p>
					</div>
					<div className="work-type">
						<img
							className="work-image-js"
							src="./assets/script.png"
							alt="Oops, error"
						/>
						<p className="work-text">
							Создание JavaScript-скриптов для придания динамичности веб-сайтам
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
