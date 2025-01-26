import { useParams } from "react-router";
import { useGetPostByIdQuery } from "../redux/features/post/postApi";

function SinglePost() {

    const {id} = useParams();

    console.log(id)

    const {data , isLoading , error} = useGetPostByIdQuery(id)

    console.log(data)

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error.message}</h1>
    }

  return (
    <div className="p-5">
        <h1 className="text-3xl font-bold text-blue-600" >{data.title}</h1>
        <p className="mt-3 ">{data.body}</p>
        <p className="mt-3 text-red-400" >Author: {data.userId}</p>
    </div>
  )
}

export default SinglePost