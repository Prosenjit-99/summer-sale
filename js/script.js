function section(Id1, Id2) {
    const itemContainer = document.getElementById(Id1);
    const itemName = document.getElementById(Id2).innerText;
    const li = document.createElement('li');
    li.innerText = itemName;
    itemContainer.appendChild(li);
}




function previousValue(textValue) {
    const ValueField = document.getElementById(textValue);
    const ValueString = ValueField.innerText;
    const Value = parseFloat(ValueString);
    return Value;
}

function valueText(previousId, newValue) {
    const newTotal = document.getElementById(previousId);
    newTotal.innerText = newValue;
}

document.getElementById('product1').addEventListener('click', function () {
    section('selected-items', 'accessories1');

    const productPrice = previousValue('product1Price');
    const totalAmountValue = previousValue('totalPrice');
    const newPriceValue = productPrice + totalAmountValue;
    valueText('totalPrice',  newPriceValue);

    const totalPriceValue = previousValue('totalAmount');
    const amountValue = currentPriceValue;
    valueText('totalAmount', amountValue);
})

document.getElementById('product2').addEventListener('click', function () {
    section('selected-items', 'accessories2');

    const productPrice = previousValue('product2Price');
    const totalAmountValue = previousValue('totalPrice');
    const newPriceValue = productPrice + totalAmountValue;
    valueText('totalPrice',  newPriceValue);

    const totalPriceValue = previousValue('totalAmount');
    const amountValue = currentPriceValue;
    valueText('totalAmount', amountValue);
})
document.getElementById('product3').addEventListener('click', function () {
    section('selected-items', 'accessories3');

    const productPrice = previousValue('product3Price');
    const totalAmountValue = previousValue('totalPrice');
    const newPriceValue = productPrice + totalAmountValue;
    valueText('totalPrice',  newPriceValue);

    const totalPriceValue = previousValue('totalAmount');
    const amountValue = currentPriceValue;
    valueText('totalAmount', amountValue);
})
document.getElementById('product4').addEventListener('click', function () {
    section('selected-items', 'accessories4');

    const productPrice = previousValue('product4Price');
    const totalAmountValue = previousValue('totalPrice');
    const newPriceValue = productPrice + totalAmountValue;
    valueText('totalPrice',  newPriceValue);

    const totalPriceValue = previousValue('totalAmount');
    const amountValue = currentPriceValue;
    valueText('totalAmount', amountValue);
})
document.getElementById('product5').addEventListener('click', function () {
    section('selected-items', 'accessories5');

    const productPrice = previousValue('product5Price');
    const totalAmountValue = previousValue('totalPrice');
    const newPriceValue = productPrice + totalAmountValue;
    valueText('totalPrice',  newPriceValue);

    const totalPriceValue = previousValue('totalAmount');
    const amountValue = currentPriceValue;
    valueText('totalAmount', amountValue);
})
document.getElementById('product6').addEventListener('click', function () {
    section('selected-items', 'accessories6');

    const productPrice = previousValue('product6Price');
    const totalAmountValue = previousValue('totalPrice');
    const newPriceValue = productPrice + totalAmountValue;
    valueText('totalPrice',  newPriceValue);

    const totalPriceValue = previousValue('totalAmount');
    const amountValue = currentPriceValue;
    valueText('totalAmount', amountValue);
})