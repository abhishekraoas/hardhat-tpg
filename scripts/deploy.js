// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  
  const Counter = await hre.ethers.getContractFactory("Counter");
  const counter = await Counter.deploy(10);
  
  await counter.deployed(); 

  console.log(`Address: ${counter.address}`); 

  const xValue1 = await counter.getValue(); 

  console.log(`x before increment: ${xValue1}`); 

  await counter.incValue(); 

  const xValue = await counter.getValue(); 

  console.log(`x after increment: ${xValue}`); 
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
