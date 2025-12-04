


// function tvScreenSize() {
//
//     return ["43 inch (109 cm)"," ", "50 inch (127 cm)"," ", "55 inch (140 cm)"," ", "65 inch (165 cm)"];
//
// }
//
// console.log(tvScreenSize())


function tvScreenSize(items) {
    return items.map((item) => {


        const tvSize = item.availableSizes + "inches" + Math.round(item.availableSizes * 2.54) + "cm";
        const sizeInches = item.availableSizes + "inches";
        const sizeInCm = Math.round(item.availableSizes * 2.54) + "cm";

        return {tvSize, sizeInches, sizeInCm};

    });


}


export default tvScreenSize;