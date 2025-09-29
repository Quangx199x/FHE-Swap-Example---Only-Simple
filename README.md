# 🔐 FHE Swap Demo

This is a demo repo for **FHE Swap** (Fully Homomorphic Encryption Swap) — the idea of swapping tokens on blockchain while transaction amounts are encrypted using FHE, ensuring **privacy**.

## 🚀 Features
- Swap token A <-> token B
- Swap amount is encrypted with FHE (simple demo, not production-ready)
- Web frontend to input amount, encrypt, and send to smart contract

## 🛠 Tech Stack
- Solidity (Smart contract)
- Hardhat (Contract deployment)
- JavaScript + HTML (Frontend demo)
- Simulated FHE library (here represented with `BigInt` + base64 instead of real FHE)

## 📦 Installation
```bash
git clone https://github.com/yourusername/fhe-swap.git
cd fhe-swap
npm install
npx hardhat compile
npx hardhat run scripts/deploy.js --network sepolia
```

## 🌐 Run frontend
Open `frontend/index.html` in your browser, connect MetaMask, and test swapping.

## ⚠️ Disclaimer
This is only a demo of the **FHE in DeFi** idea, not a real-world application.  
To implement real FHE, consider integrating libraries like [Zama FHE](https://github.com/zama-ai/concrete).
