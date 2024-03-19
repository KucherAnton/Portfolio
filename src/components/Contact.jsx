import React, { useRef, useState } from 'react';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import '../styles/contact.css';

const Contact = () => {
	const form = useRef();
	const [formData, setFormData] = useState({
		user_name: '',
		user_email: '',
		user_message: '',
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const sendEmail = (e) => {
		e.preventDefault();

		const screenWidth = window.innerWidth;

		if (!formData.user_name || !formData.user_email || !formData.user_message) {
			if (screenWidth > 1115) {
				Swal.fire({
					icon: 'error',
					title: 'Заполните все поля!',
					width: '26rem',
					color: '#e1e1e1',
					position: 'center',
					background: 'rgb(42,42,42)',
					showConfirmButton: false,
					iconColor: 'gray',
					timer: 2000,
				});
				return;
			} else if (screenWidth > 768 && screenWidth < 1115) {
				Swal.fire({
					icon: 'error',
					title: 'Заполните все поля!',
					width: '23rem',
					color: '#e1e1e1',
					position: 'center',
					background: 'rgb(42,42,42)',
					showConfirmButton: false,
					iconColor: 'gray',
					timer: 2000,
				});
				return;
			} else if (screenWidth > 180 && screenWidth < 768) {
				Swal.fire({
					icon: 'error',
					title: 'Заполните все поля!',
					width: '14rem',
					color: '#e1e1e1',
					position: 'center',
					background: 'rgb(42,42,42)',
					showConfirmButton: false,
					iconColor: 'gray',
					timer: 2000,
				});
				return;
			}
		}

		emailjs
			.sendForm('service_d9j84rj', 'template_a79x2gp', form.current, {
				publicKey: '-uRNut99FVaIlzjuu',
			})
			.then(() => {
				if (screenWidth > 1115) {
					Swal.fire({
						icon: 'success',
						title: 'Сообщение отправлено!',
						width: '26rem',
						color: '#e1e1e1',
						position: 'center',
						background: 'rgb(42,42,42)',
						showConfirmButton: false,
						iconColor: 'gray',
						timer: 2000,
					});
				} else if (screenWidth > 768 && screenWidth < 1115) {
					Swal.fire({
						icon: 'success',
						title: 'Сообщение отправлено!',
						width: '23rem',
						color: '#e1e1e1',
						position: 'center',
						background: 'rgb(42,42,42)',
						showConfirmButton: false,
						iconColor: 'gray',
						timer: 2000,
					});
				} else if (screenWidth > 180 && screenWidth < 768) {
					Swal.fire({
						icon: 'success',
						title: 'Сообщение отправлено!',
						width: '15rem',
						color: '#e1e1e1',
						position: 'center',
						background: 'rgb(42,42,42)',
						showConfirmButton: false,
						iconColor: 'gray',
						timer: 2000,
					});
				}
			})
			.then(
				setFormData({
					user_name: '',
					user_email: '',
					user_message: '',
				})
			);
	};

	return (
		<form className="contact-page" ref={form} onSubmit={sendEmail}>
			<div className="form-contacts">
				<div>
					<input
						type="text"
						placeholder="Имя"
						className="contactName"
						value={formData.user_name}
						onChange={handleInputChange}
						name="user_name"
					/>
				</div>
				<div>
					<input
						type="email"
						placeholder="E-mail"
						className="contactEmail"
						value={formData.user_email}
						onChange={handleInputChange}
						name="user_email"
					/>
				</div>
			</div>
			<div>
				<textarea
					type="text"
					placeholder="Ваше сообщение..."
					className="contactMessage"
					value={formData.user_message}
					onChange={handleInputChange}
					name="user_message"></textarea>
			</div>
			<div className="form-button">
				<button type="submit" className="submit">
					Отправить
				</button>
			</div>
		</form>
	);
};

export default Contact;
