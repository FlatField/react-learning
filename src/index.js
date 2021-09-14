const onClickAdd = () => {
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    //li生成
    const li = document.createElement("li");
    li.className = "list-row";

    //div生成
    const div = document.createElement("div");
    div.innerHTML = `<p>${inputText}</p>`;

    //button(完了)タグの作成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
        alert("完了")
    })

    //button(削除)タグの作成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
        //押された削除ボタンの親タグ(div)を未完了リストから削除
        const deleteTarget = div.parentNode;
        document.getElementById("imcomplete-list").removeChild(deleteTarget);
    })

    //liタグの子要素に各要素を設定
    li.appendChild(div);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);

    //未完了のリストに追加
    document.getElementById("imcomplete-list").appendChild(li);
}

document
    .getElementById('add-button')
    .addEventListener("click", () => onClickAdd());

