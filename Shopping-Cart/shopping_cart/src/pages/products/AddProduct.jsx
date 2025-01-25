import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/featurs/product/productSlice";

function AddProduct() {

    const dispatch = useDispatch()


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

   if(errors) console.log(errors)

  const onSubmit = (data) =>{
     dispatch(addProduct(data))
  }

//   console.log(watch("example"));

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 text-black">ADD NEW PRODUCT</h2>

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {/* name  */}
        <div>
          <label className="text-xl font-medium block text-gray-400">
            Product Name:
          </label>
          <input
            {...register("name", { required: true })}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded"
            type="text"
            id="name"
            name="name"
            placeholder="Product 1"
          />
        </div>

        {/* select  */}

        <div className="my-4">
          <label className="text-xl font-medium block text-gray-400">
            Select:
          </label>
          <select
            {...register("category", { required: true })}
            id="category"
            name="category"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded"
          >
            <option value="">Choose a Category-</option>
            <option value="fashion">Fashion</option>
            <option value="gadgets">Gadgets</option>
            <option value="t-shirt">T-shirt</option>
            <option value="bags">Bags</option>
          </select>
        </div>

        {/* product image url */}

        <div>
          <label className="text-xl font-medium block text-gray-400">
            Image URL:
          </label>
          <input
            {...register("image", { required: true })}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded"
            type="text"
            id="image"
            name="image"
            placeholder="https://..."
          />
        </div>

        {/* product price and date */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xl font-medium block text-gray-400">
              Price:
            </label>
            <input
              {...register("price", { required: true })}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded"
              type="number"
              id="price"
              name="price"
              placeholder="123.."
            />
          </div>
          <div>
            <label className="text-xl font-medium block text-gray-400">
              Date:
            </label>
            <input
              {...register("date", { required: true })}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded"
              type="date"
              id="date"
              name="date"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-4 px-4 py-2 bg-indigo-500 hover:bg-indigo-900 text-white rounded"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
