// get the input value function
function getInputValue(inputValueId) {
    const inputValueGate = document.getElementById("inputValueId");
    const inputValueText = inputValueGate.value;
    const inputValueFloat = parseFloat(inputValueText);
    return inputValueFloat;

}
// // get the innerText function
// function getInnerText(innerTextId) {
//     const innerTextGate = document.getElementById("innerTextId");
//     const innerTextText = innerTextGate.value;
//     const innerTextFloat = parseFloat(innerTextText);
//     return innerTextFloat;

// }

// handle Calculate Button event handler
document.getElementById("calculate-button").addEventListener('click', function () {
    const inputValueFloat = getInputValue(incomeInput);
    // const foodValue = getInputValue(foodInput);
    // const rentValue = getInputValue(rentInput);
    // const clothesValue = getInputValue(clothesInput);
    // let totalInnerText = getInnerText(totalInnerText);
    // const totalExpensesValue = foodValue + rentValue + clothesValue;
    // totalInnerText = totalExpensesValue;
    const totalinnerTextGate = document.getElementById("totalInnerText");
    let totalInnerTextText = totalinnerTextGate.innerText;
    const otalInnerTextFloat = parseFloat(totalInnerTextText);
    const new1 = inputValueFloat;
    totalinnerTextGate.innerText = new1;
});