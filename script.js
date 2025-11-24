let contract;
let signer;

// Your contract details
const CONTRACT_ADDRESS = "0x694d741E7FAFdb7517487D27931B4964Bd61095E";
const CONTRACT_ABI = [
    {
        "anonymous": false,
        "inputs": [
            {"indexed": true,"internalType": "string","name": "assetId","type": "string"},
            {"indexed": false,"internalType": "string","name": "description","type": "string"},
            {"indexed": true,"internalType": "address","name": "owner","type": "address"}
        ],
        "name": "AssetRegistered",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {"indexed": true,"internalType": "string","name": "assetId","type": "string"},
            {"indexed": true,"internalType": "address","name": "from","type": "address"},
            {"indexed": true,"internalType": "address","name": "to","type": "address"}
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "inputs": [
            {"internalType": "string","name": "_assetId","type": "string"},
            {"internalType": "string","name": "_description","type": "string"}
        ],
        "name": "registerAsset",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {"internalType": "string","name": "_assetId","type": "string"},
            {"internalType": "address","name": "newOwner","type": "address"}
        ],
        "name": "transferAsset",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {"internalType": "string","name": "_assetId","type": "string"}
        ],
        "name": "getAsset",
        "outputs": [
            {"internalType": "string","name": "", "type": "string"},
            {"internalType": "string","name": "", "type": "string"},
            {"internalType": "address","name": "", "type": "address"}
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

// Connect wallet
async function connectWallet() {
    if (!window.ethereum) {
        alert("MetaMask not detected!");
        return;
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    signer = await provider.getSigner();

    contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

    document.getElementById("walletAddress").innerText =
        "Connected: " + (await signer.getAddress());

    alert("Wallet connected!");
}

// Register asset
async function registerAsset() {
    const assetId = document.getElementById("regAssetId").value;
    const desc = document.getElementById("regDescription").value;

    try {
        const tx = await contract.registerAsset(assetId, desc);
        await tx.wait();
        alert("Asset registered!");
    } catch (e) {
        alert("Error: " + e);
    }
}

// Transfer asset
async function transferAsset() {
    const assetId = document.getElementById("transAssetId").value;
    const newOwner = document.getElementById("newOwner").value;

    try {
        const tx = await contract.transferAsset(assetId, newOwner);
        await tx.wait();
        alert("Ownership transferred!");
    } catch (e) {
        alert("Error: " + e);
    }
}

// Get asset info
async function getAssetInfo() {
    const assetId = document.getElementById("getAssetId").value;

    try {
        const asset = await contract.getAsset(assetId);

        document.getElementById("assetInfo").innerHTML =
            `
            <p><strong>Asset ID:</strong> ${assetId}</p>
            <p><strong>Description:</strong> ${asset[0]}</p>
            <p><strong>More Info:</strong> ${asset[1]}</p>
            <p><strong>Owner:</strong> ${asset[2]}</p>
            `;
    } catch (e) {
        alert("Error: " + e);
    }
}
