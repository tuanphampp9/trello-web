import { Box, FormControl, InputLabel, Select } from '@mui/material'
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
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="label-select-dark-light-mode">{mode}</InputLabel>
        <Select
          labelId="label-select-dark-light-mode"
          id="select-dark-light-mode"
          value={mode}
          label="Mode"
          defaultValue='light'
          onChange={handleChange}
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
