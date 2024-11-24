import { Box } from '@mui/material'
import CardItem from './Card/Card'
function ListCard() {
  return (
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
         - ${theme.trello.columnHeaderHeight}
        - ${theme.trello.columnFooterHeight}
         )`,
        '&::-webkit-scrollbar-thumb':{
          backgroundColor:'#ced0da'
        }
      }}
    >
      <CardItem />
      <CardItem temporaryHideMedia/>
      <CardItem temporaryHideMedia/>
      <CardItem temporaryHideMedia/>
      <CardItem temporaryHideMedia/>
      <CardItem temporaryHideMedia/>
      <CardItem temporaryHideMedia/>
      <CardItem temporaryHideMedia/>
      <CardItem temporaryHideMedia/>
      <CardItem temporaryHideMedia/>
      <CardItem temporaryHideMedia/>
      <CardItem temporaryHideMedia/>

    </Box>
  )
}

export default ListCard