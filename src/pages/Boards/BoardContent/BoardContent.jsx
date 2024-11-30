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
  defaultDropAnimationSideEffects,
  closestCorners,
  pointerWithin,
  rectIntersection,
  getFirstCollision
} from '@dnd-kit/core'
import React, { useCallback, useEffect, useRef } from 'react'
import { cloneDeep } from 'lodash'
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
  //điểm va chạm cuối cùng
  const lastOverId = useRef(null)
  const [activeDragItemType, setActiveDragItemType] = React.useState(null)
  const [activeDragItemData, setActiveDragItemData] = React.useState(null)
  const [oldColumnWhenDraggingCard, setOldColumnWhenDraggingCard] = React.useState(null)
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
    if (!active || !over) return
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) {
      const {
        id: activeDraggingCardId,
        data: { current: activeDraggingCardData }
      } = active
      const { id: overCardId } = over

      //find two columns by card id
      const activeColumn = findColumnByCardId(activeDraggingCardId)
      const overColumn = findColumnByCardId(overCardId)

      // if not exist activeColumn or overColumn, return
      if (!activeColumn || !overColumn) return

      //if drag over in the other column, return
      if (oldColumnWhenDraggingCard._id !== overColumn._id) {
        console.log('the other column')
        moveCardBetweenDifferences(
          overColumn,
          overCardId,
          active,
          over,
          activeColumn,
          activeDragItemId,
          activeDraggingCardData
        )
      } else {
        console.log('the same column')
        const oldCardIndex = oldColumnWhenDraggingCard.cards.findIndex(
          (column) => column._id === activeDragItemId
        )
        const newCardIndex = oldColumnWhenDraggingCard.cards.findIndex(
          (column) => column._id === overCardId
        )
        const newCards = arrayMove(
          oldColumnWhenDraggingCard.cards,
          oldCardIndex,
          newCardIndex
        )
        setOrderedColumnsState((prevColumns) => {
          const nextColumn = cloneDeep(prevColumns)
          //find column in orderedColumnsState
          const targetColumn = nextColumn.find(
            (column) => column._id === overColumn._id
          )
          //update cards and cardOrderIds in target column
          targetColumn.cards = newCards
          targetColumn.cardOrderIds = newCards.map((card) => card._id)
          return nextColumn
        })
      }
    }
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) {
      //if index drop is not equal index drag, move column
      if (active.id !== over.id) {
        console.log('move column')
        const oldColumnIndex = orderedColumnsState.findIndex(
          (column) => column._id === active.id
        )
        const newColumnIndex = orderedColumnsState.findIndex(
          (column) => column._id === over.id
        )
        const newColumns = arrayMove(orderedColumnsState, oldColumnIndex, newColumnIndex)
        const newColumnIds = newColumns.map((column) => column._id)
        setOrderedColumnsState(newColumns)
      }
    }


    setActiveDragItemId(null)
    setActiveDragItemType(null)
    setActiveDragItemData(null)
  }
  //update state in case card move between others column
  const moveCardBetweenDifferences = (
    overColumn,
    overCardId,
    active,
    over,
    activeColumn,
    activeDraggingCardId,
    activeDraggingCardData
  ) => {
    //find index card in over column
    setOrderedColumnsState((prevColumns) => {
      let newCardIndex
      const overCardIndex = overColumn.cards.findIndex(
        (card) => card._id === overCardId
      )
      const isBelowOverItem =
        active.rect.current.translated &&
        active.rect.current.translated.top > over.rect.current?.height
      const modifier = isBelowOverItem ? 1 : 0
      newCardIndex =
        overCardIndex >= 0
          ? overCardIndex + modifier
          : overColumn.cards.length + 1
      const nextColumn = cloneDeep(prevColumns)
      const nextActiveColumn = nextColumn.find(
        (column) => column._id === activeColumn._id
      )
      const nextOverColumn = nextColumn.find(
        (column) => column._id === overColumn._id
      )
      if (nextActiveColumn) {
        //remove card in active column
        nextActiveColumn.cards = nextActiveColumn.cards.filter(
          (card) => card._id !== activeDraggingCardId
        )
        //update cardOrderIds in active column
        nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map(
          (card) => card._id
        )
      }
      if (nextOverColumn) {
        //check card exist in over column
        nextOverColumn.cards = nextOverColumn.cards.filter(
          (card) => card._id !== activeDraggingCardId
        )
        //update next column into active dragging card data
        const rebuild_activeDraggingCardData = {
          ...activeDraggingCardData,
          columnId: nextOverColumn._id
        }
        //add card is dragging into index in over column
        nextOverColumn.cards = nextOverColumn.cards.toSpliced(
          newCardIndex,
          0,
          rebuild_activeDraggingCardData
        )

        //update cardOrderIds in active column
        nextOverColumn.cardOrderIds = nextOverColumn.cards.map(
          (card) => card._id
        )
      }

      return nextColumn
    })
  }
  const handleDragStart = (event) => {
    setActiveDragItemId(event.active.id)
    setActiveDragItemType(event.active.data.current?.columnId ? ACTIVE_DRAG_ITEM_TYPE.CARD : ACTIVE_DRAG_ITEM_TYPE.COLUMN)
    setActiveDragItemData(event.active.data?.current)
    //if drag card, set old column when dragging card
    if (event.active.data.current?.columnId) {
      setOldColumnWhenDraggingCard(findColumnByCardId(event.active.id))
    }
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

  const findColumnByCardId = (cardId) => {
    return orderedColumnsState.find(column => column.cards.map(card => card._id).includes(cardId))
  }
  //trigger when drag over
  const handleDragOver = (event) => {
    console.log(event)
    const { active, over } = event
    //if drag over null, return
    if (!active || !over) return
    //dont what to do when drag column
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) return

    const { id: activeDraggingCardId, data:{ current:activeDraggingCardData } } = active
    const { id: overCardId } = over

    //find two columns by card id
    const activeColumn = findColumnByCardId(activeDraggingCardId)
    const overColumn = findColumnByCardId(overCardId)

    // if not exist activeColumn or overColumn, return
    if (!activeColumn || !overColumn) return

    //if drag over in the other column, return
    if (activeColumn._id !== overColumn._id) {
      moveCardBetweenDifferences(overColumn, overCardId, active, over, activeColumn, activeDragItemId, activeDraggingCardData)
    }
  }
  const collisionDetectionStrategy = useCallback((args) => {
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) {
      return closestCorners({ ...args })
    }
    //Tìm các điểm giao nhau va chạm với con trỏ
    const pointerIntersection = pointerWithin(args)
    //thuật toán phát hiện va chạm sẽ trả về 1 mảng phát hiện va chạm ở đây
    const intersection = pointerIntersection.length>0 ? pointerIntersection : rectIntersection(args)

    //Tìm overId đầu tiên trong mảng intersection
    let overId = getFirstCollision(intersection, 'id')

    //if overId is exist
    if (overId) {

      const checkColumn = orderedColumnsState.find((column) => column._id === overId)
      lastOverId.current = overId
      if (checkColumn) {
        overId = closestCorners({
          ...args,
          droppableContainers: args.droppableContainers.filter(container => {
            return (container.id !== overId) && (checkColumn?.cardOrderIds?.includes(container.id))
          })
        })[0]?.id
      }
      return [{ id: overId }]
    }

    return lastOverId.current ? [{ id: lastOverId.current }] : []
  }, [activeDragItemType, orderedColumnsState])

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      // collisionDetection={closestCorners}
      collisionDetection={collisionDetectionStrategy}
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
