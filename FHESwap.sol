// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract FHESwap {
    address public tokenA;
    address public tokenB;
    address public owner;

    event Swap(address indexed user, string encryptedAmount, string swapDirection);

    constructor(address _tokenA, address _tokenB) {
        tokenA = _tokenA;
        tokenB = _tokenB;
        owner = msg.sender;
    }

    // Demo swap: only stores the encrypted amount
    function swap(string memory encryptedAmount, string memory swapDirection) external {
        // swapDirection: "AtoB" or "BtoA"
        emit Swap(msg.sender, encryptedAmount, swapDirection);
    }
}
