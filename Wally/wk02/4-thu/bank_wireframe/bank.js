console.log('Bank - ready');

var savingsBalance = 0.00;
var savBalValue = "0.00";
//var transAmount = 0;
var chequeBalance = 0;
var chqBalValue = "0.00";

var enoughFundsTest ='True';

var savBalValue = document.querySelector('.savBalValue');
var savTransAmount=document.querySelector('.savTransAmount');
var savWithdrawButton = document.querySelector('.savWithdraw');
var savDepositButton = document.querySelector('.savDeposit');
var savTransferButton = document.querySelector('.savTransfer');

var chqBalValue = document.querySelector('.chqBalValue');
var chqTransAmount=document.querySelector('.chqTransAmount');
var chqWithdrawButton = document.querySelector('.chqWithdraw');
var chqDepositButton = document.querySelector('.chqDeposit');
var chqTransferButton = document.querySelector('.chqTransfer');

function numberCheckGuard (transAmount) {
  if (isNaN(Number(transAmount))) {
    document.querySelector('.savTransAmount').value = '';
    document.querySelector('.chqTransAmount').value = '';
    alert ('Please enter a number');
  }
}


var savIsThereEnoughFunds = function (){
  numberCheckGuard (savTransAmount.value);
  var testAmt = ( Number(savTransAmount.value));
  var testBal = (savingsBalance);
  if (Number(savTransAmount.value) <= savingsBalance || (Math.abs(testAmt - testBal) < 0.0001) ) {
    savWithdraw();
  }  else {
      enoughFundsTest = 'False';
      alert("Not Enough Funds - Transfer Funds or reduce withdrawal amount");
    }
};

var chqIsThereEnoughFunds = function (){
  numberCheckGuard (chqTransAmount.value);
  var testAmt = ( Number(chqTransAmount.value));
  var testBal = (chequeBalance);
  if (Number(chqTransAmount.value) <= chequeBalance || (Math.abs(testAmt - testBal) < 0.0001) ) {
    chqWithdraw();
  }  else {
      enoughFundsTest = 'False';
      alert("Not Enough Funds - Transfer Funds or reduce withdrawal amount");
    }
};

function savDeposit(){
  numberCheckGuard (savTransAmount.value);
  savingsBalance = savingsBalance + Number(savTransAmount.value);
  savBalValue.textContent = savingsBalance.toFixed (2);
  console.log('savingsBalance ' + savingsBalance);
  console.log(savTransAmount.value);
  console.log(savBalValue);
}

function savWithdraw(){
  savingsBalance = savingsBalance - Number(savTransAmount.value);
  savingsBalance = Math.abs(savingsBalance);
  savBalValue.textContent = savingsBalance.toFixed (2);
  console.log('savingsBalance ' + savingsBalance);
}

function savTransfer () {
  enoughFundsTest = 'True';
  savIsThereEnoughFunds ();
  chqTransAmount = savTransAmount;
    if (enoughFundsTest === 'True') {
      chqDeposit();
    }
        console.log(chqTransAmount);
  chqTransAmount=document.querySelector('.chqTransAmount');
  enoughFundsTest = 'True';
}

function chqDeposit () {
  numberCheckGuard (chqTransAmount.value);
  chequeBalance = chequeBalance + Number(chqTransAmount.value);
  chqBalValue.textContent = chequeBalance.toFixed (2);
  console.log('chequeBalance ' + chequeBalance);
  console.log(chqBalValue);
}

function chqWithdraw () {
  chequeBalance = chequeBalance - Number(chqTransAmount.value);
  chequeBalance = Math.abs(chequeBalance);
  chqBalValue.textContent = chequeBalance.toFixed (2);
  console.log('chequeBalance ' + chequeBalance);
}

function chqTransfer () {
  enoughFundsTest = 'True';
  chqIsThereEnoughFunds ();
  savTransAmount = chqTransAmount;
  if (enoughFundsTest === 'True') {
    savDeposit();
  }
  console.log(savTransAmount);
  savTransAmount=document.querySelector('.savTransAmount');
  enoughFundsTest = 'True';
}


savDepositButton.addEventListener('click', savDeposit);
savWithdrawButton.addEventListener('click', savIsThereEnoughFunds);
savTransferButton.addEventListener('click', savTransfer);

chqDepositButton.addEventListener('click', chqDeposit);
chqWithdrawButton.addEventListener('click', chqIsThereEnoughFunds);
chqTransferButton.addEventListener('click', chqTransfer);

//function numberCheckGuard (input) {
//  if (isNaN(Number(input))) {
//   alert ('Please enter a number');
//  }
//}









//
