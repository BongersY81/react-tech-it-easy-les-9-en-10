import {bestSellingTv} from "../constants/inventory.js";

function productInformation() {
    const bestSellingTv =
        {
            brand: "Samsung",
            type: "UHD 55AU7040",
            name: "Samsung"
        };


    return `${bestSellingTv.brand} ${bestSellingTv.type} - ${bestSellingTv.name}`;
}
 console.log(productInformation(bestSellingTv));

export default productInformation;