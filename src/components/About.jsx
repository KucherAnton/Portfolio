import React from 'react';
import Swal from 'sweetalert2';
import '../styles/about.css';

const About = () => {
	const handleClick = () => {
		setTimeout(() => {
			Swal.fire({
				icon: 'success',
				title: 'Сообщение отправлено!',
				width: '26rem',
				color: '#e1e1e1',
				position: 'center',
				background: 'rgb(42,42,42)',
				showConfirmButton: false,
				iconColor: 'gray',
				timer: 300000,
			});
		}, 500);
	};

	return (
		<div>
			<div className="main-info">
				Привет! Меня зовут Антон и я являюсь веб-разработчиком со стажем более
				3-х лет. Моя специализация — это создание высококачественных веб-сайтов,
				которые соответствуют требованиям и ожиданиям моих клиентов. Я работаю с
				различными технологиями и языками программирования, такими как HTML,
				CSS, JavaScript и React. Если вы заинтересованы в моих услугах,
				свяжитесь со мной через форму обратной связи на этом сайте. Я буду рад
				обсудить ваши потребности и предложить решение, которое наилучшим
				образом соответствует вашим требованиям.
			</div>
			<div>
				<p>Чем я занимаюсь</p>
				<div>
					<div></div>
					<div>
						<button onClick={handleClick}></button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
