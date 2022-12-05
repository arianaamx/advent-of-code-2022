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

async function solutionPuzzle1() {
  const { data } = await axios(day1Config);
  const day3Data = data.split("\n");

  console.log("Solution: ", puzzle1(day3Data))
}

const example = [
  "vJrwpWtwJgWrhcsFMMfFFhFp",
  "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
  "PmmdzqPrVvPwwTWBwg",
  "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
  "ttgJtRGJQctTZtZT",
  "CrZsJsPPZsGzwwsLwLmpwMDw"]

const puzzle1 = (data) => {
  const puzzleData = data.map((pair) => [pair.slice(0,pair.length/2), pair.slice(pair.length/2)])

  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const alphabetObject = {}
  let priority = 1;
  for (let i=0; i<alphabet.length; i++) {
    alphabetObject[alphabet[i]]= priority;
    priority +=1;
  }

  let sumOfPriorities = 0;
  for (let i=0; i< puzzleData.length; i++){
    const firstCompartment = [... new Set(puzzleData[i][0].split(""))];
    const secondCompartment = [... new Set(puzzleData[i][1].split(""))];

    const bothCompartments = [...firstCompartment, ...secondCompartment].sort()

    let duplicates = [];
    for (let i = 0; i < bothCompartments.length - 1; i++) {
      if (bothCompartments[i + 1] == bothCompartments[i]) {
        sumOfPriorities += alphabetObject[bothCompartments[i]]
        duplicates.push(bothCompartments[i]);
      }
    }
  }

  return (sumOfPriorities)
}

console.log("Example: ", puzzle1(example))
solutionPuzzle1()
