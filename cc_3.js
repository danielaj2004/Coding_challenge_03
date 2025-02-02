// Task 1
let price = [10, 12, 14, 16, 18];
console.log(price); // Output: ["10", "12", "14", "16", "18"]
price.push(20);
console.log(price); // Output: ["10", "12", "14", "16", "18", "20"]
let removedItem = price.shift();
console.log("removed price", removedItem); // Output: "10"
console.log("updated prices", price); // Output: ["12", "14", "16", "18", "20"]

// Task 2
let order = [52,68,84,39,96];
console.log("order number", order); // Output: [52,68,84,39,96]
order[2] += 5; // add 5 to the third order
console.log(order); // [52,68,89,39,96]
let totalOrder = order.reduce((total, orders) => total + orders, 0); //calculate  the total number of all orders
console.log("total number of orders: ", totalOrder); // Output: total number of orders
console.log("Updated number of orders: ", order); // Output: the updated array of orders

// Task 3
let employee = {
    name: "Tina",
    role: "data analyist",
    performanceScore: 80,
    isActive: true 
} // Object employee
employee.performanceScore = 90; // Outout: increase the performance score by 10
employee.promotionEligible = true; // add a new proptery to the object
console.log("Updated employee: ", employee); // Output: the updated object

// Task 4
let feedback = [
    {customerName: "Marcus", feedbackText: "Fair service", rating: 3},
    {customerName: "Abby", feedbackText: "Good Experience", rating: 4},
    {customerName: "Nicole", feedbackText: "Okay Service", rating: 3}
]; // Output: feedbacks array
feedback.push({customerName: "Bill", feedbackText: "Poor service", rating: 2}); // add new feeback comment to the end of the array
console.log("Updated Feedbacks", feedback); // Output: updated array of feedbacks

// Task 5
let inventory = {
    itemName: "Chocolate",
    stockcount: 200,
    price: 1.00,
    calculateTotalValue: function() {
        return this.stockcount * this.price;
    }
}; // Output: Inventory object
console.log(inventory); // Output: inventory details
console.log("Total Inventory value: ", inventory.calculateTotalValue()); // Output: the total value of the inventory