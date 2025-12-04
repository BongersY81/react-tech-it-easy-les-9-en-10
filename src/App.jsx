import './App.css';
import {bestSellingTv, inventory} from './constants/inventory.js';
import totalProductsSales from "./helpers/totalProductsSales.js";
import totalPurchasedProducts from "./helpers/totalPurchasedProducts.js";
import totalProductsToSell from "./helpers/totalProductsToSell.js";
import productInformation from "./helpers/productInformation.js";
import tvPrice from "./helpers/tvPrice.js";
import tvScreenSize from "./helpers/tvScreenSize.js";
import check from "./assets/check.png";
import minus from "./assets/minus.png";
import {showOutcomeInConsole} from './constants/oefenbestand.js';

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

            <p>Best verkochte tv</p>

            <p>{bestSellingTv}</p>
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
            <h2>Alle Tvs</h2>

            <div className="buttons-row">
            <button type="button" onClick={mostSoldFirst}>Meest verkocht eerst</button>
            <button type="button" onClick={cheapestFirst}>Goedkoopste eerst</button>
            <button type="button" onClick={bestForSportsFirst}>Meest geschikt voor sport eerst</button>
            </div>

            <ul>
            {/*deel 2 opdracht 2a*/}
                {inventory.map((tv, index) => {

                    return <li key={index}>
            {/*deel 2 opdracht 2b            */}
                        <h3>{productInformation}{tv.brand} {tv.type} - {tv.name}</h3>
                        <p>{tvPrice(tv.price)}</p>
                        <h5>{tvScreenSize()}</h5>


                    </li>


                })}
            </ul>










        </>
    )

}

export default App;
