const { useState } = require("react");

const CommentsList = () => {
  const [comments, setComments] = useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" },
  ]);
  const handleDelete = (id) => {
    const newComments = comments.filter(comment => comment.id !== id)
    setComments(newComments)
  }
  return <div>
    {comments.map(item => <div key={item.id}>{item.text}<button onClick={()=>handleDelete(item.id)}>delete</button></div>)}
  </div>;
};

export default CommentsList