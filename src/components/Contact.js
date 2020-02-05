import React from 'react';
import '../App.scss';

class Contact extends React.Component {
	render() {
		return (
			<footer>
				<div id="contactBorder">
					<form action="https://formspree.io/mvoaaqbn" method="POST">
						<header>Contact Me</header>
						<p>I am looking for my first job, so If You want to hire me, You can send me an e-mail.</p>
						<input type="email" name="_replyto" placeholder="Your E-mail adress" maxLength="30" required />
						<input type="text" name="_subject" placeholder="Subject" maxLength="30" required />
						<textarea
							name="message"
							placeholder="Your message..."
							maxLength="600"
							minLength="10"
							required
						/>
						<button type="submit">send</button>
					</form>
				</div>

				<div id="aboutMe">
					<header>Tomasz Szablewski</header>
					<section id="about">
						I am Front End Web Developer. Not that experienced, but ambitious. Looking forward to design
						some extraordinary projects for You.
					</section>
					<section id="copyright">Copyright Tomasz Szablewski 2020 &copy;</section>
				</div>
			</footer>
		);
	}
}

export default Contact;
