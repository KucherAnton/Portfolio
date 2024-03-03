import React, { useRef } from 'react';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import '../styles/contact.css';

const Contact = () => {
	const form = useRef();

	const handleClick = () => {
		setTimeout(() => {
			Swal.fire({
				position: 'center',
				icon: 'success',
				title: 'Сообщение отправлено',
				showConfirmButton: false,
				timer: 2000,
			});
		}, 400);
	};

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm('service_d9j84rj', 'template_a79x2gp', form.current, {
				publicKey: '-uRNut99FVaIlzjuu',
			})
			.then(
				() => {
					console.log('SUCCESS!');
					e.target.reset();
				},
				(error) => {
					console.log('FAILED...', error.text);
				}
			);
	};

	return (
		<form ref={form} onSubmit={sendEmail} className="form">
			<div className="form-contacts">
				<div>
					<input
						type="text"
						placeholder="Имя"
						className="contactName"
						name="user_name"
					/>
				</div>
				<div>
					<input
						type="email"
						placeholder="E-mail"
						className="contactEmail"
						name="user_email"
					/>
				</div>
			</div>
			<div className="form-message">
				<textarea
					type="text"
					placeholder="Ваше сообщение..."
					className="contactMessage"
					name="user_message"></textarea>
			</div>
			<div className="form-button">
				<button type="submit" className="submit" onClick={handleClick}>
					Отправить
				</button>
			</div>
		</form>
	);
};

export default Contact;
