import React from "react";

import { useEffect, useState } from "react";

function ApiPage() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Comments Table</h1>
      <table className="table-auto border w-full">
        <thead className="bg-gray-500">
          <tr>
          <th className="p-2 border">ID</th>
          <th className="p-2 border">PostID</th>
          <th className="p-2 border">Name</th>
          <th className="p-2 border">Email</th>
            <th className="p-2 border">Comment</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((c) => (
            <tr key={c.id}>
              <td className="p-2 border">{c.id}</td>
              <td className="p-2 border">{c.postId}</td>
              <td className="p-2 border text-left">{c.name}</td>
              <td className="p-2 border text-left">{c.email}</td>
              <td className="p-2 border text-left">{c.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ApiPage;
