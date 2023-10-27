import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Signup from '../Signup-Login/Signup';
import Login from '../Signup-Login/Login'
import './App.css';

function App() {

  return (
    <Router>
      <div className='app'>
        <Navbar />
        <div className='routes'>
          <Routes>
            <Route exact path='/' element={ <Home /> } />
            <Route path='/signup' element={ <Signup /> } />
            <Route path='/login' element={ <Login /> } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
