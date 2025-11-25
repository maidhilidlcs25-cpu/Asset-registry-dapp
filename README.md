# Asset Registry DApp

A simple decentralized application (DApp) built using **Solidity, Ethers.js, and MetaMask**.  
This DApp allows users to **register an asset** and **transfer ownership** of an existing asset.  
It interacts with a smart contract deployed on the **Sepolia Test Network**.

---

## Project Description

The Asset Registry DApp enables users to:

- Connect their MetaMask wallet
- Register a new asset on the blockchain
- Transfer ownership of an existing asset to another wallet address
- Fetch and view registered asset details  

This project demonstrates a basic end-to-end decentralized application workflow including smart contract development, deployment, and frontend blockchain interaction.

---

## Features

- **Wallet Connection** using MetaMask  
- **Register Asset** (Asset ID + Description stored on-chain)
- **View Asset Details**
- **Transfer Ownership** of an asset to another address
- Clean & simple **HTML/CSS/JavaScript frontend**
- Uses **Ethers.js** to interact with the blockchain

---

## Smart Contract Details

**Network Used:** Sepolia Test Network  

**Contract Address:**  
`<YOUR_CONTRACT_ADDRESS_HERE>`  

**Etherscan Link:**  
(https://maidhilidlcs25-cpu.github.io/Asset-registry-dapp/)



---

## Steps to Deploy the Smart Contract

1. Open **Remix IDE**  
   https://remix.ethereum.org  

2. Create a new file `AssetRegistry.sol`  
   Paste your Solidity contract code.

3. Go to the **Solidity Compiler** tab  
   - Select version `0.8.x`  
   - Click **Compile**

4. Go to **Deploy & Run Transactions**  
   - Environment: **Injected Provider (MetaMask)**  
   - Network: **Sepolia**  
   - Click **Deploy**

5. Copy the **deployed contract address**  
   Add it inside your frontend `script.js`.

---

## Steps to Run the Frontend

1. Download your project folder (HTML + JS + ABI).  
2. Open `index.html` directly in your browser **OR** run a local server:

### Option A — Open Directly
Just double-click `index.html`

### Option B — Run a Local Server


## Screenshot of the DApp

![Asset Registry UI](./Screenshot%202025-11-26%20010950.png)

