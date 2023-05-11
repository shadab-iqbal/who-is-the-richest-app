const { network } = require("hardhat");

module.exports = async (hre) => {
  const { deploy, log } = hre.deployments;
  const { deployer } = await hre.getNamedAccounts();
  log("Deploying Smart Contract...");

  const whoIsTheRichest = await deploy("WhoIsTheRichest", {
    from: deployer,
    log: true,
    args: [],
    waitConfirmations: network.config.blockConfirmations || 1,
  });

  log("WhoIsTheRichest Deployed!");
  log("-----------------------------------------------------");
};

module.exports.tags = ["all", "whoistherichest"];
