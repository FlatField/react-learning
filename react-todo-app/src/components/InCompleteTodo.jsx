import React from 'react';

export const InCompleteTodo = (props) => {
    const {incompleteTodos, onClickComplete, onClickDelete} = props;
    return (
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
    );
};