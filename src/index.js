import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得
  const inputText = document.getElementById("input-text").value;
  document.getElementById("input-text").value = "";

  // divを生成
  const div = document.createElement("div");
  div.className = "list-item";

  //liを生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // divの子要素にliを入れる
  div.appendChild(li);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document.getElementById("add").addEventListener("click", () => {
  onClickAdd();
});
