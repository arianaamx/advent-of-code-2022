const path = require('path');
const fs = require('fs');
const { performance } = require('perf_hooks');

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
    
    let crateMover9001 = [];
    for (let i = 0; i < moveFromTo[0]; i++) {
      const pop = stacksObject[moveFromTo[1]].pop()
      crateMover9001.push(pop);
    }
    const cloneCrateMover9001 = [...crateMover9001];
    for (let i = 0; i < cloneCrateMover9001.length; i++) {
      const pop = crateMover9001.pop();
      stacksObject[moveFromTo[2]].push(pop)
    }
  })

  return (stacksObject)
}

const puzzle2 = (data) => {
  const startTime = performance.now();
  const [stacks, ...instructions] = data.split("\n\n");
  const stacksObject = getStacks(stacks);
  const stackAfterInstructions = goThroughInstructions(instructions[0], Object.assign({}, stacksObject));

  const allStacks = Object.keys(stacksObject);
  let topOfTop = '';
  allStacks.forEach((stack) => {
    topOfTop += stackAfterInstructions[stack].pop()
  })

  const endTime = performance.now();
  console.log(`Time execution: ${endTime - startTime} milliseconds`)
  return (topOfTop);
}

console.log("Example: ", puzzle2(example))
console.log("Solution: ", puzzle2(day5Data))




