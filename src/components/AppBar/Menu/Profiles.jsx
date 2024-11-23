import { Check, Logout, PersonAdd, Settings } from '@mui/icons-material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Avatar, Box, Button, Divider, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Tooltip } from '@mui/material'
import React from 'react'
export default function Profiles() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 0 }}
          aria-controls={open ? 'basic-menu-profiles' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar sx={{ width: 36, height: 36 }}
            src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-1/398672502_1052213249313544_6897695782206018498_n.jpg?stp=dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeFRvAEK_Pw-FfPRMnLFoSWZGJjAu3liGuMYmMC7eWIa40Sh7V7VHkMQGzlCqAHkZP9mhcPVHGimhJt9KoPAnzfJ&_nc_ohc=xXsExvXk9D4Q7kNvgFK9Hyb&_nc_zt=24&_nc_ht=scontent.fhan2-3.fna&_nc_gid=AyUGf6Dk6Pn0NwlR9mnic0e&oh=00_AYC0EmdY13u83kI-nUSJeOpQYruwdP70P3thTCCB4qxmZQ&oe=6741E54A"
            alt='tuan pham'
          />
        </IconButton>
      </Tooltip>
      <Menu
        id="basic-menu-profiles"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-profiles'
        }}
      >
        <MenuItem>
          <Avatar
            sx={{
              width:28,
              height:28,
              mr:2
            }}
          /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar sx={{
            width:28,
            height:28,
            mr:2
          }} /> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  )
}
