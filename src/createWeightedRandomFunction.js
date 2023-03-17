// Credit George Francis: https://georgefrancis.dev/writing/balanced-color-palettes-generative-snacks/
/**
 * Semi function generator
 * @param { array } items Array of objects with properties weight and value
 * @returns a new function which semi-randomly selects values
 */
function createWeightedRandomFunction(items) {
  const weightedArray = [];

  for (const item of items) {
    for (let i = 0; i < item.weight; i++) {
      weightedArray.push(item.value);
    }
  }
  return function () {
    return weightedArray[Math.floor(Math.random() * weightedArray.length)];
  };
}

export { createWeightedRandomFunction }