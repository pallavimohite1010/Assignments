function reverseWordsInSentence(sentence) {
  // Split the sentence into words
  let words = sentence.split(" ");

  // Reverse each word
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].split("").reverse().join("");
  }

  // Join the reversed words back into a sentence
  let reversedSentence = words.join(" ");

  return reversedSentence;
}

let sentence = "Hello, how are you?";
let reversedSentence = reverseWordsInSentence(sentence);
console.log(reversedSentence); // Output: "olleH, woh era uoy?"
