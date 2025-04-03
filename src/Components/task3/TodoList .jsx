import { Button, Card, IconButton, TextField } from "@mui/material";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoList = () => {
  const [comments, setComments] = useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" },
  ]);
  const [text, setText] = useState("");
  const handleAdd = () => {
    const newComment = { id: Date.now(), text: text };
    const newComments = [...comments, newComment];
    setComments(newComments);
    setText("");
  };
  const handleDelete = (id) => {
    const newComments = comments.filter(comment => comment.id !== id)
        setComments(newComments)
  }
  return (
    <div>
      <TextField
        label="+ Задача"
        variant="outlined"
        fullWidth
        style={{ marginBottom: 10 }}
        value={text}
        onInput={(e) => setText(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleAdd}>
        Добавить
      </Button>

      {comments.map((task) => (
        <Card variant="outlined" key={task.id}>
          {task.text}
          <IconButton
            edge="end"
            color="error"
            onClick = {()=>handleDelete(task.id)}
          >
            <DeleteIcon />
          </IconButton>
        </Card>
      ))}
    </div>
  );
};

export default TodoList;
