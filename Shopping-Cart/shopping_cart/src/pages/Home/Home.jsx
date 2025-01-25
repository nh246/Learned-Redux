import { useSelector } from "react-redux"
import ProductsCart from './../products/ProductsCart';
import AddProduct from "../products/AddProduct";

function Home() {

    const products = useSelector((state)=> state.product)
    // console.log(products)

  return (
    <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="col-span-2">
                <div className="grid lg:grid-cols-2 gap-8 gap-y-8" >
                    {
                       products.length ? products.map((product, index)=>(
                            <ProductsCart key={index} product={product} />
                        ) ) : <div>NO produt found</div>
                    } </div>
            </div>
            <div><AddProduct/></div>
        </div>
    </div>
  )
}

export default Home