import * as solutions from './day3'
import path from 'path'

//get absolute path to our input
const input = 325489
const answer = 552

describe('Day 1 solutions', () => {
  it('should work with solution 1', () => {
    expect(solutions.solution1(input)).toEqual(answer)
  })

  it('should work with solution 2', () => {
    expect(solutions.solution2(input)).toEqual(answer)
  })

  it('should work with solution 3', () => {
    expect(solutions.solution3(input)).toEqual(answer)
  })
})
