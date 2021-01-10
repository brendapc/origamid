import React from "react";
import styles from "./Contato.module.css";
import img from "../img/contato.jpg";
import Head from "./Head";

const Contato = () => {
  return (
    <div className={`${styles.contato} animeLeft`}>
      <img src={img} />
      <div>
        <h1>Entre em contato;</h1>
        <ul className={styles.dados}>
          <li>brenda@outlook.com</li>
          <li>01010-0101</li>
          <li>Rua é as guria, 1903</li>
        </ul>
      </div>
      <Head title="Ecommerce | Contato" description="entre em contato" />
    </div>
  );
};

export default Contato;
