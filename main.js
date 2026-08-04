//Assign the function
function cumulativeSum(int){
    //Assign sum from 0
 var sum = 0;
 //Write the loop for the function
    for(let i = 0; i<=int; i++){
        sum = sum +i;
    }
    //Recall the sum
    return sum;
}
//Recall the function with max numbr 6 should print 21
console.log(cumulativeSum(6))