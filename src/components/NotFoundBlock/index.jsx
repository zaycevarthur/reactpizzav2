import React from "react";
import styles from "./NotFoundBlock.module.scss";
import { Link } from "react-router-dom";

function index() {
  return (
    <div className={styles.root}>
      <h2>Ничего не найдено!</h2>
      <Link to="/">
        <button>go home</button>
      </Link>
    </div>
  );
}

export default index;
