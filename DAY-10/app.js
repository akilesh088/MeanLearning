const math= require('./index');
const moment=require('moment');

const sum=math.add(10,4);
const diff=math.sub(10,5);


const str=math.upperCase('jhg');
const str1=math.contains('abcd','ab');


const numbers=[1,2,3,4,5,5,4,6,7,8,4,2,2];

const formattedDate=moment().format('MMMM Do YYYY,h:mm:ss a');
setInterval(()=>{console.log(Interval)},1000);
console.log(sum);
console.log(diff);
console.log(str);
console.log(str1);
console.log(math.findMax(numbers));
console.log(math.removeDuplicates(numbers));
console.log('Current Date:',formattedDate);
console.log(__dirname);
console.log(__filename);
console.warn('hello');
console.error('Error');
console.log();