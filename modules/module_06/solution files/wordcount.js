// Count words in text and then order with
// most common first
window.onload = () => {
  let result = countWords();
  console.log(result);
};

function countWords() {
  let text =
    'Some of the biggest and most expensive transportation projects in the world have involved building bridges. Bridges are crucial links that carry cars, trucks and trains across bodies of water, mountain gorges or other roads. As a result, they are one of the most important aspects of civil engineering and are subject to intense scrutiny, especially when they collapse. Bridge collapses can be tragic events, leading to loss of life and serious property damage. That is why bridge engineers, designers and builders must always take their jobs very seriously. The best way for them to prevent these accidents is to understand why bridges collapse in the first place. Understanding bridge collapses can lead to major changes in the design, construction and safety of future building projects. The following are main reasons why bridges fall.';
  // remove the periods and commas and make all lowercase letters
  text = text.replace(/[.,]/g, '');
  text = text.toLocaleLowerCase();
  const wordArray = text.split(' ');
  console.log(wordArray);
  // create object and make keys the "words" and the value the "word count"
  const wordCount = {};
  wordArray.forEach((item) => {
    if (wordCount[item] == null) wordCount[item] = 1;
    else {
      wordCount[item] += 1;
    }
  });
  // turn objects into an array of arrays
  let myArray = Object.entries(wordCount);

  // now sort the arrays based on the count number
  let bArray = myArray.sort((a, b) => (a[1] < b[1] ? 1 : a[1] > b[1] ? -1 : 0)).slice(0, 3);
  // print out first three most common words.
  return bArray;
}

//don't change this line
  module.exports = {countWords};
