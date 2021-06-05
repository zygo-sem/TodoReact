import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setcompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") {
      alert("文字を入力してください");
    } else {
      const newTodos = [...incompleteTodos, todoText];
      setIncompleteTodos(newTodos);
      setTodoText("");
    }
  };

  const onClickdelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickcomplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setcompleteTodos(newCompleteTodos);
  };

  const onClickback = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setcompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <div className="input_area">
        <input
          placeholder="TODOを追加"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>

      <div className="incomplete_area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list_row">
                <li>{todo}</li>
                <button onClick={() => onClickcomplete(index)}>完了</button>
                <button onClick={() => onClickdelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>

      <div className="complete_area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list_row">
                <li>{todo}</li>
                <button onClick={() => onClickback(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

