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


let totalCost = 0;

for (let i = 0; i <= shoppingCart.length; i++) {
  const item = shoppingCart[i];
  let costForItem = shoppingCart[i].price * shoppingCart[i].quantity;
  totalCost += costForItem;
}

const formatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
});

console.log(`The total cost for this cart is ${formatter.format(totalCost)}`);
