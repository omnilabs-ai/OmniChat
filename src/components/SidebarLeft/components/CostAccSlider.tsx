import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useAtom } from 'jotai';
import { costAccValue, themeAtom } from '../../../atoms';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SpeedIcon from '@mui/icons-material/Speed';
import styles from './CostAccSlider.module.css';

const CostAccSlider: React.FC = () => {
  const [theme] = useAtom(themeAtom);
  const [value, setValue] = useAtom(costAccValue);

  return (
    <Box 
      className={styles.container}
      sx={{
        backgroundColor: theme.palette.background.paper,
        border: `1px solid #E5E7EB`,
      }}
    >
      <Slider 
        value={value}
        onChange={(_, newValue) => setValue(newValue as number)}
        aria-label="Cost-Accuracy Slider" 
        valueLabelDisplay="auto"
        sx={{
          '& .MuiSlider-thumb': {
            color: theme.palette.primary.main,
          },
          '& .MuiSlider-track': {
            color: theme.palette.primary.main,
          },
          '& .MuiSlider-rail': {
            color: theme.palette.primary.dark,
          },
        }}
      />
      <Box className={styles.labelContainer} sx={{ color: theme.palette.text.primary }}>
        <Box className={styles.labelBox}>
          <AttachMoneyIcon className={styles.icon} /> Cost
        </Box>
        <Box className={styles.labelBox}>
          <SpeedIcon className={styles.icon} /> Accuracy
        </Box>
      </Box>
    </Box>
  );
};

export default CostAccSlider;
  