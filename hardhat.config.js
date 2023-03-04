require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    hyperspace: {
      chainId: 3141,
      url: "https://api.hyperspace.node.glif.io/rpc/v1",
      accounts: ["f3071aea61ae32e805e774cdaa507f88dc29cc04bf6842815fc82d38d1cbfae1"],
      timeout: 100_000
  },
  }
};
