// step 1 addeventlistener

document.getElementById('btn-Deposit').addEventListener('click',function(){
   
    // step 2 get the deposit amaount from the Deposit-input field
    // for input field use .value to the the value inside the input field
  const depositInput=document.getElementById('Deposit-input');
  const newDepositAmountString=depositInput.value;
  const newDepositAmount= parseFloat(newDepositAmountString)
  console.log(typeof newDepositAmount);

// step 3 get the current deposit total
// for noon input (alement other then input ,textarea) use ineerText to get the text
const depositTotalElement = document.getElementById('deposit-total');
const previousDepositTotalString = depositTotalElement.innerText;
const previousDepositTotal=parseFloat(previousDepositTotalString);

// console.log(typeof previousDepositTotal)

// step 4  add number to set total deposit

const currentDepositTotal = previousDepositTotal + newDepositAmount;

depositTotalElement.innerText = currentDepositTotal;

// console.log(depositTotal);


// step 5 get balence total add 

const balenceTotalElement = document.getElementById('balence-total');
const previousBalenceTotalString = balenceTotalElement.innerText   //(problem)
const previousBalenceTotal = parseFloat(previousBalenceTotalString);



// step 6 calculate current total balence


const currentBalenceTotal = previousBalenceTotal + newDepositAmount;

balenceTotalElement.innerText=currentBalenceTotal;













// step 7 
depositInput.value='';

})