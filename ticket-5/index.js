const shoppingCart = [
  {
    product: "Bananas",
    price: 0.5,
    quantity: 6,
  },
  {
    product: "Apples",

    price: 0.7,
    quantity: 8,
  },
  {
    product: "Yoghurt",
    price: 1.5,
    quantity: 10,
  },
];

let totalCost = 0;

for (let i = 0; i <= shoppingCart.length; i++) {
  const item = shoppingCart[i];
  const costForItem = item.price * item.quantity;
  totalCost += costForItem;
}

const formatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
});

console.log(`The total cost for this cart is ${formatter.format(totalCost)}`);
