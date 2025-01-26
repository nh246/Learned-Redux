import { useForm } from "react-hook-form";
import { useAddUserMutation } from "../redux/features/user/useApi";
import { useNavigate } from "react-router";

function AddNewUser() {

    const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (errors) {
    console.log(errors);
  }

  const [addUser] = useAddUserMutation();
  const onSubmit = async (data) => {
    try {
      await addUser({ ...data, isActive: false });
      alert("User Added Successfully");
      navigate("/")
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md">
      <h1 className="text-xl font-bold mb-4">Add New User</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block font-bold mb-2 ">User Name:</label>
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="User Name"
            className="w-full ml-4 shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label className="block font-bold mb-2">User Email:</label>
          <input
            {...register("email", { required: true })}
            type="text"
            placeholder="User Email"
            className="w-full ml-4 shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label className="block font-bold mb-2">User Age:</label>
          <input
            {...register("age", { required: true })}
            type="number"
            placeholder="User age"
            className="w-full ml-4 shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label className="block font-bold mb-2">User Gender:</label>
          <input
            {...register("gender", { required: true })}
            type="text"
            placeholder="User Gender"
            className="w-full ml-4 shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label className="block font-bold mb-2">User City:</label>
          <input
            {...register("city", { required: true })}
            type="text"
            placeholder="User City"
            className="w-full ml-4 shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add User
        </button>
      </form>
    </div>
  );
}

export default AddNewUser;
