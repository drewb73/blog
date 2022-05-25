import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './components/homepage/Homepage';
import Register from './components/Users/Register';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/register' element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
