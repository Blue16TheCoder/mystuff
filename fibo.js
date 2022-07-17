   let count = 10; //print 10 fibonacci numbers
   let x = 0; //Counter for loop variable
   let num1 = 0; //1st number
   let num2 = 1; // 2nd number 
   if (x++ < count){ // adding num1 into console if less than counter
       console.log(num1); 
       //num1++ //adding num1 by 1
    } 
   if (x++ < count){console.log(num2);} //num2++} // adding num 2 into console if less than counter
   while(x++ < count){
       console.log(num1+num2);
    [num1,num2] = [num2, num1+num2];
   }
