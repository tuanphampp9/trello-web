import { Badge, Box, Button, InputAdornment, SvgIcon, TextField, Tooltip, Typography } from '@mui/material'
import React from 'react'
import ModeSelect from '~/components/ModeSelect/ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import trelloIcon from '~/assets/trello_icon.svg?react'
import Workspaces from './Menu/Workspaces'
import Recent from './Menu/Recent'
import Starred from './Menu/Starred'
import Templates from './Menu/Templates'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import Profiles from './Menu/Profiles'
export default function AppBar() {
  const [search, setSearch] = React.useState('')
  const [invisible, setInvisible] = React.useState(false)
  const handleBadgeVisibility = () => {
    setInvisible(!invisible)
  }

  return (
    <Box
      px={2}
      sx={{
        width: '100%',
        height:(theme) => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap:2,
        overflowX: 'auto',
        bgcolor:(theme) => theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0'
      }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap:2
        }}
      >
        <AppsIcon sx={{
          color: 'white'
        }}/>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap:0.5
          }}
        >
          <SvgIcon component={trelloIcon} inheritViewBox
            sx={{ color:'white' }}
            fontSize="small"
          />
          <Typography variant="span"
            sx={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: 'white'
            }}
          >Trello</Typography>
        </Box>
        <Box
          sx={{
            display:{ xs: 'none', md: 'flex' },
            gap:1
          }}
        >
          <Workspaces/>
          <Recent/>
          <Starred/>
          <Templates/>
          <Button
            sx={{ color:'white' }}
            startIcon={<LibraryAddIcon/>}
          >Create</Button>
        </Box>
      </Box>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap:2
      }}>
        <TextField id="outlined-search"
          label="Search..."
          variant="outlined"
          type='text'
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
          }
          }
          slotProps={{
            input:{
              startAdornment: <InputAdornment position="start">
                <SearchIcon sx={{ color:'white' }}/>
              </InputAdornment>,
              endAdornment:search.length>0 && (
                <CloseIcon
                  fontSize='small'
                  sx={{
                    color:'white',
                    cursor:'pointer'
                  }}
                  onClick={() => {
                    setSearch('')
                  }}
                />
              )
            }
          }}
          sx={{
            minWidth:120,
            maxWidth:170,
            '& label':{
              color:'white'
            },
            '& input':{
              color:'white'
            },
            '& label.Mui-focused':{
              color:'white'
            },
            '& .MuiOutlinedInput-root':{
              '& fieldset':{
                borderColor:'white'
              },
              '&:hover fieldset':{
                borderColor:'white'
              },
              '&.Mui-focused fieldset':{
                borderColor:'white'
              }
            }
          }}
        />
        <ModeSelect/>
        <Tooltip title="Notification">
          <Badge
            color="warning"
            variant="dot"
            invisible={invisible}
            sx={{
              cursor: 'pointer'
            }}
          >
            <NotificationsNoneIcon sx={{ color:'white' }}/>
          </Badge>
        </Tooltip>

        <Tooltip title="Help">
          <Badge
            color="warning"
            variant="dot"
            invisible={invisible}
            sx={{
              cursor: 'pointer'
            }}
          >
            <HelpOutlineIcon sx={{ color:'white' }}/>
          </Badge>
        </Tooltip>
        <Profiles/>
      </Box>
    </Box>
  )
}
