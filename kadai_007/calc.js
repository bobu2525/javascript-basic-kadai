//課題００７

// 変数numに０～３０までのランダムな整数を代入する
let num = Math.floor(Math.random()*30)+1;

// 変数numの値を出力する（確認用）
console.log(num);

// 3の倍数の時に’３の倍数ですと表示’
if (num % 3 === 0 && num % 5 === 0) {
  console.log("3と5の倍数です");
}

else if (num % 5 === 0) {
  console.log("5の倍数です");
}

else if (num % 3 === 0) {
  console.log("3の倍数です")
}

else {
  console.log(num);
}







