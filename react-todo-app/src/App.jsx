import React from 'react'
import './styles.css';

export function App() {
  return (
    <>
      <section>
        <div>
          <input placeholder="TODOを入力" type="text" />
          <button>追加</button>
        </div>
      </section>

      <section>
        <div>
          <p>未完了のTODO</p>
          <ul>
            <li>あああああ</li>
            <button>完了</button>
            <button>削除</button>
          </ul>
        </div>
      </section>

      <section>
        <div>
          <p>完了したTODO</p>
          <ul>
            <li>いいいいい</li>
            <button>戻す</button>
          </ul>
        </div>
      </section>
    </>
  );
}