const { addCombinationServ } = require("../services/combinationServ");

const addCombination = async (req, res)=> {
  try{
    console.log("req.body", req.body);
    const {combinations, length} = req.body;
    if(length > combinations.length){
      throw new Error('Comination length must be > 1 and not much more then items length')
    }

    const result = await addCombinationServ(combinations, length);

    res.status(201).josn({message: 'Combination created succesfuly', data: result});
  }
  catch(err){
    console.log("err", err)
    // next(err);
  }
}

module.exports = {
  addCombination
}