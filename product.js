
function calculateTotal(productList) {
    let total = 0;
productList.forEach((product) => {
    total += product.price * product.quantity;
    
})
return total;
}

function printTotal(value) {
    console.log(value);
}


const productList = [
    {name:'paint', price:99, quantity:2},
    {name:'shirt', price:88, quantity:3},
    {name:'t-shirt', price:77, quantity:4}
];

const grandTotal = calculateTotal(productList);
printTotal(grandTotal);