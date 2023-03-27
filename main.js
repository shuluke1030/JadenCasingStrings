String.prototype.toJadenCase = function () {
  // 將字符串轉換為單詞陣列
  const words = this.split(" ");

  // 將每個單詞的第一個字母轉換為大寫
  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
 
  // 將單詞陣列轉換回字符串，用空格分隔
  return capitalizedWords.join(" ");
};

const quote = "the moment that truth is organized it becomes a lie.";
const jadenCaseQuote = quote.toJadenCase();
console.log(jadenCaseQuote);