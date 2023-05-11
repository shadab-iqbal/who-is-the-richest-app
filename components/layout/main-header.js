import Link from "next/link";

import classes from "./main-header.module.css";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href={"/"}>Who is the Richest</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href={"/registration"}>Register</Link>
          </li>
          <li>
            <Link href={"/update-profile"}>Update Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
