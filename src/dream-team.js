const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
const DreamTeam = ['Matt', 'Ann', 'Dmitry', 'Max'];

for (let word of DreamTeam) {
    word = word.charAt().toUpperCase() + word.slice(1);
    console.log(word);
}
DreamTeam.sort();
console.log(DreamTeam);

const TeamName = DreamTeam.map((word) => word[0]).join('');
console.log(TeamName);
}

module.exports = {
  createDreamTeam
};
