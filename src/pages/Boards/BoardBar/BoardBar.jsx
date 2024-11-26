import { Avatar, AvatarGroup, Box, Button, Chip, Tooltip } from '@mui/material'
import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { capitalizeFirstLetter } from '~/utils/formatters'

const MENU_STYLES ={
  color:'white',
  bgcolor:'transparent',
  border:'none',
  px:'5px',
  borderRadius:'4px',
  '.MuiSvgIcon-root':{
    color:'primary.main'
  },
  '&:hover':{
    bgcolor:'primary.50'
  }
}
export default function BoardBar(props) {
  const { board } = props
  return (
    <Box
      px={2}
      sx={{
        width: '100%',
        height:(theme) => theme.trello.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap:2,
        overflowX: 'auto',
        bgcolor:(theme) => theme.palette.mode === 'dark' ? '#2c3e50' : '#1976d2'
      }}
    >
      <Box
        sx={{ display: 'flex', alignItems: 'center', gap:2 }}
      >
        <Chip
          icon={<DashboardIcon sx={{ color:'white !important' }}/>}
          label={board.title}
          clickable
          sx={MENU_STYLES}
        />

        <Chip
          icon={<VpnLockIcon sx={{ color:'white !important' }}/>}
          label={capitalizeFirstLetter(board.type)}
          clickable
          sx={MENU_STYLES}
        />

        <Chip
          icon={<AddToDriveIcon sx={{ color:'white !important' }}/>}
          label="Add to google drive"
          clickable
          sx={MENU_STYLES}
        />

        <Chip
          icon={<BoltIcon sx={{ color:'white !important' }}/>}
          label="Automation"
          clickable
          sx={MENU_STYLES}
        />

        <Chip
          icon={<FilterListIcon sx={{ color:'white !important' }}/>}
          label="Filters"
          clickable
          sx={MENU_STYLES}
        />
      </Box>
      <Box
        sx={{ display: 'flex', alignItems: 'center', gap:2 }}
      >
        <Button variant="outlined"
          startIcon={<PersonAddIcon/>}
          sx={{ color:'white',
            borderColor:'white'
          }}
        >Invite</Button>

        <AvatarGroup max={4}
          sx={{
            '& .MuiAvatar-root':{
              width: 34,
              height: 34,
              fontSize:16,
              border:'none',
              cursor:'pointer',
              '&:first-of-type':{
                bgcolor:'#a4b0be'
              }
            }
          }}
        >
          <Tooltip title="Tuan pham">
            <Avatar alt="Tuan pham dev" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="Tuan pham">
            <Avatar alt="Tuan pham dev" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="Tuan pham">
            <Avatar alt="Tuan pham dev" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="Tuan pham">
            <Avatar alt="Tuan pham dev" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="Tuan pham">
            <Avatar alt="Tuan pham dev" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="Tuan pham">
            <Avatar alt="Tuan pham dev" src="/static/images/avatar/1.jpg" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}
