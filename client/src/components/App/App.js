import { Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Signup from '../Signup/Signup';
import './App.css';

function App() {

  return (<>
    <div className='app'>
      <Navbar />
      <div className='routes'>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/signup' element={ <Signup /> } />
        </Routes>
      </div>
    </div>
  </>
  );
}

export default App;
