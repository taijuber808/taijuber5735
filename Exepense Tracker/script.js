const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");
const list = document.getElementById("list");
const balance = document.getElementById("balance");

let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

// Add transaction
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const transaction = {
    text: text.value,
    amount: +amount.value
  };

  transactions.push(transaction);
  updateUI();

  text.value = "";
  amount.value = "";
});

// Update UI
function updateUI() {
  list.innerHTML = "";

  transactions.forEach((t) => {
    const li = document.createElement("li");

    li.innerHTML = `
      ${t.text} : ₹${t.amount}
      <button onclick="deleteTransaction(${t.id})">Delete</button>
    `;

    list.appendChild(li);
  });

  // Calculate balance using reduce
  const total = transactions.reduce((acc, curr) => acc + curr.amount, 0);
  balance.innerText = total;

  // Save to localStorage
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

// Delete transaction
function deleteTransaction(id) {
  transactions = transactions.filter(t => t.id !== id);
  updateUI();
}

// Initial load
updateUI();