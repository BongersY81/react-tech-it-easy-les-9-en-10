import {inventory} from "./inventory.js";

 function showOutcomeInConsole() {
     console.log("uitkomst opdracht 1a");
     console.log("uitkomst opdracht 1b");
 }

 const types = ['UHD 55AU7040','UHD 55AU7040','43PUS6504/12','NH3216SMART','QE55Q60T','43HAK6152','50PUS7304/12','55PUS7805','B2450HD','32WL1A63DG',];
 const newArray = types.map((type) => {
    return type
 });
 console.log("deel 2 opdracht 1a")
console.log(newArray)

 const soldOutTVs = inventory.filter((inventory) => {
    return inventory.originalStock === inventory.sold;
});


console.log("deel 2  1b")
console.log(soldOutTVs)

const specificTVType = inventory.find((inventory) => {
    return inventory.type === 'NH3216SMART';
});

console.log("deel 2 opdracht 1c")
console.log(specificTVType)

const tvRefreshRate = inventory.map((inventory) => {
    return {brand: inventory.brand, name: inventory.name, tvRefreshRate:inventory.refreshRate >= 100};

});

console.log("deel 2 opdracht 1d");
console.log(tvRefreshRate);

// const screenSizes = [[43, 50, 55, 65],[43, 50, 58, 65],[32],[43, 50, 55, 58, 65],[43, 50, 55, 58],[ 43, 50, 55, 58, 65, 70],[50, 55],[24],[32, 43, 50]];
//  const tvInformation = screenSizes.filter((screenSize) => {
//
//
//      // return screenSize.availableSizes >= 65;
//  });

const tvInformation = inventory.filter((inventory) => {
    for (let i = 0; i < inventory.availableSizes.length; i++) {
        if (inventory.availableSizes[i] >= 65) {
            return inventory;
        }
    }
    });

console.log("deel 2 opdracht 1e");
     console.log(tvInformation);


     const filterHasAmbilight = inventory.filter((inventory) => {
     const hasAmbilight = inventory.options.name.find((inventory));
         if (inventory.options.name"ambilight".apllicable.) {
             return inventory;
         }
     });









export {showOutcomeInConsole};
export { types, newArray };
export {soldOutTVs,inventory};
export {specificTVType};
export {tvRefreshRate};
export {tvInformation};