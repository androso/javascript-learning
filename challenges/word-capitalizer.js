function char_upper (str) {
    let strSplitted = str.split(" ");
    for (let i = 0, len = strSplitted.length; i < len; i++) {
        strSplitted[i] = strSplitted[i].charAt(0).toUpperCase() + strSplitted[i].substring(1);
    }
    return strSplitted.join(" ");
}

let toUpper = function (str) {
    let strSplitted = str.split(" ");
    for (let i = 0, len = strSplitted.length; i < len; i++) {
        strSplitted[i] = strSplitted[i].charAt(0).toUpperCase() + strSplitted[i].substring(1);
    }
    return strSplitted.join(" ");
}

function multiplier (factor) {
    return multiplier => multiplier * factor;
}
let twice = multiplier(2);
console.log(twice(20));
    
let arr = [2, 3, 5];
console.log(arr.length); 