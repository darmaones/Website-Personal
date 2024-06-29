document
  .getElementById("transactionForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const transaction = document.getElementById("transaction").value;

    alert(
      `Transaksi berhasil!\nNama: ${name}\nEmail: ${email}\nJenis Transaksi: ${transaction}`
    );
  });
