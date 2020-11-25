import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得
  const inputText = document.getElementById("input-text").value;
  document.getElementById("input-text").value = "";

  createIncompleteList(inputText);
};

document.getElementById("add").addEventListener("click", () => {
  onClickAdd();
});

const createIncompleteList = (text) => {
  // divを生成
  const div = document.createElement("div");
  div.className = "list-item";

  //liを生成
  const li = document.createElement("li");
  li.innerText = text;

  // 完了butotnを作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 完了機能
    const deleteTarget = completeButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);

    //完了のターゲット
    const addTarget = completeButton.parentNode;
    // 完了アイテムのテキスト
    const text = addTarget.firstElementChild.innerText;
    // divを初期化
    addTarget.textContent = null;
    // liを作成
    const li = document.createElement("li");
    li.innerText = text;

    // 未完了にするボタンを生成
    const backButton = document.createElement("button");
    backButton.innerText = "未完了にする";
    backButton.addEventListener("click", () => {
      //　押されたボタンの親要素を完了済みから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //テキストを取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // addTargetにliとbuttonを追加
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    // complete-listに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // 削除buttonを作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 削除機能
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // divの子要素にliを入れる
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};
