const { addCombation } = require("../models/combinationModel");
const { itemsCombination, generateCombinations } = require("../utils/functions");

const addCombinationServ = async (combinations, length)=> {
  const itemsComb = itemsCombination(combinations);
  const result = await generateCombinations(itemsComb, length);

  await addCombation(result, itemsComb, (err, result)=> {
    console.log("err >>>", err);
    console.log("result >>>", result);
  })

  return result;
}

module.exports = {
  addCombinationServ
}