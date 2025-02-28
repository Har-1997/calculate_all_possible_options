const db = require('../config/db');

const combinations = {
  addCombation: (combinations, items, callback)=> {
    db.beginTransaction((err)=> {
      if (err) return callback(err, null);

      db.query('INSERT INTO combinations (combination) VALUES (?)', [JSON.stringify(combinations)], (err, combinationResult) => {
        if (err) {
          return db.rollback(() => {
            console.error("❌ Error inserting combination:", err);
            callback(err, null);
          });
        }
      })

      db.query('INSERT INTO combinations (combination) VALUES (?)', [items.map((item)=> item)]);


      db.commit((err) => {
        if (err) {
          return db.rollback(() => {
            console.error("❌ Error committing transaction:", err);
            callback(err, null);
          });
        }

        console.log("✅ Transaction successful: Item and Combination added");
        callback(null, { combinations });
      });
    })
  }
}

module.exports = combinations;