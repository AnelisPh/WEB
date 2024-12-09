let csv = "id,имя,возраст\n1,Иван,30\n2,Анна,25";
let массивСтрок = csv.split('\n').map(строка => строка.split(','));
console.log(массивСтрок); // [["id", "имя", "возраст"], ["1", "Иван", "30"], ["2", "Анна", "25"]]
alert("Hello " + csv +"!");

fetch('path/to/myFavorite.csv')
  .then(response => response.text())
  .then(text => {
    const data = parseCSV(text);
    console.table(data); // "Вот она, чудесная таблица из CSV в консоли!" 🎩🐇
  })
  .catch(error => console.error(error)); // Будем готовы к непредвиденным ситуациям. ☔
