# Who Is The Richest

This is a web3 project where users can register and update their profile. The landing page shows a list of all registered users, including their wallet address, name, and wallet balance. It also displays how many users are there and who the top 3 richest registered users are, in terms of ETH balance.

The project is built using Hardhat and Next.js. It works in Hardhat localhost node, Goerli testnet, and Sepolia testnet. For using in other networks, you can modify the `hardhat.config.js` file. 

## Installation

To run the project, first clone the repo and navigate to the project directory. Then, use the npm package manager to install the required dependencies:

`npm install --force`

This command will install the dependencies required for the project to run.

## Connecting to the network

To run the project, you need to connect to the appropriate network (localhost, Goerli, or Sepolia).

### Localhost

If you are using Hardhat localhost, please make sure you are running it first using:

`npx hardhat node`

Then, deploy the contracts to localhost using:

`npx hardhat deploy --network localhost`

### Goerli testnet
To connect to the Goerli testnet, make sure you have Metamask installed and set up. Then, select the Goerli testnet in your Metamask network dropdown. Smarts contracts are already deployed in this network.

### Sepolia testnet
To connect to the Sepolia testnet, make sure you have Metamask installed and set up. Then, select the Sepolia testnet in your Metamask network dropdown. Smarts contracts are already deployed in this network.

## Running the project
After installation and network setup, you can run the project using the following command:

`npm run dev`

This command will start the development server and you will be able to interact with the webapp.

## Interacting with the contract
You can also interact with the contract from the backend. If you want to register some users, run:

`npm run register`

If you want to send ETH from one wallet to another, run:

`npm run sendEth`

You can also test the smart contract using:

`npx hardhat test`

There is a 100% test coverage.
