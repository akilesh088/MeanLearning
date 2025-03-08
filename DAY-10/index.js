// const exp= require('express');

// const  f = exp();
// const PORT=3000;
// f.get('/',(req,res)=>{res.send('local server using  express JS')});

// f.listen(PORT,() => 
//     { console.log(`server open in port ${PORT}`);
// })

function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function upperCase(str){//To convert to uppercase
    return str.toUpperCase();
}
function contains(str,Sstr){//To chheck for a Substring in a string 
    return str.includes(Sstr);
}
function findMax(arr){//To find max array
    return Math.max(...arr);
}
function removeDuplicates(arr){// To remove duplicates in array
    return [...new Set(arr)];
}
module.exports={
    add,sub,upperCase,contains,findMax,removeDuplicates
};
