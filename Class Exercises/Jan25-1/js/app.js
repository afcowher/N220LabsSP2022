//This code is storing the string "plastic" in the variable shovelType
//shovelType = "plastic";

//This code is asking if shovelType is the exact same as "plastic"
//shovelType == "plastic";

let snowAmount = 10;

function shovel(shovelType){
    //put shovel down
    //push shovel forward
    //lift shovel
    //throw snow

    if(shovelType == "plastic"){
        snowAmount -= 2;
    }

    if(shovelType == "metal"){
        snowAmount -= 1;
    }

    return !(snowAmount > 0);
}

let res = shovel("plastic");
console.log("Is done? " + res);

if(res != true){
    res = shovel("plastic");
    console.log("Is done? " + res);
}

if(!res){
    res = shovel("plastic");
    console.log("Is done? " + res);
}