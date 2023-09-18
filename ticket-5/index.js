console.log('hello world');

const shoppingCart = {
  item1: {
    product: "Bananas",
    price: 0.5,
    quantity: 6,
  },
  item2: {
    product: "Apples",
    price: 0.7,
    quantity: 8,
  },
  item3: {
    product: "Yoghurt",
    price: 1.5,
    quantity: 10,
  },
};

console.log(shoppingCart["item1"].price);

let totalCost = 0;

for (const i in shoppingCart) {
  const item = shoppingCart[i];
  let costForItem = item.price * item.quantity;
  totalCost += costForItem;
}
//console.log(totalCost);

const formatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
});

console.log(`The total cost for this cart is ${formatter.format(totalCost)}`);
