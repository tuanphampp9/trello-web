import { Box } from '@mui/material'
import React from 'react'

export default function BoardBar() {
  return (
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
  )
}
