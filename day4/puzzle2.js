const axios = require("axios");

const day4Config = {
    method: "get",
    url: "https://adventofcode.com/2022/day/4/input",
    headers: {
      Cookie:
        "_ga=GA1.2.809642482.1669922435; _gid=GA1.2.98910061.1669922435; session=53616c7465645f5f7f8ea2c30e31a3f76c041eea9b198e8773708a3b351c4d610da870019df4bef7e015eeb557ed354f3d74cef58ff2a2103cdf98f45059bd12",
    },
    withCredentials: true,
};

async function solutionPuzzle2() {
  const { data } = await axios(day4Config);
  const day4Data = data.split("\n");

  console.log("Solution: ", puzzle2(day4Data))
}

const example = [
  "2-4,6-8",
  "2-3,4-5",
  "5-7,7-9",
  "2-8,3-7",
  "6-6,4-6",
  "2-6,4-8"]

const puzzle2 = (data) => {

  let sum = 0;

  for (let i = 0; i<data.length -1; i++) {
    const row = data[i]?.split(",");
    if (row === ['']) break;
    const firstElfRange = row[0].match(/\d+/g);
    const secondElfRange = row[1].match(/\d+/g);

    if (Number(firstElfRange[1]) >= Number(secondElfRange[0]) && Number(firstElfRange[0]) <= Number(secondElfRange[1])) {
      console.log(firstElfRange, secondElfRange)
      sum+=1;
    }
  }

  return sum; 
}

console.log("Example: ", puzzle2(example))
solutionPuzzle2()

