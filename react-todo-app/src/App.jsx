import React, { useState } from 'react'
import './styles.css';

export function App() {
  const [incompleteTodos, setIncompleteTodos] = useState(['あああああ','いええええ']);
  const [completeTodos, setCompleteTodos] = useState(['ううううう', 'えええええ']);
  return (
    <>
      <section className="input-area">
        <div>
          <input placeholder="TODOを入力" type="text" />
          <button>追加</button>
        </div>
      </section>

      <section className="incomplete-area">
        <div>
          <h3>未完了のTODO</h3>
          <ul>
            {incompleteTodos.map((todo) => {
              return (
                <li key={todo} className="list-row">
                  <p>{todo}</p>
                  <button>完了</button>
                  <button>削除</button>
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
            {completeTodos.map((todo) => {
              return (
                <li key="{todo}" className="list-row">
                  <p>{todo}</p>
                  <button>戻す</button>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </>
  );
}