// Sort a given string
// Each word has a number in between, indicating its position in the sorted string
// 1 will be the first
// If input is empty return an empty string

// We need to separate the string in words, put them in arrWords[]
// We create arrOrdered
// We iterate through each word in the array.
    //We iterate through each letter of each word
    //If word[letter] is digit
        // parseInt(word[letter]) ? 
        // arrOrdered[letter - 1].push(word);
        // We exit this loop
// arrOrdered.join(" ");

function order (words) {
    let arrWords = words.split(" ");
    let arrOrdered = [];
    for (let word of arrWords) {
        for (let letter of word) {
            if (isDigit(letter)) {
                arrOrdered[letter - 1] = word;
                break;
            }
        }
    }
    return arrOrdered.join(" ");
}
function isDigit (str) {
    return (str >= '0' && str <= '9') ? true : false;
}