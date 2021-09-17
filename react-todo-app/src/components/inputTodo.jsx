import React from 'react'

const style = {
    backgroundColor: '#c1ffff',
    width: '400px',
    height: '30px',
    padding: '8px'
};

export const InputTodo = (props) => {
    const {todoText, onChange, onClick, disabled } = props;
    return (
        <section style={style}>
            <div>
            <input
                placeholder="TODOを入力"type="text"
                value={todoText}
                onChange={onChange}
                disabled={disabled}
            />
            <button onClick={onClick}>追加</button>
            </div>
        </section>
    )
};