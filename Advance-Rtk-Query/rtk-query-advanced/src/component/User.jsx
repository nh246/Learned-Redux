import { useState } from "react";
import {
  useDeleteUserMutation,
  useGetUsersQuery,
} from "../redux/features/user/useApi";
import Loder from "./Loder";
import { Link } from "react-router";

function User() {
// no using polling interval
const [page, setPage] = useState(1)

  const { data: Users = {}, isLoading, error } = useGetUsersQuery({page, limit:4});

// using polling interval
  // const { data: Users, isLoading, error } = useGetUsersQuery(undefined, 
  //   {
  //     // polling is used for refetching the data
  //     pollingInterval: 5000
  //   }
  // );

  const [deleteUser] = useDeleteUserMutation();
  // console.log(Users);

  if (isLoading) return <Loder />;
  if (error) return <h1>{error.message}</h1>;

  const haandleDeleteUser = async (id) => {
    // console.log(id)
    try {
      const response = await deleteUser(id);
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {Users?.data.map((user, index) => (
          <div key={index} className="shadow-md p-5 rounded-lg space-y-2">
            <img
              className="size-16"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwShza8rX1AOF5telz-PTG2Dh14CgK75Z5TfazTqeDNLKg6dQjY9ZDZ8I&s"
              alt="avater"
            />
            <h2>Name: {user?.name}</h2>
            <p>Email: {user?.email}</p>
            <p>Adderss: {user?.city}</p>
            <div className="space-x-2">
              <button
                onClick={() => haandleDeleteUser(user?.id)}
                className="px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded-md"
              >
                Delete
              </button>
              <Link to={`/edit_user/${user?.id}`}>
                <button className="px-4 py-2 bg-green-500 hover:bg-green-700 text-white rounded-md">
                  Update
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button onClick={() => setPage(prev => Math.max(prev - 1, 1))} className="py-1 px-4 bg-red-500 text-white ">Previous</button>
        {page}
        <button onClick={() => setPage(prev => Math.max(prev + 1))} className="py-1 px-4 bg-red-500 text-white ">Next</button>
      </div>
    </div>
  );
}

export default User;
