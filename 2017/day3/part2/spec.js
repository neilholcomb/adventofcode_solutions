import * as solutions from './solution'
import path from 'path'

//get absolute path to our input
const input = 325489
const answer = 330785

describe('Day 1 solutions', () => {
  it('should work with solution 1', () => {
    expect(solutions.solution1(input)).toEqual(answer)
  })

  // it('should work with solution 3', () => {
  //   expect(solutions.golf(input)).toEqual(answer)
  // })
})
