const getItemsString = function(array) {
    'use strict';
    // Write code under this line
    let result = "";
    for (let i = 0; i < array.length; i += 1) {
      result += `${i+1} - ${array[i]}\n`
    }
    return result;
  };

  let clients = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
  let numbers = [5, 10, 15];
  
  console.log(getItemsString(clients));
  console.log(getItemsString(numbers));
  /*
  '1 - Mango
  2 - Poly
  3 - Ajax
  4 - Lux
  5 - Jay
  6 - Kong
  '
  */
  
  //console.log(getItemsString([5, 10, 15]));
  /*
  '1 - 5
  2 - 10
  3 - 15
  '
  */