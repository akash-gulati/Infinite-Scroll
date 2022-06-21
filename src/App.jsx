import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Search from './components/Search';

function App() {
	return (
			<Router>
				<Routes>
					<Route path="/" exact element={<Search />} />
				</Routes>
			</Router>
	);
}

export default App;
