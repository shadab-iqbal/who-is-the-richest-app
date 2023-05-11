const { expect } = require("chai");

describe("WhoIsTheRichest", function () {
  let accounts, deployerObject, deployerAddress, whoIsTheRichest;
  const name = "Shadab";
  const email = "sdb@gmail.com";

  beforeEach(async function () {
    await deployments.fixture(["all"]);
    accounts = await hre.ethers.getSigners();
    deployerObject = accounts[0];
    deployerAddress = deployerObject.address;
    whoIsTheRichest = await hre.ethers.getContract("WhoIsTheRichest", deployerObject);

    await whoIsTheRichest.registerUser(deployerAddress, name, email);
  });

  describe("Register Users", function () {
    it("should be able to register new users", async function () {
      expect((await whoIsTheRichest.users(0)).userAddress).to.equal(deployerAddress);
      expect((await whoIsTheRichest.users(0)).name).to.equal(name);
      expect((await whoIsTheRichest.users(0)).email).to.equal(email);
    });
  });

  describe("Update Users", function () {
    it("should be able to update new users", async function () {
      const user1 = accounts[1].address;
      await whoIsTheRichest.registerUser(user1, "testName", "test@gmail.com");
      await whoIsTheRichest.updateUser(user1, "fixedName", "");
      expect((await whoIsTheRichest.users(1)).userAddress).to.equal(user1);
      expect((await whoIsTheRichest.users(1)).name).to.equal("fixedName");
      expect((await whoIsTheRichest.users(1)).email).to.equal("");
    });
  });

  describe("Users List", function () {
    it("should be able to return all users", async function () {
      await whoIsTheRichest.registerUser(accounts[1].address, "testName", "test@gmail.com");
      const allUsers = await whoIsTheRichest.getAllUsers();
      expect(allUsers[0].userAddress).to.equal(deployerAddress);
      expect(allUsers[1].userAddress).to.equal(accounts[1].address);
    });
  });

  describe("User Count", function () {
    it("should be able to return user count", async function () {
      await whoIsTheRichest.registerUser(accounts[1].address, "testName", "test@gmail.com");
      expect((await whoIsTheRichest.getUsersCount()).toString()).to.equal("2");
    });
  });
});
