// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Counter {
    
    uint private x; 

    constructor(uint _x) { 
        x = _x; 
    }

    function incValue() external {
        x++; 
    }

    function getValue() external view returns(uint){
        return x; 
    }
}
