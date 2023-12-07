import { useState } from 'react'
import useLocalStorage from 'use-local-storage'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { IconContext } from 'react-icons/lib'
import { NavbarData } from './NavbarData'
import SubMenu from './SubMenu'
import './styles.css'

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`

const SidebarWrap = styled.div`
  width: 100%;
`

const Navbar = ({ user }) => {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  )
  document.documentElement.setAttribute('data-theme', theme)

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <>
      <div className='toggle-theme-wrapper'>
        <span>Light☀️</span>
        <label className='toggle-theme' htmlFor='checkbox'>
          <input
            type='checkbox'
            id='checkbox'
            onChange={switchTheme}
            defaultChecked={theme === 'dark'}
          />
          <div className='slider round'></div>
        </label>
        <span>🌒Dark</span>
      </div>

      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          <h1
            style={{
              textAlign: 'center',
              marginLeft: '200px',
              color: 'green',
            }}
          >
            Tony's Project Website
          </h1>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {NavbarData.map((item, index) => {
              return <SubMenu item={item} key={index} />
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
      <nav className='navbar'>
        <NavLink to='/'>Home</NavLink>
        {user ? (
          <NavLink to='/logout'>Logout</NavLink>
        ) : (
          <NavLink to='/login'>Sign In / Register</NavLink>
        )}
      </nav>
    </>
  )
}

export default Navbar
