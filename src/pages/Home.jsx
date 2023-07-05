import axios from "axios";
import React, { useEffect, useState } from "react";
import TodoCard from "../components/TodoCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [auth, setAuth] = useState(null);
  const [todo,setTodo] = useState('')
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("auth");
    setAuth(null);
  };

  const addTodoHandler = ()=> {
    axios.post('api/todos').then(res=>{
      
    })
  }

  useEffect(() => {
    (() => {
      axios
        .get(`/api/users/${auth?.id}`)
        .then((res) => setTodos(res.data.todos))
        .catch((err) => console.log(err));
    })();
    setAuth(JSON.parse(localStorage.getItem("auth")));
  }, [auth?.id]);

  if (!auth)
    return (
      <div className="login-screen">
        <button className="login-btn" onClick={() => navigate("/login")}>
          Sign In
        </button>
        <button className="login-btn" onClick={() => navigate("/signup")}>
          Sign Up
        </button>
      </div>
    );

  return (
    <>
      <button className="profile" onClick={logoutHandler}>
        Logout
      </button>

      <div className="App">
        <p className="name">{auth ? auth.name : ""}</p>
        <div className="container">
          <div className="input-container">
            <input
              className="text-input"
              placeholder="add your todo"
              type="text"
              value={todo}
              onChange={(e)=>setTodo(e.target.value)}
            />
            <button className="add" onClick={addTodoHandler} >ADD</button>
          </div>
          {todos?.map((todo, index) => (
            <TodoCard key={index} todo={todo} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
