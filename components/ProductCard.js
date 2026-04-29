export default function ProductCard({ produto }) {
  return (
    <div className="productCard">
      <img src={produto.imagem} alt={produto.nome} />

      <div className="productContent">
        <h3>{produto.nome}</h3>
        <p>{produto.descricao}</p>
        <strong>{produto.preco}</strong>

        <a href={`/produto/${produto.id}`} className="btnPrimary">
          Ver produto
        </a>
      </div>
    </div>
  );
}