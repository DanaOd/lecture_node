function isIsogram(str){
    //...
    const arr = str.toLowerCase().split('');
    if (arr.length===0){
      return true;
    }
    
   const newArr =  arr.map((number, index, array)=>{
      if (index !== array.indexOf(number)){
        console.log('the same letter');
        return false;
      }
      return number;
    });
  
    // console.log(newArr);
    
    if  (newArr.includes(false)){
      return false
    } else {
      return true;
    }
    
  }
  
  console.log(isIsogram("Dermatoglyphics"));
  console.log(isIsogram("aba"));
  console.log(isIsogram("isIsogram"));