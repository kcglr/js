const nums = [1, 2, 3, 4];

const output = except(nums, [1]);

console.log(output);

function except(array, excluded) {
  const output = [];
  for (let i of array) {
    if (!excluded.includes(i)) {
      output.push(i);
    }
  }
  return output;
}
