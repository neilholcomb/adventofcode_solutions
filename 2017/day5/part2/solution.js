import fs from 'fs'

/*
---- Part Two ---

Now, the jumps are even stranger: after each jump, if the offset was three or more,
instead decrease it by 1. Otherwise, increase it by 1 as before.

Using this rule with the above example, the process now takes 10 steps,
and the offset values after finding the exit are left as 2 3 2 3 -1.

How many steps does it now take to reach the exit?
*/

export const solution1 = inputPath => {
  //get the raw data from the file...this is tab separated with unix line delimiters
  let data = fs.readFileSync(inputPath, 'utf-8')

  data = data.split('\n').map(x => +x)

  let totalSteps = 0
  let currentStep = 0

  while (currentStep >= 0 && currentStep < data.length) {
    let nextSteps = data[currentStep]
    if (nextSteps >= 3) {
      data[currentStep]--
    } else {
      data[currentStep]++
    }
    currentStep += nextSteps
    totalSteps++
  }

  return totalSteps
}

//one liner solution
//prettier-ignore
export const golf = i=>{let d=fs.readFileSync(i,'utf-8').split('\n').map(x=>+x),t=0,c=0,n;while(c>=0&&c<d.length){n=d[c];d[c]+=(n>=3)?-1:1;c+=n;t++}return t}
