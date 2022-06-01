import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './components/homepage/Homepage';
import Register from './components/Users/Register';
import Login from './components/Users/Login';
import Navbar from './components/Navigation/Navbar';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
