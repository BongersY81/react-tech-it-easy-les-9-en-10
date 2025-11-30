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
import {showOutcomeInConsole} from './constants/oefenbestand.js';
// import tvBrands from "./helpers/tvBrands.js";
function App() {

    showOutcomeInConsole();


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
                <h3>Aantal verkochte producten</h3>
                <p>{totalProductsSales(inventory)} </p>
            </article>

            <article className="total-purchased-products">
                <h3>Aantal ingekochte producten</h3>
                <p>{totalPurchasedProducts(inventory)}</p>

            </article>

            <article className="total-products-to-sell">
                <h3>Aantal te verkopen Producten</h3>
                <p>{totalProductsToSell()}</p>
            </article>

            <p>{productInformation()}</p>
            <p>{tvPrice(549)}</p>
            <p>{tvScreenSize()}</p>

            <div className="icons-row">
            <img src={check} alt="check" className={check}/> wifi
            <img src={minus} alt="minus" className={minus}/> speech
            <img src={check} alt="check" className={check}/> hdr
            <img src={check} alt="check" className={check}/> bluethooth
            <img src={minus} alt="minus" className={minus}/> ambilight
            </div>
            <p></p>
            <div className="buttons-row">
            <button type="button" onClick={mostSoldFirst}>Meest verkocht eerst</button>
            <button type="button" onClick={cheapestFirst}>Goedkoopste eerst</button>
            <button type="button" onClick={bestForSportsFirst}>Meest geschikt voor sport eerst</button>
            </div>

            {/*<ul>*/}
            {/*{tvBrands(inventory).map((brand, index) => (*/}
            {/*    <li key={index}>{brand}</li>*/}
            {/*))}*/}
            {/*</ul>*/}
        </>
    )

}

export default App;
