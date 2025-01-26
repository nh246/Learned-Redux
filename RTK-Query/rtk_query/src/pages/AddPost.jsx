import { useState } from "react";
import { useAddNewPostMutation } from "../redux/features/post/postApi";

function AddPost() {

  const [title , setTitle] = useState("")
  const [body , setBody] = useState("")
  const [userId , setUserId] = useState(0)

// console.log(title , body , userId)
const [addNewPost] = useAddNewPostMutation()

// console.log(addNewPost)
  const handleSubmit = async (e)=>{
    e.preventDefault()

    const newPost = {
      title,
      body,
      userId
    }
    // console.log(newPost)
    await addNewPost(newPost)
  }

  return (
    <div className="p-5 shadow-md rounded-lg max-w-md">
      <h1>Add New Post</h1>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div >
          <label>Title</label>
          <input
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
            type="text"
            placeholder="Post Title "
            className="p-1 border focus:outline-none w-full"
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
          value={body}
          onChange={(e)=>setBody(e.target.value)}
            type="text"
            placeholder="Post Title "
            className="p-1 border focus:outline-none w-full"
          />
        </div>
        <div >
          <label>Post UserId</label>
          <input
          value={userId}
          onChange={(e)=>setUserId(e.target.value)}
            type="text"
            placeholder="Post UserId "
            className="p-1 border focus:outline-none w-full"
          />
        </div>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 hover:bg-green-900 mt-4" >Add Post</button>
      </form>
    </div>
  );
}

export default AddPost;
