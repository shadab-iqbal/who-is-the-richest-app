const { ethers } = require("hardhat");

async function main() {
  const accounts = await ethers.getSigners();
  const deployerObject = accounts[0];
  const whoIsTheRichest = await ethers.getContract("WhoIsTheRichest", deployerObject);

  for (let i = 0; i < 5; ++i) {
    const txResponse = await whoIsTheRichest.registerUser(accounts[i].address, `user${i}`, `u${i}@gmail.com`);
    const txReceipt = await txResponse.wait(1);
  }

  // const txResponse = await whoIsTheRichest.registerUser(accounts[5].address, "user5", "u5@gmail.com");
  // const txReceipt = await txResponse.wait(1);

  console.log("5 Users are Registered!");
}

main().catch((e) => {
  console.log(e);
});
