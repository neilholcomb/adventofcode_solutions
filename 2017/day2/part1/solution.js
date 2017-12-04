import fs from 'fs'

/*
--- Day 2: Corruption Checksum ---

As you walk through the door, a glowing humanoid shape yells in your direction. "You there! Your state appears to be idle. Come help us repair the corruption in this spreadsheet - if we take another millisecond, we'll have to display an hourglass cursor!"

The spreadsheet consists of rows of apparently-random numbers. To make sure the recovery process is on the right track, they need you to calculate the spreadsheet's checksum. For each row, determine the difference between the largest value and the smallest value; the checksum is the sum of all of these differences.

For example, given the following spreadsheet:

5 1 9 5
7 5 3
2 4 6 8
The first row's largest and smallest values are 9 and 1, and their difference is 8.
The second row's largest and smallest values are 7 and 3, and their difference is 4.
The third row's difference is 6.
In this example, the spreadsheet's checksum would be 8 + 4 + 6 = 18.
*/

export const solution1 = inputPath => {
  //get the raw data from the file...this is tab separated with unix line delimiters
  let data = fs.readFileSync(inputPath, 'utf-8')

  //split the loaded data into arrays of rows. where each row is an array of numbers
  data = data.split('\n').map(line => line.split('\t').map(num => +num))

  //lets map each row into its checksum value
  //find smallest and largest and compute their difference
  data = data.map(row => {
    let { 0: a, length: l, [l - 1]: b } = row.sort((a, b) => a - b)
    return b - a
  })

  //last step compute the files checksum by adding up each rows diff calc
  return data.reduce((a, row) => a + row, 0)
}

//one liner solution
//prettier-ignore
export const golf = i => fs.readFileSync(i,'utf-8').split('\n').map(l=>l.split('\t')).map(r=>r.sort((a,b)=>+a-~~b)).reduce((a,r)=>a+(r[r.length-1]-r[0]),0)
