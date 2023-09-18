// Get elements from the DOM
const itemInput = document.getElementById("itemInput");
const addItemButton = document.getElementById("addItemBtn");
const shoppingList = document.getElementById("shoppingList");

// Add an item to the shopping list
addItemButton.addEventListener("click", () => {
  const itemName = itemInput.value.trim();

  if (itemName !== "") {
    const li = document.createElement("li");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete");
    li.append(itemName, deleteButton);

    shoppingList.append(li);
    itemInput.value = "";

    // Add event listener to delete button
    deleteButton.addEventListener("click", () => li.remove());
  }
});
