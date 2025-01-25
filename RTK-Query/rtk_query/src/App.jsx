import { useGetAllPostsQuery } from "./redux/features/post/postApi"

function App() {

  const {data, isLoading , error}= useGetAllPostsQuery()

  console.log(data)

  return (
    <div>App</div>
  )
}

export default App