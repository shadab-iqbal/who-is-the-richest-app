const fs = require("fs");

const FRONT_END_ADDRESS_FILE = "./utils/contractAddress.json";
const FRONT_END_ABI_FILE = "./utils/contractAbi.json";

module.exports = async function (hre) {
  console.log("Updating front end...");
  await updateContractAddress(hre);
  await updateAbi(hre);
  console.log("Update done!");
};

async function updateContractAddress(hre) {
  const whoIsTheRichest = await hre.ethers.getContract("WhoIsTheRichest");
  const chainId = hre.network.config.chainId.toString();
  const currentAddress = JSON.parse(fs.readFileSync(FRONT_END_ADDRESS_FILE, "utf8"));
  currentAddress[chainId] = whoIsTheRichest.address;
  fs.writeFileSync(FRONT_END_ADDRESS_FILE, JSON.stringify(currentAddress));
}

async function updateAbi(hre) {
  const whoIsTheRichest = await hre.ethers.getContract("WhoIsTheRichest");
  fs.writeFileSync(FRONT_END_ABI_FILE, whoIsTheRichest.interface.format(ethers.utils.FormatTypes.json));
}

module.exports.tags = ["all", "frontend"];
