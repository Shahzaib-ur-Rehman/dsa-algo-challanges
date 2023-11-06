//  simple with nested loops 
//time complaxity  O(n)^2
function same(array1,array2) {
    if (array1.length!==array2.length) {
        return false
    }
    for (let i = 0; i < array1.length; i++) {
        const index = array2.findIndex((val)=>val===array1[i]);
        if (index===-1) {
            return false
        }
        array2.splice(index,0)
        
    }
    return true
}

// console.log(same([2,2,4],[4,5,16]))


//  using objects 
//time complaxity  O(3n) means O(n)
function frequancyCounterPattern(array1,array2) {
    if (array1.length!==array2.length) {
        return false
    }
    let frequancyCounterObject1={};
    let frequancyCounterObject2={};
    //time complaxity O(n)
    for (let index = 0; index < array1.length; index++) {
        if (frequancyCounterObject1[array1[index]]) {
            frequancyCounterObject1[array1[index]]+=1;
        }else{
            frequancyCounterObject1[array1[index]]=1
        }
        
    }
    //time complaxity O(n)
    for (let index = 0; index < array2.length; index++) {
        if (frequancyCounterObject2[array2[index]]) {
            frequancyCounterObject2[array2[index]]+=1;
        }else{
            frequancyCounterObject2[array2[index]]=1
        }
        
    }

    console.log(frequancyCounterObject1)
    console.log(frequancyCounterObject2)
     //time complaxity O(n)
    for (const key in frequancyCounterObject1) {
        //hasOwnProperties() This method has a complexity of O(1)
        if (!frequancyCounterObject2.hasOwnProperty(parseInt(key)*parseInt(key))) {
            return false
        }
    
        console.log(frequancyCounterObject1[key])
        console.log(frequancyCounterObject2[(key*key).toString()])
        if (frequancyCounterObject1[key]!==frequancyCounterObject2[(key*key).toString()]) {
            return false
        }
    }
    return true;
      
}


//console.log(frequancyCounterPattern([1,4,1],[1,16,1]))


// simplify my solution 
function frequancyCounterPatternSimplified(array1,array2) {
    if (array1.length!==array2.length) {
        return false
    }
    let frequancyCounterObject1={};
    let frequancyCounterObject2={};

    for (const val of array1) {
        frequancyCounterObject1[val]=(frequancyCounterObject1[val] || 0)+1;
    }
    for (const val of array2) {
        frequancyCounterObject2[val]=(frequancyCounterObject2[val] || 0)+1;
    }
    console.log(frequancyCounterObject1)
    console.log(frequancyCounterObject2)
    for (const key in frequancyCounterObject1) {
         if (!(key**2 in frequancyCounterObject2)) {
            return false
         }
         if (frequancyCounterObject2[key**2]!==frequancyCounterObject1[key]) {
            return false
         }
    }
    return true
}

console.log(frequancyCounterPatternSimplified([1,4,2,25],[4,16,1,625]))