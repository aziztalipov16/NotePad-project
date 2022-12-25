import 'bootstrap/dist/css/bootstrap.min.css';
import Field from './components/Field';
import Header from './components/Header';
import './index.css';
import { Container } from 'react-bootstrap';
function App() {
	return (
		<>
			<Header title="Блокнот" />
			<Container className="mt-3">
				<Field />
			</Container>
		</>
	);
}

export default App;
