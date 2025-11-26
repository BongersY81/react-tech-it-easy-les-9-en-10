import './App.css';
import {inventory} from './constants/inventory.js';
import totalProductsSales from "./helpers/totalProductsSales.js";
import totalPurchasedProducts from "./helpers/totalPurchasedProducts.js";
import totalProductsToSell from "./helpers/totalProductsToSell.js";
import productInformation from "./helpers/productInformation.js";
import tvPrice from "./helpers/tvPrice.js";
import tvScreenSize from "./helpers/tvScreenSize.js";
import check from "./assets/check.png";
import minus from "./assets/minus.png";
function App() {

    function mostSoldFirst() {
        console.log("Meest verkocht eerst")
    }


    function cheapestFirst() {
        console.log("Goedkoopste eerst")
    }

    function bestForSportsFirst() {
        console.log("Meest geschikt voor sport eerst")
    }

    return (
        <>
            <h1>Tech it easy dashboard!</h1>
            <article className="total-product-sales">
                <p>{totalProductsSales(inventory)} </p>
            </article>
            <article className="total-purchased-products">
                <p>{totalPurchasedProducts(inventory)}</p>
            </article>
            <article className="total-products-to-sell">
                <p>{totalProductsToSell()}</p>
                <p>Aantal te verkopen Producten</p>
            </article>
            <p>{productInformation()}</p>
            <p>{tvPrice()}</p>
            <p>{tvScreenSize()}</p>

            <img src={check} alt="check" className={check}/> wifi
            <img src={minus} alt="minus" className={minus}/> speech
            <img src={check} alt="check" className={check}/> hdr
            <img src={check} alt="check" className={check}/> bluethooth
            <img src={minus} alt="minus" className={minus}/> ambilight

            <button type="button" onClick={mostSoldFirst}>Meest verkocht eerst</button>
            <button type="button" onClick={cheapestFirst}>Goedkoopste eerst</button>
            <button type="button" onClick={bestForSportsFirst}>Meest geschikt voor sport eerst</button>
        </>
    )

}

export default App;
