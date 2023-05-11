import { useRouter } from "next/router";
import { useRef } from "react";
import { ethers } from "ethers";
import { useNotification } from "web3uikit";

import { contractAddress, contractAbi } from "../../utils";
import Card from "../ui/card";
import classes from "./form.module.css";

export default function RegistrationForm() {
  const dispatch = useNotification();
  const router = useRouter();

  const pathName = router.pathname.substring(1);

  const addressInputRef = useRef();
  const nameInputRef = useRef();
  const emailInputRef = useRef();

  const handleNewNotification = () => {
    dispatch({
      type: "success",
      title: "Success",
      message: "Request Successful",
      position: "topR",
      icon: "bell",
      isClosing: true,
    });
  };

  async function submitHandler(event) {
    event.preventDefault();

    const enteredAddress = addressInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const chainId = await provider.getNetwork().then((network) => network.chainId);
    const signer = provider.getSigner();
    const whoIsTheRichest = new ethers.Contract(contractAddress[chainId], contractAbi, signer);

    let trnx;
    if (pathName == "registration") {
      trnx = await whoIsTheRichest.registerUser(enteredAddress, enteredName, enteredEmail);
    } else if (pathName == "update-profile") {
      const result = await whoIsTheRichest.getAllUsers();
      const isRegistered = result.some((item) => item.userAddress == enteredAddress);
      if (isRegistered) {
        trnx = await whoIsTheRichest.updateUser(enteredAddress, enteredName, enteredEmail);
      } else {
        alert("User Not Registered");
      }
    }

    router.replace("/");
    await trnx.wait();
    handleNewNotification();
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="address"> Wallet Address </label>
          <input type="text" id="address" ref={addressInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="name"> Name </label>
          <input type="text" id="name" ref={nameInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="email"> Email </label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div className={classes.actions}>
          <button>{pathName == "registration" ? "Register" : "Update"}</button>
        </div>
      </form>
    </Card>
  );
}
