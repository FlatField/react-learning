import React from 'react'

export const CompleteTodos = (props) => {
    const {completeTodos, onClickReturnTodos} = props;

    return (
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
    );
};