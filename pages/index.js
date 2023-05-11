import React, { useEffect, useRef, useState } from "react";
import { ethers } from "ethers";

import { contractAddress, contractAbi } from "../utils";
import UserList from "@/components/users/user-list";
import TopRichest from "@/components/users/top-richest";

export default function Home() {
  const effectRan = useRef(false);

  const [allUsers, setAllUsers] = useState([]);

  let provider, chainId, signer, whoIsTheRichest;

  async function fetchData() {
    const result = await whoIsTheRichest.getAllUsers();
    const jsArray = await Promise.all(
      result.map(async (item) => {
        const balance = await provider.getBalance(item.userAddress);
        return {
          address: item.userAddress,
          name: item.name,
          email: item.email,
          balance: ethers.utils.formatEther(balance),
        };
      })
    );
    setAllUsers(jsArray);
  }

  useEffect(() => {
    async function createContract() {
      provider = new ethers.providers.Web3Provider(window.ethereum);
      chainId = await provider.getNetwork().then((network) => network.chainId);
      signer = provider.getSigner();
      whoIsTheRichest = new ethers.Contract(contractAddress[chainId], contractAbi, signer);
      fetchData();

      const onRequestSuccess = async (userAddress) => {
        fetchData();
      };

      whoIsTheRichest.on("UserRegister", onRequestSuccess);
      whoIsTheRichest.on("UserUpdate", onRequestSuccess);
    }

    if (effectRan.current === false) {
      createContract();

      return () => {
        effectRan.current = true;
      };
    }
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>List of All Users</h1>
      <UserList list={allUsers} />
      <h2>Users Count is {allUsers.length}</h2>
      <h1>List of Wealthiest Top 3</h1>
      <TopRichest list={allUsers} />
    </div>
  );
}
