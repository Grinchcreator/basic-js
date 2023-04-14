let cats = [0, 1, '^^', '^^'];



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

