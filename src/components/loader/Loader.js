import React from "react";
import Spinner from "react-loader-spinner";
import styles from "./Loader.module.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loader = () => {
  return (
    <div className={styles.Loader}>
      <Spinner
        style={styles}
        type="ThreeDots"
        color="rgb(169, 179, 233)"
        height={150}
        width={150}
      />
    </div>
  );
};

export default Loader;
