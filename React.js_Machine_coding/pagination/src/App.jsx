import { useState, useEffect } from "react";
import './index.css';
function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();

    if (data && data.products) {
      setProducts(data.products);


    } console.log(data);
  };

  useEffect(() => {
    fetchProducts();
  }, [])

  const selectPageHandler = (selectedPage) => {

    // error handling for errors first and last 

    if (selectedPage >= 1 &&
      selectedPage <= products.length / 10 &&
      selectedPage !== page
    )

      // it was for selected page   aage piche oon page click 
      setPage(selectedPage);
  }
  return (
    <div>
      {
        products.length > 0 && (
          <div className="products">
            {products.slice(page * 10 - 10, page * 10).map((prod) => {
              return (
                <span className="products__single" key={prod.id}>
                  <img src={prod.thumbnail} alt={prod.title} />
                  <span>{prod.title}</span>
                </span>
              )
            })}
          </div>
        )
      }
      {/* pagination next and previous pages  */}

      {/* Array(n) → creates an array with empty holes (no actual values).
             It only has a length, but the slots are not initialized.
             You can’t .map() or .forEach() over it because there’s literally nothing inside to iterate.
             [...Array(n)] → uses the spread operator to expand those holes into real elements (undefined).
             Now the array actually contains n items.
             You can .map(), .forEach(), etc., because those methods now have real values to work with. */}
      {
        products.length > 0 && <div className="pagination">
          <span
            className={page > 1 ? "" : "pagination_disabled"}
           onClick={() => selectPageHandler(page - 1)} 
           >
            ⏮️
          </span>
          {
            [...Array(products.length / 10)].map((_, i) => {
              return (
                <span
                  className={page === i + 1 ? "pagination__selected" : ""}
                  onClick={() => selectPageHandler(i + 1)}
                  key={i}
                >
                  {i + 1}
                </span>
              );
            })
          }
          <span
            className={page < products.length / 10 ? "" : "pagination_disabled"}
            onClick={() => selectPageHandler(page + 1)}
          >
            ⏭️</span>
        </div>
      }
    </div>
  )
}

export default App
