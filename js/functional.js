function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId).value;
    const inputFieldFloat = parseFloat(inputField);
    document.getElementById(fieldId).value = '';
    return inputFieldFloat;
}
function getInnerTextValue(fieldId){
const fieldTag = document.getElementById(fieldId)
const fieldValueInText=fieldTag.innerText;
const fieldValueInFloat = parseFloat(fieldValueInText);
return fieldValueInFloat;
};
function updateBalance(fieldId, amount) {
    const previousTotalFloat = getInnerTextValue(fieldId);
    const newTotal = previousTotalFloat + amount;
    document.getElementById(fieldId).innerText = newTotal;
    return newTotal;
};
function updateTotalBalance(isAdd, amount) {
    let totalBalanceInFloat = getInnerTextValue('total-balance');
    if (isAdd == true) {
        totalBalanceInFloat = totalBalanceInFloat + amount;
    }
    else {
        totalBalanceInFloat = totalBalanceInFloat - amount;
    }
    document.getElementById('total-balance').innerText = totalBalanceInFloat;
}
// handle Deposit
document.getElementById('deposit-button').addEventListener('click', function () {
    const amount = getInputValue('deposit-input');
    if (amount > 0) {
        updateBalance('deposit-balance', amount);
        updateTotalBalance(true, amount);
    }
    else {
        alert("Insert right value")
    }
});
// handle withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    const amount = getInputValue('withdraw-input');
    const totalBalaceFloat = getInnerTextValue('total-balance');
    if (amount > 0) {
        if(totalBalaceFloat>=amount){
            updateBalance('withdraw-balance', amount);
            updateTotalBalance(false, amount);
        }
        else{
            alert("You don't have enough Money");
        }
    
    }
    else {
        alert("Insert right value")
    }
})