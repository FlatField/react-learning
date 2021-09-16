import React from 'react'

export const InputTodo = (props) => {
    const {todoText, onChange, onClick } = props;
    return (
        <section className="input-area">
            <div>
            <input
                placeholder="TODOを入力"type="text"
                value={todoText}
                onChange={onChange}
            />
            <button onClick={onClick}>追加</button>
            </div>
        </section>
    )
};