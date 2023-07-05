import React from "react";

const TodoCard = ({ todo }) => {
  return (
    <div className="todocard">
      <p>{todo.title}</p>
      <div>

      <button>Done</button>
      <button>Delete</button>
      </div>
    </div>
  );
};

export default TodoCard;
