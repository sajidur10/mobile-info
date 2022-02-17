// handle Calculate Button event handler
document.getElementById("calculate-button").addEventListener('click', function () {
    // get income input value
    const incomeValueGate = document.getElementById("incomeInput");
    const incomeValueText = incomeValueGate.value;
    const incomeValueFloat = parseFloat(incomeValueText);
    // get food input value
    const foodValueGate = document.getElementById("foodInput");
    const foodValueText = foodValueGate.value;
    const foodValueFloat = parseFloat(foodValueText);
    // get rent input value
    const rentValueGate = document.getElementById("rentInput");
    const rentValueText = rentValueGate.value;
    const rentValueFloat = parseFloat(rentValueText);
    // get rent input value
    const clothesValueGate = document.getElementById("clothesInput");
    const clothesValueText = clothesValueGate.value;
    const clothesValueFloat = parseFloat(clothesValueText);
    // get total InnerText
    const totalinnerTextGate = document.getElementById("totalInnerText");
    let totalInnerTextText = totalinnerTextGate.innerText;
    const otalInnerTextFloat = parseFloat(totalInnerTextText);
    const oldTotalExpensesValue = foodValueFloat + rentValueFloat + clothesValueFloat;

    // make new total InnerText
    const newTotalExpensesValue = oldTotalExpensesValue;
    totalinnerTextGate.innerText = newTotalExpensesValue;

    // get balance InnerText
    const balanceinnerTextGate = document.getElementById("balanceInnerText");
    const balanceInnerTextText = balanceinnerTextGate.innerText;
    const balanceInnerTextFloat = parseFloat(balanceInnerTextText);
    newbalanceInnerTextFloat = incomeValueFloat - oldTotalExpensesValue;
    balanceinnerTextGate.innerText = newbalanceInnerTextFloat;
    // clear

});

// handle Calculate Button event handler
document.getElementById("saveButton").addEventListener('click', function () {
    // get income input value
    const incomeValueGate = document.getElementById("incomeInput");
    const incomeValueText = incomeValueGate.value;
    const incomeValueFloat = parseFloat(incomeValueText);

    // get saving input value
    const savingValueGate = document.getElementById("saveValue");
    const savingValueText = savingValueGate.value;
    const savingValueFloat = parseFloat(savingValueText);

    // get balance InnerText
    const balanceinnerTextGate = document.getElementById("balanceInnerText");
    const balanceInnerTextText = balanceinnerTextGate.innerText;
    const balanceInnerTextFloat = parseFloat(balanceInnerTextText);

    // get saving InnerText
    const savinginnerTextGate = document.getElementById("savingInnerTextText");
    let savingInnerTextText = savinginnerTextGate.innerText;
    const savingInnerTextFloat = parseFloat(savingInnerTextText);
    const newsavingInnerTextValue = incomeValueFloat * savingValueFloat;
    const newsavingInnerText = newsavingInnerTextValue / 100;
    savinginnerTextGate.innerText = newsavingInnerText;

    // get remainingBalance InnerText
    const remaininginnerTextGate = document.getElementById("remainingBalance");
    let remainingInnerTextText = remaininginnerTextGate.innerText;
    const remainingInnerTextFloat = parseFloat(remainingInnerTextText);
    const newRemainingInnerTextFloat = balanceInnerTextFloat - newsavingInnerText;
    remaininginnerTextGate.innerText = newRemainingInnerTextFloat


})