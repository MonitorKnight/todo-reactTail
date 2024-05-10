import React, { useState } from "react";
import Form from "./Form";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import Edit from "./Edit";

uuidv4();

function Todolist() {
  const [todoValue, setTodoValue] = useState([]);

  const createTodo = (todo) => {
    setTodoValue([
      ...todoValue,
      { id: uuidv4(), task: todo, isEditing: false },
    ]);
    console.log(todoValue);
  };

  const deleteTodo = (id) => {
    setTodoValue(todoValue.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) =>
    setTodoValue(
      todoValue.map((todo) =>
        todo.id == id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  const editTask = (task, id) =>
    setTodoValue(
      todoValue.map((todo) => {
        todo.id == id ? { ...todo, task, isEditing: !todo.isEditing } : todo;
      })
    );

  return (
    <div className="container bg-gray-700 mt-20 p-8 rounded-sm">
      <Form createTodo={createTodo} />
      {/* melooping isi semua todoValue kemudian memasukan tiap tiap nya kedalam Todo.jsx dan index sebagai key */}
      {todoValue.map((todo, index) => {
        return todo.isEditing ? (
          <Edit editTask={editTask} task={todo} key={index} />
        ) : (
          <Todo
            task={todo}
            key={index}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        );
      })}
    </div>
  );
}

export default Todolist;
