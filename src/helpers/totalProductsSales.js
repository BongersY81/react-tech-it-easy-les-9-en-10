

function totalProductsSales(inventoryArray) {
   let counter = 0;
   for (let i = 0; i < inventoryArray.length; i++) {
        counter = counter + inventoryArray[i].sold;
   }
return counter;

}

export default totalProductsSales;

