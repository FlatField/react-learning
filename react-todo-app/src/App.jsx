import React, { useState } from 'react';
import './styles.css';
import { InputTodo } from './components/inputTodo';


export function App() {
  const [todoText, setTodoText] = useState('');

  const [incompleteTodos, setIncompleteTodos] = useState(['あああああ','いいいい']);

  const [completeTodos, setCompleteTodos] = useState(['わわわわわ', 'んんんんん']);

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
      <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd} /> 

      <section className="incomplete-area">
        <div>
          <h3>未完了のTODO</h3>
          <ul>
            {incompleteTodos.map((todo, index) => {
              return (
                <li key={todo} className="list-row">
                  <p>{todo}</p>
                  <button onClick={() => onClickComplete(index)}>完了</button>
                  <button onClick={() => onClickDelete(index)}>削除</button>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section className="complete-area">
        <div>
          <h3>完了したTODO</h3>
          <ul>
            {completeTodos.map((todo, index) => {
              return (
                <li key={todo} className="list-row">
                  <p>{todo}</p>
                  <button onClick={() => onClickReturnTodos(index)}>戻す</button>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </>
  );
}