const axios = require("axios");

const day1Config = {
    method: "get",
    url: "https://adventofcode.com/2022/day/1/input",
    headers: {
      Cookie:
        "_ga=GA1.2.809642482.1669922435; _gid=GA1.2.98910061.1669922435; session=53616c7465645f5f7f8ea2c30e31a3f76c041eea9b198e8773708a3b351c4d610da870019df4bef7e015eeb557ed354f3d74cef58ff2a2103cdf98f45059bd12",
    },
    withCredentials: true,
};

async function solutionPuzzle2() {
  const { data } = await axios(day1Config);
  const day1Data = data.split("\n");

  console.log("Solution: ", puzzle2(day1Data))
}

const example = ["1000","2000","3000","","4000","",
"5000","6000","","7000","8000","9000","","10000"]

const puzzle2 = (data) => {
  const solution = [];
  let sum = 0;
  for (let i = 0; i<data.length; i++){
    sum += Number(data[i]);

    if (data[i] === "" || i === data.length-1){
      solution.push(sum);
      sum = 0;
    }
  }

  const solutionArray = solution.sort(function(a, b) {
    return a - b;
  }).reverse();

  return (solutionArray.reduce((a,b,i) => i < 3 ? a + b : a, 0));
}

console.log("Example: ", puzzle2(example))
solutionPuzzle2()
