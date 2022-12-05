const axios = require("axios");

const day1Config = {
    method: "get",
    url: "https://adventofcode.com/2022/day/2/input",
    headers: {
      Cookie:
        "_ga=GA1.2.809642482.1669922435; _gid=GA1.2.98910061.1669922435; session=53616c7465645f5f7f8ea2c30e31a3f76c041eea9b198e8773708a3b351c4d610da870019df4bef7e015eeb557ed354f3d74cef58ff2a2103cdf98f45059bd12",
    },
    withCredentials: true,
};

async function solutionPuzzle1() {
  const { data } = await axios(day1Config);
  const day2Data = data.split("\n");

  const parsedData = day2Data.map((pair) => pair.split(" "))

  console.log("Solution: ", puzzle1(parsedData))
}

const example = [["A","Y"],["B","X"],["C","Z"]];

// A, X = ROCK +1
// B, Y = PAPER +2
// C, Z = SCISSORS +3

const puzzle1 = (data) => {
  let score = 0;

  for (let i=0; i<data.length; i++){
    console.log(data[i])

    if (data[i][0] === 'A'){
      if (data[i][1] === 'X'){
        score += 3 + 1;
      }
      else if (data[i][1] === 'Y'){
        score += 6 + 2;
      }
      else if (data[i][1] === 'Z'){
        score += 0 + 3;
      }
    } else if (data[i][0] === 'B'){
      if (data[i][1] === 'X'){
        score += 0 + 1;
      }
      else if (data[i][1] === 'Y'){
        score += 3 + 2;
      }
      else if (data[i][1] === 'Z'){
        score += 6 + 3;
      }
    } else if (data[i][0] === 'C') {
      if (data[i][1] === 'X'){
        score += 6 + 1;
      }
      else if (data[i][1] === 'Y') {
        score += 0 + 2;
      }
      else if (data[i][1] === 'Z') {
        score += 3 + 3;
      }
    }

    console.log(score)
  }

  return (score)
}

console.log("Example: ", puzzle1(example))
solutionPuzzle1()
