const capitalizeFirstLetter = (val) => {
  if (!val) return ''
  return val.charAt(0).toUpperCase() + val.slice(1)
}

const generatePlaceholderCard = (column) => {
  return {
    _id: `${column._id}-placeholder-card`,
    FE_PlaceholderCard: true,
    boardId: column.boardId,
    columnId: column._id
  }
}
export { capitalizeFirstLetter, generatePlaceholderCard }