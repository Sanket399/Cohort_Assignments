/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: "Food",
    itemName: "Pizza",
  },
  {
    id: 2,
    timestamp: 1656259600000,
    price: 20,
    category: "Food",
    itemName: "Burger",
  },
  {
    id: 3,
    timestamp: 1656019200000,
    price: 15,
    category: "Clothing",
    itemName: "T-Shirt",
  },
  {
    id: 4,
    timestamp: 1656364800000,
    price: 30,
    category: "Electronics",
    itemName: "Headphones",
  },
  {
    id: 5,
    timestamp: 1656105600000,
    price: 25,
    category: "Clothing",
    itemName: "Jeans",
  },
];

function calculateTotalSpentByCategory(transactions) {
  // Empty Object to store total amount spent on each category
  const categoryTotal = {};

  // Iterate over each transaction
  transactions.forEach((transactions) => {
    //Object Destructuring. Extract category and price from transactions
    const { category, price } = transactions;

    if (categoryTotal[category]) {
      categoryTotal[category] = categoryTotal[category] + price;
    } else {
      categoryTotal[category] = price;
    }
  });

  const result = Object.keys(categoryTotal).map((category) => ({
    // Object.keys(categoryTotal) -> extracts keys of the object in form of an array
    // Then map that array elements to their respective total amount spent
    category: category,
    totalSpent: categoryTotal[category],
  }));
  return result;
}

module.exports = calculateTotalSpentByCategory;
console.log(calculateTotalSpentByCategory(transactions));
