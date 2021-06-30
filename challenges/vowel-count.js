// Return the number of vowels in a giving string

function getCount(str) {
    var vowelsCount = 0;
    var vowels = ["a", "e", "i", "o", "u"];
    // Code here
    for (let vowel = 0, len = str.length; vowel < len; vowel ++) {
        if (vowels.includes(str[vowel].toLowerCase())) {
            vowelsCount++;      
        }
    }
    return vowelsCount;
}