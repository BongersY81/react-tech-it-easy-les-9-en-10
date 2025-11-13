function totalPurchasedProducts(inventoryArray) {
    let counter = 0;
    for (let i = 0; i < inventoryArray.length; i++) {
        counter = counter + inventoryArray[i].originalStock;
    }
    return counter;

}

export default totalPurchasedProducts;