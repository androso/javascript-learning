// .map function helps us to convert each array item to something else.
const weeklyReadings = [20.3, 35, 19, 28];
const correctedWeeklyReadings = weeklyReadings.map(readings => readings + 1.5);
console.log(correctedWeeklyReadings);
console.log(weeklyReadings);