// btnというidを持つHTML要素を取得し、定数btnに代入する
const btn = document.getElementById('btn');
const textElement = document.getElementById('text');


// btnがクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {

  // textElementのテキストを更新する
  setTimeout(() => {
    // textElementのテキスト内容を更新する
    textElement.textContent = 'ボタンをクリックしました';
  }, 2000);
});