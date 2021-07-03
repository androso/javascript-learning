let list = ["a", "23", 24, 24];
list.forEach((element) =>
	typeof element === "number" ? console.log(element * 2) : console.log(element)
);

/* The forEach executes a function to each element*/ 
