const num = require ('lodash');
const numbers = [12,2,3,4,5];
num.each(numbers,function(number,i){
    console.log(number);
})