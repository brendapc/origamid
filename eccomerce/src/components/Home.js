import React from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import styles from "./Home.module.css";

const Home = () => {
  const [produtos, setProdutos] = React.useState(null);
  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((r) => r.json())
      .then((json) => setProdutos(json));
  }, []);

  if (produtos === null) return null;
  return (
    <section className={`${styles.home} animeLeft`}>
      <Head title={`E-commerce`} description={`home page`} />{" "}
      {/* muda titulo na aba */}
      {produtos.map((produto) => (
        <Link to={`produto/${produto.id}`} key={produto.id}>
          <h1 className={styles.nome}>{produto.nome}</h1>
          <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
        </Link>
      ))}
    </section>
  );
};

export default Home;
