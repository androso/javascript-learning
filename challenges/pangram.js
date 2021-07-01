// an array to track every letter (26)
// Conver the string to lowercase
// loop through the string
// is it a letter ?
    // is it already in arrayCounter?
        // if not push it
        // else skip
// if at the end arrayCounter.length === 26 
    // Return true
    // else 
    
function isPangram(string) {
    let arrCounter = [];
    string = string.toLowerCase();
    for (let letter of string) {
        if (letter >= "a" && letter <= "z") {
            if (!arrCounter.includes(letter)) {
                arrCounter.push(letter);
            } 
        }
    }
    if (arrCounter.length === 26) {
        return true;
    } else {
        return false;
    }
}