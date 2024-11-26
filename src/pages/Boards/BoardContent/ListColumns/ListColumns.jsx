import { Box, Button } from '@mui/material'
import Column from './Column/Column'
import AddIcon from '@mui/icons-material/Add'
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'
function ListColumns(props) {
  const { columns } = props
  return (
    <SortableContext
      items={columns.map((column) => column._id)}
      strategy={horizontalListSortingStrategy}
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
        {columns.map((column, index) => (
          <Column key={column._id} column={column}/>
        ))}

        {/* add new column */}
        <Box
          sx={{
            minWidth:'200px',
            maxWidth:'200px',
            mx:2,
            borderRadius:'6px',
            height:'fit-content',
            backgroundColor:'#ffffff3d'
          }}
        >
          <Button
            startIcon={<AddIcon/>}
            sx={{
              color:'white',
              width:'100%',
              justifyContent:'flex-start',
              pl:2.5,
              py:1

            }}
          >Add new Column</Button>
        </Box>

      </Box>
    </SortableContext>
  )
}

export default ListColumns