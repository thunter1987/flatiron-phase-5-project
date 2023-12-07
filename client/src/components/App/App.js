/* eslint-disable react-hooks/exhaustive-deps */
import { Routes, Route } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import Signup from '../Signup-Login/Signup'
import Login from '../Signup-Login/Login'
import './App.css'
import Logout from '../Signup-Login/Logout'
import Profile from '../Profile/Profile'
import { useEffect, useState } from 'react'

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
      <Navbar user={user} />
      <div className='app'>
        <div className='routes'>
          <Routes>
            <Route
              exact
              path='/'
              element={<Home user={user} setUser={setUser} />}
            />
            <Route
              path='/signup'
              element={
                <Signup
                  user={user}
                  setUser={setUser}
                  errors={errors}
                  setErrors={setErrors}
                />
              }
            />
            (user ?
            <Route
              path='/login'
              element={
                <Login
                  user={user}
                  setUser={setUser}
                  errors={errors}
                  setErrors={setErrors}
                />
              }
            />
            :
            <Route
              path='/profile/:<user.username>'
              element={<Profile user={user} />}
            />
            )
            <Route path='/logout' element={<Logout />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
