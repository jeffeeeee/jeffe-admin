import React from 'react';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { Typography } from '@mui/material';
import { fetchNui } from '../../utils/fetchNui';
import Loader from '../Loader';
import { BootstrapInput } from '../CustomInput';

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 48 * 4.5 + 8,
      width: 250,
    },
  },
};

function Weather() {
  const weatherOptions = [
    'ExtraSunny',
    'Clear',
    'Clouds',
    'Smog',
    'Foggy',
    'Overcast',
    'Raining',
    'ThunderStorm',
    'Clearing',
    'Neutral',
    'Snowing',
    'Blizzard',
    'Snowlight',
    'Christmas',
    'Halloween',
  ];

  const [weather, setWeather] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setWeather(event.target.value);
  };

  const handleSave = async () => {
    setLoading(true);
    await fetchNui('setWeather', { weather }).catch(() => {
      console.log('WEATGHER err');
      setLoading(false);
    });
    setLoading(false);
  };

  return (
    <>
      <Typography>Weather:</Typography>
      <FormControl fullWidth>
        {/* <InputLabel id="w">Weather</InputLabel> */}
        <Select
          variant="outlined"
          // labelId="w"
          value={weather}
          label="Weather"
          onChange={handleChange}
          MenuProps={MenuProps}
          input={<BootstrapInput />}
        >
          {weatherOptions.map((option) => (
            <MenuItem value={option} key={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <button
        style={{
          margin: '10px 0px',
          display: 'flex',
          gap: '10px',
          alignItems: 'center',
        }}
        onClick={handleSave}
        type="button"
        className="block red"
      >
        {loading && <Loader size={15} />}
        Save
      </button>
    </>
  );
}

export default Weather;
