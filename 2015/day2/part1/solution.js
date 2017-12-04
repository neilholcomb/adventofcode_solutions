/*
--- Day 2: I Was Told There Would Be No Math ---

The elves are running low on wrapping paper, and so they need to submit an order for more.
They have a list of the dimensions (length l, width w, and height h) of each present, and only want to order exactly as much as they need.

Fortunately, every present is a box (a perfect right rectangular prism), 
which makes calculating the required wrapping paper for each gift a little easier: 
find the surface area of the box, which is 2*l*w + 2*w*h + 2*h*l. 
The elves also need a little extra paper for each present: the area of the smallest side.

For example:

A present with dimensions 2x3x4 requires 2*6 + 2*12 + 2*8 = 52 square feet of wrapping paper plus 6 square feet of slack, for a total of 58 square feet.
A present with dimensions 1x1x10 requires 2*1 + 2*10 + 2*10 = 42 square feet of wrapping paper plus 1 square foot of slack, for a total of 43 square feet.
All numbers in the elves' list are in feet. How many total square feet of wrapping paper should they order?
*/

import { readFileSync as file } from 'fs'

export const solution1 = inputPath => {
  //get the raw data from the file...this is tab separated with unix line delimiters
  let data = file(inputPath, 'utf-8')

  //split the loaded data into arrays of rows. where each row is an array of dimensions
  data = data
    .trim('\n')
    .split('\n')
    .map(present => {
      present = present.split('x')
      return {
        length: present[0],
        width: present[1],
        height: present[2]
      }
    })

  //now compute amount of paper for each present
  data = data.map(({ length, width, height }) => {
    const sides = []
    sides.push(length * width)
    sides.push(width * height)
    sides.push(height * length)

    sides.sort((a, b) => a - b)

    const smallest = [...sides][0]

    return smallest + 2 * sides[0] + 2 * sides[1] + 2 * sides[2]
  })

  return data.reduce((accumulator, present) => {
    return accumulator + present
  }, 0)
}

/*
    One line answer
*/
//prettier-ignore
export const solution2 = i => file(i, 'utf-8').trim('\n').split('\n').map(p=>p.split('x')).map(({0:l,1:w,2:h})=>[l*w,w*h,h*l].sort((a,b)=>a-b)).map(({0:a,1:b,2:c})=>a+a*2+b*2+c*2).reduce((a,p)=>+a+p)
