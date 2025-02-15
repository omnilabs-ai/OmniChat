import { IconButton } from '@mui/material';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useAtom } from 'jotai';
import { themeModeAtom } from '../../atoms';

const ThemeSwitch = () => {
  const [themeMode, setThemeMode] = useAtom(themeModeAtom);

  const toggleTheme = () => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light');
  };

  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {themeMode === 'dark' ? (
        <Brightness2Icon sx={{ color: "gray" }} /> // Moon icon for dark mode
      ) : (
        <Brightness7Icon sx={{ color: "orange" }} /> // Sun icon for light mode
      )}
    </IconButton>
  );
};

export default ThemeSwitch;
