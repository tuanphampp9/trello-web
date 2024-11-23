import { Box, Button, Divider, ListItemIcon, ListItemText, Menu, MenuItem, Tooltip, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Cloud, ContentCopy, ContentCut, ContentPaste } from '@mui/icons-material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import AddCardIcon from '@mui/icons-material/AddCard'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'
const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '56px'
export default function BoardContent() {
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
        bgcolor:(theme) => theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
        width: '100%',
        height: (theme) => theme.trello.boardContentHeight,
        p:'10px 0'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          bgcolor:'inherit',
          overflowX: 'auto',
          overflowY: 'hidden',
          width:'100%',
          height:'100%'
        }}
      >
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
              height: COLUMN_HEADER_HEIGHT,
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
          <Box
            sx={{
              p:'0 5px',
              m:'0 5px',
              display: 'flex',
              flexDirection: 'column',
              gap:1,
              overflowX: 'hidden',
              overflowY: 'auto',
              maxHeight: (theme) => `calc(${theme.trello.boardContentHeight}
             - ${theme.spacing(8)}
             - ${COLUMN_HEADER_HEIGHT}
            - ${COLUMN_FOOTER_HEIGHT}
             )`,
              '&::-webkit-scrollbar-thumb':{
                backgroundColor:'#ced0da'
              }
            }}
          >
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
              overflow: 'unset'
            }}>
              <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent sx={{
                p:1.5,
                '&:last-child':{
                  p:1.5
                }
              }}>
                <Typography>
                  Tuanphamdev mern stack
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  p: '0 4px 8px 4px'
                }}

              >
                <Button size="small"
                  startIcon={<GroupIcon />}
                >
                20
                </Button>
                <Button size="small"
                  startIcon={<CommentIcon />}
                >
                15
                </Button>
                <Button size="small"
                  startIcon={<AttachmentIcon />}
                >
                10
                </Button>
              </CardActions>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              overflow: 'unset'
            }}>
              <CardContent
                sx={{
                  p:1.5,
                  '&:last-child':{
                    p:1.5
                  }
                }}
              >
                <Typography>
                Card 01
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              overflow: 'unset'
            }}>
              <CardContent
                sx={{
                  p:1.5,
                  '&:last-child':{
                    p:1.5
                  }
                }}
              >
                <Typography>
                Card 01
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              overflow: 'unset'
            }}>
              <CardContent
                sx={{
                  p:1.5,
                  '&:last-child':{
                    p:1.5
                  }
                }}
              >
                <Typography>
                Card 01
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              overflow: 'unset'
            }}>
              <CardContent
                sx={{
                  p:1.5,
                  '&:last-child':{
                    p:1.5
                  }
                }}
              >
                <Typography>
                Card 01
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              overflow: 'unset'
            }}>
              <CardContent
                sx={{
                  p:1.5,
                  '&:last-child':{
                    p:1.5
                  }
                }}
              >
                <Typography>
                Card 01
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              overflow: 'unset'
            }}>
              <CardContent
                sx={{
                  p:1.5,
                  '&:last-child':{
                    p:1.5
                  }
                }}
              >
                <Typography>
                Card 01
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              overflow: 'unset'
            }}>
              <CardContent
                sx={{
                  p:1.5,
                  '&:last-child':{
                    p:1.5
                  }
                }}
              >
                <Typography>
                Card 01
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              overflow: 'unset'
            }}>
              <CardContent
                sx={{
                  p:1.5,
                  '&:last-child':{
                    p:1.5
                  }
                }}
              >
                <Typography>
                Card 01
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              overflow: 'unset'
            }}>
              <CardContent
                sx={{
                  p:1.5,
                  '&:last-child':{
                    p:1.5
                  }
                }}
              >
                <Typography>
                Card 01
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box
            sx={{
              height: COLUMN_FOOTER_HEIGHT,
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
              height: COLUMN_HEADER_HEIGHT,
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
          <Box
            sx={{
              p:'0 5px',
              m:'0 5px',
              display: 'flex',
              flexDirection: 'column',
              gap:1,
              overflowX: 'hidden',
              overflowY: 'auto',
              maxHeight: (theme) => `calc(${theme.trello.boardContentHeight}
             - ${theme.spacing(8)}
             - ${COLUMN_HEADER_HEIGHT}
            - ${COLUMN_FOOTER_HEIGHT}
             )`,
              '&::-webkit-scrollbar-thumb':{
                backgroundColor:'#ced0da'
              }
            }}
          >
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
              overflow: 'unset'
            }}>
              <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent sx={{
                p:1.5,
                '&:last-child':{
                  p:1.5
                }
              }}>
                <Typography>
                  Tuanphamdev mern stack
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  p: '0 4px 8px 4px'
                }}

              >
                <Button size="small"
                  startIcon={<GroupIcon />}
                >
                20
                </Button>
                <Button size="small"
                  startIcon={<CommentIcon />}
                >
                15
                </Button>
                <Button size="small"
                  startIcon={<AttachmentIcon />}
                >
                10
                </Button>
              </CardActions>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              overflow: 'unset'
            }}>
              <CardContent
                sx={{
                  p:1.5,
                  '&:last-child':{
                    p:1.5
                  }
                }}
              >
                <Typography>
                Card 01
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box
            sx={{
              height: COLUMN_FOOTER_HEIGHT,
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
      </Box>

    </Box>
  )
}
