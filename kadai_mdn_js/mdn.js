// 新しいDateオブジェクトを生成して現在の日時を取得
const date = new Date();

// dateから月、日、年を取得して配列に格納
const [month, day, year] = [
  date.getMonth()+1, // 月を取得 (0から始まるため、表示するときは+1する必要がある)
  date.getDate(),  // 日を取得
  date.getFullYear(), // 年を取得
];

console.log(year + "年" + month + "月" + day + "日");