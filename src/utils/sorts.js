const mapOrder = (arrOrigin, arrOrderIds, key) => {
  if (!arrOrigin || !arrOrderIds || !key) {
    return []
  }
  const cloneArrOrigin = [...arrOrigin]
  const orderedArr = cloneArrOrigin.sort((a, b) => {
    const indexOfA = arrOrderIds.indexOf(a[key])
    const indexOfB = arrOrderIds.indexOf(b[key])
    return indexOfA - indexOfB
  })
  return orderedArr
}

export { mapOrder }