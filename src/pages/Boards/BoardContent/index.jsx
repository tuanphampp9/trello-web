import { Box } from '@mui/material'
import React from 'react'

export default function BoardContent() {
  return (
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
  )
}
