Asset Registry DApp

This project is a decentralized application (DApp) built on the Ethereum blockchain. It enables users to register assets, view asset details, and transfer ownership securely using a smart contract deployed on the Sepolia test network. The application uses MetaMask for transaction signing and ethers.js for blockchain interaction.

**Live Demo (GitHub Pages)
**
https://maidhilidlcs25-cpu.github.io/Asset-registry-dapp/

(Open this link in a browser with MetaMask installed)

Features

Register a new asset with a unique Asset ID

Transfer asset ownership to another wallet

Retrieve and display asset information

Connect and interact with MetaMask

Built using ethers.js

Fully functional on the Sepolia Test Network

Smart Contract Details
Contract Address
0x694d741E7FAFdb7517487D27931B4964Bd61095E

Folder Structure
asset-registry-dapp/
│── index.html
│── script.js
│── style.css
│── README.md
└── assets/ (optional images)

Deployment on GitHub Pages

Upload the project files (index.html, script.js, style.css) to your repository.

Navigate to Settings > Pages.

In the Pages section:

Select main branch

Set the folder to root

Click Save.

GitHub will generate a public link within a minute.

How to Test the DApp
1. Install MetaMask

Download from https://metamask.io

2. Switch to Sepolia Test Network

Fund your wallet with test ETH using a Sepolia faucet.

3. Open the GitHub Pages DApp link
4. Connect Wallet

Click Connect Wallet and approve in MetaMask.

Functionalities
Register an Asset

Enter a unique Asset ID (e.g., A1001).

Enter a description (e.g., Laptop).

Click Register Asset.

Confirm the transaction in MetaMask.

Get Asset Information

Enter the Asset ID.

Click Get Asset.

The application displays:

Asset ID

Description
6

Current owner address

Transfer an Asset

Enter the Asset ID.

Enter the recipient's wallet address.

Click Transfer.

Confirm in MetaMask.

Technologies Used

Solidity

Ethereum Sepolia Test Network

Remix IDE

MetaMask

HTML, CSS, JavaScript

ethers.js

GitHub Pages

Purpose of the Project

This project demonstrates how blockchain technology can be applied for tamper-proof asset registration and secure ownership transfer. It highlights decentralized data storage, user-controlled transactions, and transparent record management suitable for academic, research, and enterprise-level applications.
