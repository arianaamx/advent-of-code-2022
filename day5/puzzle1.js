const path = require('path');
const fs = require('fs');

const example = fs.readFileSync(path.join(__dirname, 'example.txt'), 'utf8').toString();
const day5Data = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8').toString();

const isLetter = (c) => {
  return c.toLowerCase() != c.toUpperCase();
}

const getStacks = (stacks) => {
  const stackArray = stacks.split("\n")

  let stack = {};

  for (let i = stackArray.length - 1; i >= 0; i--) {
    if (i === stackArray.length - 1) {
      stackArray[i].replace(/\s/g, "").split("").forEach((element, index)=> {
        stack[Number(element)] = [];
      });
    } else {
      const row = stackArray[i].split("")
      let stackNum = 1;
      for (let j = 1; j < row.length; j += 4) {

        if ( isLetter(row[j]) ) {
          stack[stackNum].push(row[j])
        }
        stackNum++;
      }
    }
  }

  return(stack);
}

const goThroughInstructions = (instructions, stacksObject) => {
  const instructionsArray = instructions.split("\n");

  instructionsArray.forEach((instruction) => {
    const moveFromTo = instruction.match(/\d+/g)
    
    for (let i = 0; i < moveFromTo[0]; i++) {
      const pop = stacksObject[moveFromTo[1]].pop()
      stacksObject[moveFromTo[2]].push(pop)
    }
  })

  return (stacksObject)
}

const puzzle1 = (data) => {
  const [stacks, ...instructions] = data.split("\n\n");
  const stacksObject = getStacks(stacks);
  const stackAfterInstructions = goThroughInstructions(instructions[0], stacksObject);

  const allStacks = Object.keys(stacksObject);
  let topOfTop = '';
  allStacks.forEach((stack) => {
    topOfTop += stackAfterInstructions[stack].pop()
  })

  return (topOfTop);
}

console.log("Example: ", puzzle1(example))
console.log("Solution: ", puzzle1(day5Data))




