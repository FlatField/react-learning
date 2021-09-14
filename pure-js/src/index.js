const onClickAdd = () => {
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    console.log(inputText);
    createImcompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromImcompleteList = (target) => {
    document.getElementById("imcomplete-list").removeChild(target);
}


//未完了リストに追加する関数
const createImcompleteList = (text) => {
    //li生成
    const li = document.createElement("li");
    li.className = "list-row";

    //div生成
    const div = document.createElement("div");
    div.innerHTML = `<p>${text}</p>`;

    //button(完了)タグの作成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
        // const addComplete = document.getElementById("complete-list");
        // const completeTarget = div.parentNode;
        // addComplete.appendChild(completeTarget); 以下リファクタリング
        
        //押された完了ボタンの親タグを削除
        deleteFromImcompleteList(div.parentNode);

        //完了リストに追加する要素
        const addComplete = completeButton.parentNode.parentNode;
        
        //TODO内容テキストを取得
        const todoTextAll = addComplete.children[0];
        const text = todoTextAll.firstElementChild.innerText

        //div以下を初期化
        addComplete.textContent = null;
        
        const compDiv = document.createElement("div");
        compDiv.innerHTML = `<p>${text}</p>`;

        //buttonタグ生成
        const backButton = document.createElement("button");
        backButton.innerText = "戻す";
        backButton.addEventListener("click", () => {
            //押された戻すボタンの親タグ(li)を完了リストから削除
            const deleteTarget = backButton.parentNode.parentNode;
            document.getElementById("complete-list").removeChild(deleteTarget);

            //テキスト取得
            const todoTextAll = deleteTarget.children[0];
            const text = todoTextAll.firstElementChild.innerText
            createImcompleteList(text);
        })

        //liタグの子要素に各要素を設定
        addComplete.appendChild(compDiv);
        compDiv.appendChild(backButton);

        //完了リストに追加
        document.getElementById("complete-list").appendChild(addComplete);
    })

    //button(削除)タグの作成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
        //押された削除ボタンの親タグ(div)を未完了リストから削除
        deleteFromImcompleteList(div.parentNode);
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