import { createTheme } from '@mui/material/styles'
import { cyan, deepOrange, orange, red, teal } from '@mui/material/colors'

// create a theme instance
const theme = createTheme (
  {
    trello:{
      appBarHeight:'80px',
      boardBarHeight:'90px'
    },
    colorSchemes:{
      light:{
        palette:{
          primary:teal,
          secondary: deepOrange
        }
      },
      dark:{
        palette:{
          primary:cyan,
          secondary: orange
        }
      }
    }
  })

export default theme