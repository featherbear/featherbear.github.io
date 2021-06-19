// You ready for circle geometry!? >:(
export function * pointGen (nPoints, squish = 0) {
  const spread = Math.PI
  const theta = spread / (nPoints + 1 + 2 * squish)

  for (let i = 1; i <= nPoints; i++) {
    yield (i + squish) * theta
  }
}
