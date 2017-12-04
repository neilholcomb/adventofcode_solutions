/*
--- Part Two ---

Then, you notice the instructions continue on the back of the Recruiting Document.
Easter Bunny HQ is actually at the first location you visit twice.

For example, if your instructions are R8, R4, R4, R8, the first location you visit twice is 4 blocks away, due East.

How many blocks away is the first location you visit twice?

*/
export const solution1 = input => {
  const MAP = { N: 0, E: 1, S: 2, W: 3 }

  const steps = input.split(', ').map(pair => ({
    direction: pair[0] === 'R' ? 1 : -1,
    dist: parseInt(pair.slice(1), 10)
  }))

  //track each intersection we have gone too
  let beenThere = { '0:0': true }

  let state = {
    facing: 0,
    x: 0,
    y: 0
  }

  for (let step of steps) {
    state.facing = (state.facing + step.direction + 4) % 4
    let dist = step.dist
    for (let d = 1; d <= dist; d++) {
      switch (state.facing) {
        case 0: //North
          state.y++
          break
        case 2: //South
          state.y--
          break
        case 1: //East
          state.x++
          break
        case 3: //West
          state.x--
          break
      }
      const location = state.x + ',' + state.y
      if (beenThere[location]) {
        return Math.abs(state.x) + Math.abs(state.y)
      }
      beenThere[location] = true
    }
  }
}
