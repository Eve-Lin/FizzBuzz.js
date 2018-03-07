var myNumber=0;
count=0;

for(count=0;count<100;count++){
  myNumber=myNumber+1;

  if(myNumber % 3==0 && myNumber % 5!=0){
    console.log('Fizz');
  }
  else if(myNumber % 5==0 && myNumber % 3!=0){
    console.log('Buzz');
  }
  else if(myNumber % 5==0 && myNumber % 3==0)
    {
      console.log('FizzBuzz');
    }
  else{
    console.log(myNumber);
  };
};
