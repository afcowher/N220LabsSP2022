/*for (let a = 1; a <= 10; a++){
    console.log(a);
}
*/


let startArray =  [1, 2, 25, 21, 50, 90];

function above20(x){
    let count = 0;
    for(let i = 0; i < startArray.length; i++){
        if(x[i] > 20){
            count++;
        }
    }
    if(count < 3){
        return count;
    }
    
    if(count > 3){
        return -1;
    }
}


console.log(above20(startArray));