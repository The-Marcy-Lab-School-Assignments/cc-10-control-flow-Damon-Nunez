//1
function greatestOfTwo(int1,int2){
  if(int1 > int2){
      console.log(int1 + " is the greater number and " + int2 + " is the smaller number");
  } else
  console.log (int2 + " is the greater number and " + int1 + " is the smaller number");
}

//2
function greatestOfThree(int1,int2,int3){
  if(int1 > int2 && int1 > int3){
      console.log(int1 + " is the greatest of all 3 numbers ");
  } else if (int2 > int1 && int2> int3){
      console.log(int2 + " is the greatest of all 3 numbers");
  } else
  console.log( int3 + " is the greates of all 3 numbers");
}

//3
function greatestOfFour(int1,int2,int3,int4){
   if(int1 > int2 && int1 > int3 && int1 > int4){
      console.log(int1 + " is the greatest of all 3 numbers ");
  } else if (int2 > int1 && int2> int3 && int2> int4){
      console.log(int2 + " is the greatest of all 3 numbers");
  } else if(int3 > int1 && int3 > int2 && int3 > int4){
  console.log( int3 + " is the greates of all 3 numbers");
} else {
    console.log(int4 + " is the greatest of all 3 numbers");
}
}



//4
function leastOfFour(){
  
}

greatestOfTwo(60,50)
greatestOfThree(2,4,30)
greatestOfFour(3,4,50,6)