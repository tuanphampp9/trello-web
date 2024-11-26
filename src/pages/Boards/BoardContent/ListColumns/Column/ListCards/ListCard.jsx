import { Box } from '@mui/material'
import CardItem from './Card/Card'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
function ListCard(props) {
  const { cards } = props
  return (
    <SortableContext
      items={cards.map((card) => card._id)}
      strategy={verticalListSortingStrategy}
    >
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

        {cards.map((card, index) => (
          <CardItem key={card._id} card={card}/>
        ))}

      </Box>
    </SortableContext>
  )
}

export default ListCard