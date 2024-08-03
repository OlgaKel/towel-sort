
// You should implement your task here.

module.exports = function towelSort (matrix) {
   let arr = [];
   let result =[];
   if( matrix === undefined){
      return []
   }else{
 for(let i=0;i < matrix.length;i++){
   if(i === 1 || i === 3){
    let d = matrix[i].reverse()
    arr.push(d)
   }else(
     arr.push(matrix[i])
   )
 }
 for(let elems of arr){
   for(let elem of elems){
     result.push(elem)
   }
 }
 return result;}
}
