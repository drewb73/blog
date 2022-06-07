import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './components/homepage/Homepage';
import Register from './components/Users/Register';
import Login from './components/Users/Login';
import Navbar from './components/Navigation/Navbar';
import AddNewCategory from './components/Categories/AddNewCategory';
import CategoryList from './components/Categories/CategoryList';
import UpdateCategory from './components/Categories/UpdateCategory';
import ProtectedRoute from './components/Navigation/ProtectedRoute';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/update-category/:id' element={<UpdateCategory />} />
        <Route exact path='/add-category' element={<ProtectedRoute><AddNewCategory/></ProtectedRoute>} />
        <Route exact path='/category-list' element={<CategoryList />} />
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
