import { Link } from "react-router";
import { useGetAllPostsQuery } from "../redux/features/post/postApi";

function Home() {
  const { data, isLoading, error } = useGetAllPostsQuery();

  console.log(data);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div>
      <ul>
        {data.map((post) => (
          <li key={post.id} className="text-2xl p-3 cursor-pointer">
            <Link to={`/blogs/${post.id}`}>
              {post.id}. {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
