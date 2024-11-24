import { createTheme, extendTheme } from '@mui/material/styles'

const APP_BAR_HEIGHT = '80px'
const BOARD_BAR_HEIGHT = '80px'
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`
const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '56px'
// create a theme instance
const theme = createTheme (
  {
    trello:{
      appBarHeight:APP_BAR_HEIGHT,
      boardBarHeight:BOARD_BAR_HEIGHT,
      boardContentHeight:BOARD_CONTENT_HEIGHT,
      columnHeaderHeight:COLUMN_HEADER_HEIGHT,
      columnFooterHeight:COLUMN_FOOTER_HEIGHT
    },
    colorSchemes:{
      light:{},
      dark:{}
    },
    components: {
      // Name of the component
      MuiCssBaseline:{
        styleOverrides:{
          body:{
            '*::-webkit-scrollbar':{
              width:'8px', //width of the vertical scroll bar
              height:'8px'//height of the horizontal scroll bar
            },
            '*::-webkit-scrollbar-thumb':{
              backgroundColor:'rgba(0,0,0,0.2)',
              borderRadius:'8px'
            }
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          // Name of the slot
          root: {
            // Some CSS
            textTransform: 'none',
            borderWidth: '0.5px'
          }
        }
      },
      MuiOutlinedInput:{
        styleOverrides:{
          root: ({ theme }) => {
            return {
              fontSize: '0.875rem',
              '& fieldset':{
                borderWidth:'0.5px !important'
              }
            }
          }
        }
      },
      MuiInputLabel:{
        styleOverrides:{
          root:({ theme }) => ({
            fontSize:'0.875rem'
          })
        }
      },
      MuiTypography:{
        styleOverrides:{
          root:{
            '&.MuiTypography-body1':{
              fontSize:'0.875rem'
            }
          }
        }
      }
    }
  })

export default theme