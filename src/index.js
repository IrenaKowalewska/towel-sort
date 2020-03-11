
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let mergeArr = [];
    if(matrix === undefined ){
      return mergeArr;
    }else{
    for(let i = 0; i < matrix.length ; i++)
    {
      if(i%2 !== 0)
      {
        mergeArr = mergeArr.concat(matrix[i].reverse()); 
      }else{
        mergeArr = mergeArr.concat(matrix[i]); 
      }
    }
    return mergeArr;
  }
  }


