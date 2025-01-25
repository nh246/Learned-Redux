import { addToCart } from "../../redux/featurs/cart/cartSlice";
import { useDispatch } from 'react-redux';

function ProductsCart({ product }) {
  // console.log(product)

  const { id, name, price, category, image, date } = product || {};

  const dispatch = useDispatch()
  const handleAddToCart= ()=>{
     dispatch(addToCart(product))
  }

  return (
    <div className="card bg-white w-96 shadow-sm">
      <figure>
        <img className="h-48 w-full object-cover" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-black">{name}</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end items-center">
            <p className="font-semibold text-xl">{price}</p>
          <button onClick={handleAddToCart} className="btn btn-primary">Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductsCart;
