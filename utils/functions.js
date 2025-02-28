function itemsCombination(arr) {
  let items = [];
  for (let i = 0; i < arr.length; i++) {
    const letter = String.fromCharCode(i+65);
    items.push(`${letter}_1`);

    if(arr[i] > 1){
      for(let j = 2; j <= arr[i]; j++){
        items.push(`${letter}_${j}`);
      }
    }
  }
  return items;
}

function generateCombinations(arr, count) {
  let result = [];
  function combinationsBuilder(start, path) {
    if (path.length === count) {
      result.push([...path]);
      return;
    }
  
    for (let i = start; i < arr.length; i++) {
      if (path.some(item => item[0] === arr[i][0])) continue;
      path.push(arr[i]);
      combinationsBuilder(i + 1, path);
      path.pop();
    }
  }
  
  combinationsBuilder(0, []);
  return result;
}

module.exports = {
  itemsCombination,
  generateCombinations
}