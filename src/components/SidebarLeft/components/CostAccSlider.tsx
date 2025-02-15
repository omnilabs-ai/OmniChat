// import React from 'react';

// Use MUI Slider 
// https://mui.com/material-ui/react-slider/

// https://www.telerik.com/kendo-react-ui/slider

// https://blogs.purecode.ai/blogs/material-ui-slider

import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


function valuetext(value: number) {
  return `${value}`;
}


const CostAccSlider: React.FC = () => {
  const [value, setValue] = React.useState<number[]>([20, 50]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    console.log(event);
    setValue(newValue as number[]);
  };

  return (
    <Box sx={{ width: 300 }}>
      <div style={{
        backgroundColor: '#f5f5f5',
        padding: '1rem',
        fontSize: '1.5rem'
      }}>
        Cost
      </div>

      <Slider
        getAriaLabel={() => 'Cost range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />

      <div style={{
        backgroundColor: '#f5f5f5',
        padding: '1rem',
        fontSize: '1.5rem'
      }}>
        Speed
      </div>

      <Slider
        aria-label="Speed"
        defaultValue={30}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        shiftStep={30}
        step={10}
        marks
        min={10}
        max={100}
      />
    </Box>
  );
};

export default CostAccSlider;
