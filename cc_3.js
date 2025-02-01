// Task 1
let price = [10, 12, 14, 16, 18];
console.log(price); // Output: ["10", "12", "14", "16", "18"]
price.push(20);
console.log(price); // Output: ["10", "12", "14", "16", "18", "20"]
let removedItem = price.shift();
console.log("removed price", removedItem); // Output: "10"
console.log("updated prices", price); // Output: ["12", "14", "16", "18", "20"]