function reverse(str:string):string{
    // add whatever parameters you deem necessary - good luck!
    if (str.length==0) {
        return ''
    }
    if (str.length===1) {
        return str
    }
    return `${str.charAt(str.length-1)}${reverse(str.substring(0,str.length-1))}`
  }
  
  console.log(reverse('awesome'));
  console.log(reverse('rithmschool'));