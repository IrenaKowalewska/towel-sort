
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let mergArr = [];
    if(matrix === undefined ){
      return mergArr;
    }else{
    for(let i = 0; i < matrix.length ; i++)
    {
      if(i%2 !== 0)
      {
        mergArr = mergArr.concat(matrix[i].reverse()); 
      }else{
        mergArr = mergArr.concat(matrix[i]); 
      }
    }
    return mergArr;
  }
  }
