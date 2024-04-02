let item_names = ["Apple", "Banana", "Cherry"];
let item_prices = [1.99, 2.99, 3.99];
let in_stock = [true, false, true];

let first_item_name = item_names[0];
let first_item_price = item_prices[0];

item_names.push("Durian");
item_prices.push(4.99);
in_stock.push(false);

let last_item_name = item_names.pop();
let last_item_price = item_prices.pop();
let last_item_stock = in_stock.pop();