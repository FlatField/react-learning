import React, { useState } from 'react';
import './styles.css';
import { InputTodo } from './components/InputTodo';
import { InCompleteTodo } from './components/InCompleteTodo';
import { CompleteTodos } from './components/CompleteTodos';


export function App() {
  const [todoText, setTodoText] = useState('');

  const [incompleteTodos, setIncompleteTodos] = useState([]);

  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (e) => setTodoText( e.target.value );
 
  const onClickAdd = () => {
    if(todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTods = [...incompleteTodos];
    newTods.splice(index, 1);
    setIncompleteTodos(newTods);
  };

  const onClickComplete = (index) => {
    // 未完了のリストから削除
    const newIncoｍpleteTodos = [...incompleteTodos];
    newIncoｍpleteTodos.splice(index, 1);
    setIncompleteTodos(newIncoｍpleteTodos);

    //完了リストへ移動
    const newCoｍpleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCoｍpleteTodos);
  };

  const onClickReturnTodos = (index) => {
    //未完了リストへ戻す処理
    const returnTodos = [...incompleteTodos, completeTodos[index]];

    // 完了のリストから削除
    const returnDeleteTodos = [...completeTodos];
    returnDeleteTodos.splice(index, 1);

    //上記それぞれの処理をデータにセットする
    setIncompleteTodos(returnTodos);
    setCompleteTodos(returnDeleteTodos);
  };

  return (
    <>
      <InputTodo todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      /> 
      {incompleteTodos.length >= 5  &&
        <p style={{ color:'red'}}>
        登録できるtodoの上限5までです。<br/>
        タスクを消化してください
      </p>
      }

      <InCompleteTodo
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <CompleteTodos
        completeTodos={completeTodos}
        onClickReturnTodos={onClickReturnTodos}
      />
    </>
  );
}