const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(cats){
    let count = 0;
    for(let i=1; i<cats.length; i++){
        if (cats[i]=== '^^') {
            count +=1;
        }
      }
      return count;
     }

return countCats;



module.exports = {
  countCats
};
