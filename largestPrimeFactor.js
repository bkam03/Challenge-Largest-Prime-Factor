exports.largestPrimeFactor = function(n){

  function primeFinder( num ) {
    var primeNumber = num;

    //for loop that goes until i reaches n, or a prime factor (not 1) is found
    for( var i = 2; i < num; i++ ) {
        //modulus n by each number, and it should == 0 if it is largestPrimeFactor
      if( num % i === 0 ) {
        //if modulus comes out 0, then recurse
        primeNumber = primeFinder( primeNumber / i );
        break;
      }
      //either return n if no factor found, or found factor
    }
    return primeNumber;
  }
  //start recursion cycle
  return primeFinder( n );
};
