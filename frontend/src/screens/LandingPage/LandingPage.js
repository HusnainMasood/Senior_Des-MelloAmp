import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import './LandingPage.css';

const LandingPage = () => {
	return (
		<div className="main">
			<Container>
				<Row>
					<div className="intro-text">
						<div>
							<h1 className="title">Welcome to MelloAmp</h1>
							<p className="subtitle">Non-Copyright Music</p>
							<div className="buttonContainer">
								<a href="/login">
									<Button size="lg" className="login-btn">
										Login
									</Button>
								</a>
								<a href="/login">
									<Button size="lg" className="login-btn">
										Signup
									</Button>
								</a>
							</div>
						</div>
					</div>
				</Row>
			</Container>
		</div>
	);
};

export default LandingPage;
