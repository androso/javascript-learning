function openOrSenior(data) {
	// we need a new array to push the output
    let categories = [];
    for (let i = 0, len = data.length; i < len; i++) {
        
        if (data[i][0] >= 55 && data[i][1] > 7) {
            categories.push("Senior");
        } else {
            categories.push("Open");
        }
    }
    return categories;
}
console.log((1234 >>> 0).toString(2));
