const { ethers } = require("hardhat");

async function sendEther() {
  const [u0, u1, u2, u3, u4, ...users] = await ethers.getSigners();
  const valueToSend = ethers.utils.parseEther("5000");

  console.log("Sending ETH...");

  const tx = await u3.sendTransaction({
    to: u4.address,
    value: valueToSend,
  });

  console.log("Transaction Complete!");
}

sendEther();
