
function cubeNumber(number) {
if(typeof number !== "number"){

    return 'please enter a number'
}
else{
    let cube = number * number * number;
    return cube;
}
}


function matchFinder(string1, string2) { 
if(typeof string1 !== 'string' || typeof string2 !== 'string' || string1,string2 === ''){
    return 'please enter a string'
}
else{
    let str1 = string1.includes(string2)
    return str1;
}
}



function sortMaker(arr)  {
    if (arr.length === 2 && arr[1] === arr[0]) {   
        return "equal";
    } 
    else if (arr.length === 2 && typeof arr[0] === 'number' && typeof arr[1] === 'number'  && arr[0] > 0 && arr[1] > 0) {   
        let short = arr.sort((a, b) => b - a)
        arr.length === 2 && arr[1] === arr[0]
    return short;
    }
   
    else {
        
        return "Invalid Input";
    }
   
}



function findAddress(obj) {
    
if(typeof obj !== 'object'){
    return 'please Enter a object'
}
else {

    let street = obj.street || ',__,__'
    let house = obj.house || ',__,__'
    let society = obj.society || ',__,__'
    return street + ',' + house + ',' + society;
}
}





function canPay(changeArray, totalDue) {
    let sum = 0;
if(!Array.isArray(changeArray) || changeArray.length === 0){
    return 'please enter a valid array and fil the array'
}
else{
    for(let i = 0; i < changeArray.length; i++){
        if(typeof changeArray[i] === 'number'){
            sum += changeArray[i];
        }
    }
    
    if(sum >= totalDue){
        return true;
    }
    
    else{
        return false; 
    }   
}
}






