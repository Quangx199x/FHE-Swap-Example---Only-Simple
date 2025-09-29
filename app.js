async function swap() {
  const amount = document.getElementById("amount").value;
  const direction = document.getElementById("direction").value;

  // Simulate encryption with base64 (demo only)
  const encryptedAmount = btoa(amount);

  console.log("Sending to smart contract:", encryptedAmount, direction);

  alert(`Transaction sent with encrypted amount: ${encryptedAmount} (${direction})`);
}
