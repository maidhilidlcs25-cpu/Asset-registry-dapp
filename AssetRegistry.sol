// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AssetRegistry {
    struct Asset {
        string assetId;
        string description;
        address owner;
    }

    mapping(string => Asset) public assets;

    event AssetRegistered(string assetId, string description, address owner);
    event OwnershipTransferred(string assetId, address from, address to);

    function registerAsset(
        string memory _assetId,
        string memory _description
    ) public {
        require(bytes(assets[_assetId].assetId).length == 0, "Asset already exists");

        assets[_assetId] = Asset({
            assetId: _assetId,
            description: _description,
            owner: msg.sender
        });

        emit AssetRegistered(_assetId, _description, msg.sender);
    }

    function transferAsset(string memory _assetId, address newOwner) public {
        require(assets[_assetId].owner == msg.sender, "Only owner can transfer");

        address previousOwner = assets[_assetId].owner;
        assets[_assetId].owner = newOwner;

        emit OwnershipTransferred(_assetId, previousOwner, newOwner);
    }

    function getAsset(string memory _assetId)
        public
        view
        returns (string memory, string memory, address)
    {
        Asset memory a = assets[_assetId];
        return (a.assetId, a.description, a.owner);
    }
}
