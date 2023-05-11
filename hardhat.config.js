require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: process.env.GOERLI_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 5,
      blockConfirmations: 5,
      saveDeployments: true,
    },
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 11155111,
      blockConfirmations: 5,
      saveDeployments: true,
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337,
      blockConfirmations: 1,
      saveDeployments: true,
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
      5: 0,
    },
  },
};
