import { Box } from '@mui/material'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'
import { DndContext,
  PointerSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DragOverlay,
  defaultDropAnimationSideEffects
} from '@dnd-kit/core'
import React, { useEffect } from 'react'
import { arrayMove } from '@dnd-kit/sortable'
import Column from './ListColumns/Column/Column'
import CardItem from './ListColumns/Column/ListCards/Card/Card'

const ACTIVE_DRAG_ITEM_TYPE = {
  COLUMN: 'ACTIVE_DRAG_ITEM_TYPE_COLUMN',
  CARD: 'ACTIVE_DRAG_ITEM_TYPE_CARD'
}
export default function BoardContent(props) {
  const { board } = props
  const [orderedColumnsState, setOrderedColumnsState] = React.useState([])
  //at the same time, only one item is dragged (column or card)
  const [activeDragItemId, setActiveDragItemId] = React.useState(null)
  const [activeDragItemType, setActiveDragItemType] = React.useState(null)
  const [activeDragItemData, setActiveDragItemData] = React.useState(null)
  //require case: move column 10px before call onDragEnd
  const pointerSensor = useSensor(PointerSensor, { activationConstraint:{
    distance:10
  } })
  const mouseSensor = useSensor(MouseSensor, { activationConstraint:{
    distance:10
  } })
  //nhấn giữ 250ms và dung sai của cảm ứng (chênh lệch 5px) thì mới kích hoạt event
  const touchSensor = useSensor(TouchSensor, { activationConstraint:{
    delay:250,
    tolerance: 50
  } })
  // const sensors = useSensors(pointerSensor)
  // priority mouse and touch sensor
  const sensors = useSensors(mouseSensor, touchSensor)

  useEffect(() => {
    const orderedColumns = mapOrder(board.columns, board.columnOrderIds, '_id')
    setOrderedColumnsState(orderedColumns)
  }, [board])
  const handleDragEnd = (event) => {
    console.log(event)
    const { active, over } = event

    //if drag is over null, return
    if (!over) return

    //if index drop is not equal index drag, move column
    if (active.id!==over.id) {
      console.log('move column')
      const oldIndex = orderedColumnsState.findIndex(column => column._id === active.id)
      const newIndex = orderedColumnsState.findIndex(column => column._id === over.id)
      const newColumns = arrayMove(orderedColumnsState, oldIndex, newIndex)
      const newColumnIds = newColumns.map(column => column._id)
      setOrderedColumnsState(newColumns)
    }
    setActiveDragItemId(null)
    setActiveDragItemType(null)
    setActiveDragItemData(null)
  }
  const handleDragStart = (event) => {
    console.log('drag start', event)
    setActiveDragItemId(event.active.id)
    setActiveDragItemType(event.active.data.current?.columnId ? ACTIVE_DRAG_ITEM_TYPE.CARD : ACTIVE_DRAG_ITEM_TYPE.COLUMN)
    setActiveDragItemData(event.active.data?.current)
  }

  const dropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles:{
        active:{
          opacity:0.5
        }
      }
    })
  }

  return (
    <DndContext
      onDragEnd={handleDragEnd}
      sensors={sensors}
      onDragStart={handleDragStart}
    >
      <Box
        sx={{
          bgcolor:(theme) => theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
          width: '100%',
          height: (theme) => theme.trello.boardContentHeight,
          p:'10px 0'
        }}
      >
        <ListColumns columns={orderedColumnsState}/>
        <DragOverlay
          dropAnimation={dropAnimation}
        >
          {activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN && (
            <Column
              column={activeDragItemData}
            />
          )}
          {(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) && (
            <CardItem
              card={activeDragItemData}
            />
          )}
        </DragOverlay>
      </Box>
    </DndContext>
  )
}
