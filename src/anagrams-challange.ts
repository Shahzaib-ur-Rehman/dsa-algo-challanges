


//using nested loop and array methods  
//complaxity O(n)^2
function checkStringsMethod1(str1: string, str2: string): boolean {
    if (str1.length !== str2.length) {
        return false
    }
    let array1 = str1.split("");
    let array2 = str2.split("");
    for (let index = 0; index < array1.length; index++) {
        const requiredIndex = array2.findIndex((val) => val === array1[index])
        if (requiredIndex === -1) {
            return false
        }
        array2.splice(requiredIndex, 1)
    }

    return true
}


//console.log(checkStringsMethod1('aab', 'bad'))

// method using string only no arrays but no idea how i can remove a specfic character from string 
function checkStringsMethod2(str1: string, str2: string): boolean {
    if (str1.length !== str2.length) {
        return false
    }
    for (let index = 0; index < str1.length; index++) {
        const requiredIndex = str2.indexOf(str1[index])
        if (requiredIndex === -1) {
            return false
        }

        str1.slice()


    }
    return true
}


// using frequancy counter pattern
//complaxity O(n)
function checkStringsMethod3(str1: string, str2: string): boolean {
    if (str1.length !== str2.length) {
        return false
    }
    let frequancyCounter1: any = {}
    let frequancyCounter2: any = {}
    for (const val of str1) {
        frequancyCounter1[val] = (frequancyCounter1[val] || 0) + 1
    }
    for (const val of str2) {
        frequancyCounter2[val] = (frequancyCounter2[val] || 0) + 1
    }
    for (const key in frequancyCounter1) {
         if (!(key in frequancyCounter2)) {
            return false
         }
         if (frequancyCounter1[key]!==frequancyCounter2[key]) {
            return false
         }
    }
    return true
}


console.log(checkStringsMethod3("anagram","nagaram"))



