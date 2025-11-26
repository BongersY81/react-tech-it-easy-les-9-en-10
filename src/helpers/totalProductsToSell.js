function totalPurchasedProducts() {
return 73;
}

function totalProductsToSell() {
    const purchased = totalPurchasedProducts();
   const sold = 33
    return purchased - sold;
}


console.log(totalProductsToSell());






export default totalProductsToSell;