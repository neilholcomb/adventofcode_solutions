/*
--- Part Two ---

As a stress test on the system, the programs here clear the grid and then store the value 1 in square 1.
Then, in the same allocation order as shown above, they store the sum of the values in all adjacent squares, including diagonals.

So, the first few squares' values are chosen as follows:

Square 1 starts with the value 1.
Square 2 has only one adjacent filled square (with value 1), so it also stores 1.
Square 3 has both of the above squares as neighbors and stores the sum of their values, 2.
Square 4 has all three of the aforementioned squares as neighbors and stores the sum of their values, 4.
Square 5 only has the first and fourth squares as neighbors, so it gets the value 5.
Once a square is written, its value does not change. Therefore, the first few squares would receive the following values:

147  142  133  122   59
304    5    4    2   57
330   10    1    1   54
351   11   23   25   26
362  747  806--->   ...
What is the first value written that is larger than your puzzle input?
*/

// solution copied from https://gist.github.com/cranderveldt/a2995c2aae8f66b539139e9725908888
export const solution1 = input => {
  let rows = [[1]]
  let direction = 'right'
  let last_value = 1
  let pos = { r: 0, c: 0 }

  let beautifulSpiral = function() {
    if (iteratingOverColumns()) {
      pos.c = pos.c + positiveOrNegative()

      if (columnIsUndefined(pos.r, pos.c)) {
        if (pos.c < 0) {
          pos.c = 0
        }
        addColumn()
        direction = getNextDirection(direction)
      }
    } else {
      pos.r = pos.r + positiveOrNegative()

      if (rowIsUndefined(pos.r)) {
        if (pos.r < 0) {
          pos.r = 0
        }
        addRow()
        direction = getNextDirection(direction)
      }
    }

    last_value = sumOfNeighbors(pos.r, pos.c)
  }

  let getNextDirection = function() {
    let result = 'right'
    switch (direction) {
      case 'right':
        result = 'up'
        break
      case 'up':
        result = 'left'
        break
      case 'left':
        result = 'down'
        break
      default:
        result = 'right'
        break
    }
    return result
  }

  let iteratingOverColumns = function() {
    return ['right', 'left'].includes(direction)
  }

  let positiveOrNegative = function() {
    return ['right', 'down'].includes(direction) ? 1 : -1
  }

  let addRow = function() {
    positiveOrNegative() > 0 ? addLowerRow() : addUpperRow()
  }

  let addColumn = function() {
    positiveOrNegative() > 0 ? addRightColumn() : addLeftColumn()
  }

  let addLowerRow = function() {
    let new_row = []
    for (let i in rows[0]) {
      new_row.push(0)
    }
    rows.push(new_row)
  }

  let addUpperRow = function() {
    let new_row = []
    for (let i in rows[0]) {
      new_row.push(0)
    }
    rows.unshift(new_row)
  }

  let addRightColumn = function() {
    for (let row of rows) {
      row.push(0)
    }
  }

  let addLeftColumn = function() {
    for (let row of rows) {
      row.unshift(0)
    }
  }

  let sumOfNeighbors = function(r, c) {
    let result = 0
    for (let roffset of [r, r + 1, r - 1]) {
      for (let coffset of [c, c + 1, c - 1]) {
        result = result + getNeighborValue(roffset, coffset)
      }
    }
    rows[r][c] = result
    return result
  }

  let getNeighborValue = function(r, c) {
    return !rowIsUndefined(r) && !columnIsUndefined(r, c) ? rows[r][c] : 0
  }

  let rowIsUndefined = function(r) {
    return rows[r] === undefined
  }

  let columnIsUndefined = function(r, c) {
    return rows[r][c] === undefined
  }

  while (last_value < input) {
    beautifulSpiral()
  }

  return last_value
}
