import './App.css';
import {inventory} from './constants/inventory.js';
import totalProductSales from "./helpers/totalProductSales.js";
import totalPurchasedProducts from "./helpers/totalPurchasedProducts.js";

function App() {
    return (
        <>
            <h1>Tech it easy dashboard!</h1>
            <article className="total-product-sales">
                <p>{totalProductSales(inventory)} </p>
            </article>
            <article className="total-purchased-products">
                <p>{totalPurchasedProducts(inventory)}</p>
            </article>

        </>


    )

}


export default App
