import { Box, FormControl, InputLabel, MenuItem, Select, useColorScheme } from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import React from 'react'

export default function ModeSelect() {
  const { mode, setMode } = useColorScheme()
  const handleChange = (event) => {
    setMode(event.target.value)
  }

  return (
    <Box sx={{
      minWidth:120
    }}>
      <FormControl fullWidth>
        <InputLabel
          id="label-select-dark-light-mode"
          sx={{
            color:'white',
            '&.Mui-focused': {
              color:'white'
            }
          }}
        >{mode}</InputLabel>
        <Select
          labelId="label-select-dark-light-mode"
          id="select-dark-light-mode"
          value={mode}
          label="Mode"
          onChange={handleChange}
          sx={{
            color:'white',
            '.MuiOutlinedInput-notchedOutline':{
              borderColor:'white'
            },
            '&:hover .MuiOutlinedInput-notchedOutline':{
              borderColor:'white'
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline':{
              borderColor:'white'
            },
            '.MuiSvgIcon-root':{
              color:'white'
            }
          }}
        >
          <MenuItem value="light">
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              gap:1
            }}>
              <LightModeIcon/>
            Light
            </Box>
          </MenuItem>
          <MenuItem value="dark">
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              gap:1
            }}>
              <DarkModeIcon/>
            Dark
            </Box>
          </MenuItem>
          <MenuItem value="system">
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              gap:1
            }}>
              <SettingsBrightnessIcon/>
            System
            </Box>
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
