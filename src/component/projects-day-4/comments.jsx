// import React from "react";

// function Comments({ comments }) {
//   return (
//     <div className="space-y-2">
//       {comments?.map((comment) => (
//         <div key={comment.id}>
//           <ul>
//             <h3 className="font-semibold text-gray-700 mb-2">
//               Comments ({post.comments.length})
//             </h3>
//             <li className="shadow-md rounded p-3 text-gray-700">
//               {comment.text}
//             </li>
//           </ul>
//         </div>
//         <div className="mt-4">
//              <button className="bg-gray-300 p-2 rounded" onClick={()=>setComments(comments === post.id ? null:post.id)}>{comments === post.id ? 'Hide comments':'Open comments'}</button>
//                 {comments ===post.id && (
//                   <Comments  comments={post.comments|| []}/>
//                 ) }        
//             </div>
//       ))}
//     </div>
//   );
// }
// export default Comments;
