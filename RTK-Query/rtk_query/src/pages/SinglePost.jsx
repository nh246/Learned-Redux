import { useParams } from "react-router";
import { useDeletePostMutation, useGetPostByIdQuery } from "../redux/features/post/postApi";

function SinglePost() {
  const { id } = useParams();

  console.log(id);

  const { data, isLoading, error } = useGetPostByIdQuery(id);

  console.log(data);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }

  const [deletePost] = useDeletePostMutation()

  const handleDelete = async () => {
    try {
     const response=  await deletePost(id)
     console.log(response)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold text-blue-600">{data.title}</h1>
      <p className="mt-3 ">{data.body}</p>
      <p className="mt-3 text-red-400">Author: {data.userId}</p>

      <button onClick={handleDelete} className="mt-3 text-white bg-red-500 px-4 py-2 hover:bg-red-900">
        Delete This post
      </button>
    </div>
  );
}

export default SinglePost;
