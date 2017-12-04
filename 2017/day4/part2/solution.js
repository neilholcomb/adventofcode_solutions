import fs from 'fs'

/*
--- Part Two ---

For added security, yet another system policy has been put in place.
Now, a valid passphrase must contain no two words that are anagrams of each other - 
that is, a passphrase is invalid if any word's letters can be rearranged to form any other word in the passphrase.

For example:

abcde fghij is a valid passphrase.
abcde xyz ecdab is not valid - the letters from the third word can be rearranged to form the first word.
a ab abc abd abf abj is a valid passphrase, because all letters need to be used when forming another word.
iiii oiii ooii oooi oooo is valid.
oiii ioii iioi iiio is not valid - any of these words can be rearranged to form any other word.
Under this new system policy, how many passphrases are valid?
*/

export const solution1 = inputPath => {
  //get the raw data from the file...this is tab separated with unix line delimiters
  let data = fs.readFileSync(inputPath, 'utf-8')

  //split the loaded data into arrays of rows.
  data = data.split('\n').map(line => line.split(' '))

  //sort the letters of each word...with the letters sorted finding anagrams should be simple
  data = data.map(words => {
    return words.map(word => [...word].sort().join(''))
  })

  //lets map each row into its checksum value
  //find smallest and largest and compute their difference
  data = data.map(words => {
    return words.length === new Set(words).size ? 1 : 0
  })

  return data.reduce((accumulator, value) => accumulator + value, 0)
}

//one liner solution
//prettier-ignore
export const golf = i=>fs.readFileSync(i,'utf-8').split('\n').map(l=>l.split(' ')).map(w=>w.map(x=>[...x].sort().join(''))).map(w=>w.length===new Set(w).size?1:0).reduce((a,v)=>~~a+v)
