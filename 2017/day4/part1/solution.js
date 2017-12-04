import fs from 'fs'

/*
--- Day 4: High-Entropy Passphrases ---

A new system policy has been put in place that requires all accounts to use a passphrase instead of simply a password. A passphrase consists of a series of words (lowercase letters) separated by spaces.

To ensure security, a valid passphrase must contain no duplicate words.

For example:

aa bb cc dd ee is valid.
aa bb cc dd aa is not valid - the word aa appears more than once.
aa bb cc dd aaa is valid - aa and aaa count as different words.
The system's full passphrase list is available as your puzzle input. How many passphrases are valid?
*/

export const solution1 = inputPath => {
  //get the raw data from the file...this is tab separated with unix line delimiters
  let data = fs.readFileSync(inputPath, 'utf-8')

  //split the loaded data into arrays of rows.
  data = data.split('\n').map(line => line.split(' '))

  //lets map each row into its checksum value
  //find smallest and largest and compute their difference
  data = data.map(words => {
    return words.length === new Set(words).size ? 1 : 0
  })

  return data.reduce((accumulator, value) => accumulator + value, 0)
}

//one liner solution
//prettier-ignore
export const golf = i => fs.readFileSync(i, 'utf-8').split('\n').map(l => l.split(' ')).map(w => w.length === new Set( w ).size ? 1:0).reduce((a, v) => a + v, 0)
