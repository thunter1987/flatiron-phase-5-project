import useLocalStorage from 'use-local-storage';
import './styles.css';

const DarkMode = () => {

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  document.documentElement.setAttribute("data-theme", theme)

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <div className='toggle-theme-wrapper' >
      <span>☀️</span>
      <label className='toggle-theme' htmlFor='checkbox'>
        <input
          type='checkbox'
          id='checkbox'
          onChange={ switchTheme }
          defaultChecked={ theme === "dark" }
        />
        <div className='slider round'></div>
      </label>
      <span>🌒</span>
    </div>
  );
};

export default DarkMode;
