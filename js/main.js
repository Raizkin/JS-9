// Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].
// Нумерація повинна починатися з 1. Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.

const logItems = function (array) {
  for (let i = 0; i < array.length; i += 1) {
    const result = `${i + 1} - ${array[i]}`;
    console.log(result);
  }
};

console.log(logItems(["Mango", "Poly", "Ajax"]));

// Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.
const calculateEngravingPrice = function (message, pricePerWord) {
  const result = message.split(" ");
  const totalPrice = result.length * pricePerWord;
  return totalPrice;
};
const stringMessage = "Напиши скрипт підрахунку вартості гравіювання прикрас";
const price = 5000;

console.log(calculateEngravingPrice(stringMessage, price));

// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.




    function findLongestWord(string) {
    const words = string.split(' ');
    let longestWord = '';
  
    for (let i = 0; i < words.length; i++) {
     if (words[i].length > longestWord.length) {
     longestWord = words[i];
      }
    }
    return longestWord;
  }
  
console.log(findLongestWord("Lorem ipsum dolor sit amet consectetur adipisicing elit Velit eaque ligendi quas ex, fugiat atque ad optio debitis impedit molestias aspernatur ius saepe autem voluptates inventore explicabo doloribus placeat officiis"))


// Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.
// Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.
// Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...', після чого повертає укорочену версію.

function formatString(string) {
    const bigString = string.length > 40;

    if (bigString) {
        return string.slice(0, 40) + '...';
    } else {
        return string;
    }
}

const shortForm = "Привіт, це коротке речення";
const longForm = "Це дуже довге речення, томущо треба затестувати код";

console.log(formatString(shortForm));
console.log(formatString(longForm));


// Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок. Функція перевіряє її на вміст слів spam і sale. Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція повертає false. Слова в рядку можуть бути в довільному регістрі.

function checkForSpam(message) {
  const lowerText = message.toLowerCase();

  if (lowerText.includes("spam") || lowerText.includes("sale")) {
    return true;
  } else {
    return false;
  }
}
console.log(checkForSpam("Це буде sale"));
console.log(checkForSpam("Це буде нічого"));
console.log(checkForSpam("це буде spam"));


