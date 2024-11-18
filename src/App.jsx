import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import { Container, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import Box from '@mui/material/Box'
import { useColorScheme } from '@mui/material/styles'

function ModeSelect() {
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

function App() {
  return <Container
    disableGutters
    maxWidth={false}
    sx={{
      height: '100vh'
    }}
  >
    <Box sx={{
      backgroundColor: 'primary.light',
      width: '100%',
      height:(theme) => theme.trello.appBarHeight,
      display: 'flex',
      alignItems: 'center'
    }}>
      <ModeSelect/>
    </Box>
    <Box
      sx={{
        backgroundColor: 'primary.dark',
        width: '100%',
        height:(theme) => theme.trello.boardBarHeight,
        display: 'flex',
        alignItems: 'center'
      }}
    >
      Board bar
    </Box>
    <Box
      sx={{
        backgroundColor: 'primary.main',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        height: (theme) => `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`
      }}
    >
      Board content
    </Box>
  </Container>
}

export default App