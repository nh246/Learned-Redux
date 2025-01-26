import { useGetUsersQuery } from "../redux/features/user/useApi"
import Loder from "./Loder"

function User() {

  const {data:Users ,isLoading, error}= useGetUsersQuery()
  console.log(Users)

  if(isLoading) return <Loder/>
  if(error) return <h1>{error.message}</h1>


  return (
    <div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4" >
      {
        Users.map((user, index)=>(
          <div key={index} className="shadow-md p-5 rounded-lg space-y-2" >
            <img className="size-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwShza8rX1AOF5telz-PTG2Dh14CgK75Z5TfazTqeDNLKg6dQjY9ZDZ8I&s" alt="avater" />
          <h2>Name: {user?.name}</h2>
          <p>Email: {user?.email}</p>
          <p>Adderss: {user?.city}</p>
          </div>
        ))
      }
    </div>
    </div>
  )
}

export default User