import React, { useEffect, useState } from "react";
// import Comments from "./comments";

function Project() {
  const [post, setPost] = useState([]);
  const [search, setSearch] = useState("");
  const [Limit, setLimit] = useState(5);
  const [comments, setComments] = useState(null);

  useEffect(() => {
    async function Posts() {
      const response = await fetch(
        `https://mimic-server-api.vercel.app/posts?_limit=${Limit}&q=${search}`,
      );
      const data = await response.json();
      setPost(data);
    }
    Posts();
  }, [Limit, search]);

  return (
    <div className=" bg-black p-6">
      <h1 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-[#8DBCC7] to-[#D2C1B6] bg-clip-text text-transparent">Posts</h1>
      <div className="border p-4 flex justify-end  gap-2">
        <div className="border border-white bg-gray-300  flex  justify-center items-center space-x-2 p-2 shadow-md rounded">
          <p className="">Limit</p>
          <select
            className=" p-2 outline-none"
            name="limit"
            id="limit"
            onChange={(e) => setLimit(e.target.value)}
          >
            <option>5</option>
            <option>10</option>
            <option>15</option>
            <option>20</option>
          </select>
        </div>

        <input
          type="search"
          placeholder="Search post..."
          className=" p-2 outline-none border bg-gray-300 shadow-md rounded"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className=" grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {post.map((post) => (
          <div
            key={post.id}
            className="bg-gradient-to-r from-[#8DBCC7] to-[#D2C1B6] rounded p-5 mb-6 hover:shadow-lg transition duration-300 "
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {post.title}
            </h2>

            <p className="text-gray-600 mt-2">{post.body}</p>
            <h3 className="font-semibold text-gray-700 mb-2">
              Comments ({post.comments.length})
            </h3>
            <ol className=" ml-5 space-y-2">
              {post.comments?.map((comment) => (
                <li
                  key={comment.id}
                  className="shadow-md rounded p-3 text-gray-700 border-b border-gray-500"
                >
                  {comment.text}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
