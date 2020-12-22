// You ready for circle geometry!? >:(
export function * pointGen (nPoints, offset = 0) {
  const spread = Math.PI
  const theta = spread / (nPoints + 1)

  for (let i = 1; i <= nPoints; i++) {
    yield offset + i * theta
  }
}
