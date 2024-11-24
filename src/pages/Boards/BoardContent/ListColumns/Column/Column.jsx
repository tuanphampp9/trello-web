import { Cloud, ContentCopy, ContentCut, ContentPaste } from '@mui/icons-material'
import AddCardIcon from '@mui/icons-material/AddCard'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Box, Button, Divider, ListItemIcon, ListItemText, Menu, MenuItem, Tooltip, Typography } from '@mui/material'
import React from 'react'
import ListCard from './ListCards/ListCard'

function Column() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box
      sx={{
        width: '300px',
        backgroundColor:(theme) => theme.palette.mode === 'dark' ? '#333643' : '#ebecf0',
        ml:2,
        borderRadius: '6px',
        height:'fit-content',
        maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`
      }}
    >
      <Box
        sx={{
          height: (theme) => theme.trello.columnHeaderHeight,
          p:2,
          display: 'flex',
          alignItems: 'center',
          justifyContent:'space-between'
        }}
      >
        <Typography
          variant='h6'
          sx={{
            fontSize: '1rem',
            fontWeight: 'bold',
            cusor: 'pointer'
          }}
        >Column title</Typography>
        <Box>
          <ExpandMoreIcon
            sx={{ color:'text.primary', cursor:'pointer' }}
            id="basic-column-dropdown"
            aria-controls={open ? 'basic-menu-workspaces' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          />
          <Menu
            id="basic-menu-workspaces"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-column-dropdown'
            }}
          >
            <MenuItem>
              <ListItemIcon>
                <AddCardIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Add card</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentCut fontSize="small" />
              </ListItemIcon>
              <ListItemText>Cut</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentCopy fontSize="small" />
              </ListItemIcon>
              <ListItemText>Copy</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentPaste fontSize="small" />
              </ListItemIcon>
              <ListItemText>Paste</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <DeleteForeverIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Remove this column</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Cloud fontSize="small" />
              </ListItemIcon>
              <ListItemText>Archive this column</ListItemText>
            </MenuItem>
          </Menu>
        </Box>
      </Box>
      <ListCard/>
      <Box
        sx={{
          height: (theme) => theme.trello.columnFooterHeight,
          p:2,
          display: 'flex',
          alignItems: 'center',
          justifyContent:'space-between'
        }}
      >
        <Button
          startIcon={<AddCardIcon />}
        >Add new card</Button>
        <Tooltip title="Drag to move">
          <DragHandleIcon
            sx={{ cursor:'pointer' }}
          />
        </Tooltip>
      </Box>
    </Box>
  )
}

export default Column