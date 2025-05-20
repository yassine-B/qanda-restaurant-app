import Styles from './Styles.module.css';
import { SunIcon, MoonIcon } from '@public/dummyData/Icons';
import { useTheme } from '@src/hooks/useTheme';
import Button from '@src/Components/Button';

const styles = {
  theme_toggler:
    'flex flex-col items-center justify-center h-5 w-5 bg-white rounded-full  pr-0 pl-0'
};

const ThemeToggler = () => {
  const { theme, onToggleTheme } = useTheme();

  return (
    <button onClick={onToggleTheme} className={Styles.theme_toggler}>
      {theme === 'light' ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default ThemeToggler;
