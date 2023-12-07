/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import { AboutMe, MyAim, MyVision } from '../../pages/AboutMe'
import { Services, ServicesOne, ServicesTwo, ServicesThree } from './../../pages/Services'
import { Events, EventsOne, EventsTwo } from './../../pages/Events'
import Contact from './../../pages/ContactUs'
import Support from './../../pages/Support'
import Home from '../Home/Home'
import Profile from '../Profile/Profile'
import Signup from '../Signup-Login/Signup'
import Login from '../Signup-Login/Login'
import Logout from '../Signup-Login/Logout'
import './App.css'

function App() {
  const [user, setUser] = useState(null)
  const [errors, setErrors] = useState([])
  // useEffect(() => {
  //   fetchUser();
  // }, []);

  // const fetchUser = () => {
  //   fetch("/authorized").then((resp) => {
  //     if (resp.ok) {
  //       resp.json().then((user) => setUser(user));
  //     } else {
  //       resp.json().then((err) => setErrors(err));
  //       return <h1>{ errors }</h1>;
  //     }
  //   }, [])
  // };
  return (
    <>
      <Navbar user={ user } />
      <div className='app'>
        <div className='routes'>
          <Routes>
            <Route
              path="/about-me"
              element={ <AboutMe /> }
            />
            <Route
              path="/about-me/aim"
              element={ <MyAim /> }
            />
            <Route
              path="/about-me/vision"
              element={ <MyVision /> }
            />
            <Route
              path="/services"
              element={ <Services /> }
            />
            <Route
              path="/services/services1"
              element={ <ServicesOne /> }
            />
            <Route
              path="/services/services2"
              element={ <ServicesTwo /> }
            />
            <Route
              path="/services/services3"
              element={ <ServicesThree /> }
            />
            <Route
              path="/contact"
              element={ <Contact /> }
            />
            <Route
              path="/events"
              element={ <Events /> }
            />
            <Route
              path="/events/events1"
              element={ <EventsOne /> }
            />
            <Route
              path="/events/events2"
              element={ <EventsTwo /> }
            />
            <Route
              path="/support"
              element={ <Support /> }
            />
            <Route
              exact
              path='/'
              element={ <Home user={ user } setUser={ setUser } /> }
            />
            <Route
              path='/signup'
              element={
                <Signup
                  user={ user }
                  setUser={ setUser }
                  errors={ errors }
                  setErrors={ setErrors }
                />
              }
            />
            (user ?
            <Route
              path='/login'
              element={
                <Login
                  user={ user }
                  setUser={ setUser }
                  errors={ errors }
                  setErrors={ setErrors }
                />
              }
            />
            :
            <Route
              path='/profile/:<user.username>'
              element={ <Profile user={ user } /> }
            />
            )
            <Route path='/logout' element={ <Logout /> } />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
