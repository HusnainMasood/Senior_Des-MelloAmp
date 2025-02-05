import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import LandingPage from './screens/LandingPage/LandingPage';
import MyNotes from './screens/MyNotes/MyNotes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Landingpage =  first page user sees for login/signup
//this is the routing for browsing the app
const App = () => {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<main>
					<Routes>
						<Route path="/" element={<LandingPage />} />
						<Route path="/mynotes" element={<MyNotes />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default App;
