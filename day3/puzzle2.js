const axios = require("axios");

const day1Config = {
    method: "get",
    url: "https://adventofcode.com/2022/day/3/input",
    headers: {
      Cookie:
        "_ga=GA1.2.809642482.1669922435; _gid=GA1.2.98910061.1669922435; session=53616c7465645f5f7f8ea2c30e31a3f76c041eea9b198e8773708a3b351c4d610da870019df4bef7e015eeb557ed354f3d74cef58ff2a2103cdf98f45059bd12",
    },
    withCredentials: true,
};

async function solutionPuzzle2() {
  const { data } = await axios(day1Config);
  const day3Data = data.split("\n");

  console.log("Solution: ", puzzle2(day3Data))
}

const example = [
  "vJrwpWtwJgWrhcsFMMfFFhFp",
  "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
  "PmmdzqPrVvPwwTWBwg",
  "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
  "ttgJtRGJQctTZtZT",
  "CrZsJsPPZsGzwwsLwLmpwMDw"]

const puzzle2 = (data) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const alphabetObject = {}
  let priority = 1;
  for (let i=0; i<alphabet.length; i++) {
    alphabetObject[alphabet[i]]= priority;
    priority +=1;
  }

  let sumOfPriorities = 0;
  for (let i=0; i< data.length-2; i+=3){
    const firstElf = [... new Set(data[i].split(""))];
    const secondElf = [... new Set(data[i+1].split(""))];
    const thirdElf = [... new Set(data[i+2].split(""))]

    const bothCompartments = [...firstElf, ...secondElf, ...thirdElf].sort()

    let triplicates = {};
    for (let i = 0; i < bothCompartments.length ; i++) {
      if (triplicates[bothCompartments[i]] === undefined) {
        triplicates[bothCompartments[i]] = 1;
      } else {
        triplicates[bothCompartments[i]] = triplicates[bothCompartments[i]] + 1;
      }
    }

    sumOfPriorities += alphabetObject[Object.keys(triplicates).find(key => triplicates[key] === 3)];
  }

  return (sumOfPriorities)
}

console.log("Example: ", puzzle2(example))
solutionPuzzle2()
