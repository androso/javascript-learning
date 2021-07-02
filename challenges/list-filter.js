function filter_list(l) {
    const results = l.filter(element => {
        return typeof element === "number"; 
    });
    return results;
}
