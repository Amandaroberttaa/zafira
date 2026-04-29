import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

const produtos = [
  {
    id: 1,
    nome: "Vestido Elegance Nude",
    preco: "R$ 129,90",
    imagem: "/imagens/produto1.jpg",
    descricao: "Vestido feminino elegante, ideal para ocasiões especiais."
  },
  {
    id: 2,
    nome: "Conjunto Rosé",
    preco: "R$ 159,90",
    imagem: "/imagens/produto2.jpg",
    descricao: "Conjunto moderno e confortável para o dia a dia."
  },
  {
    id: 3,
    nome: "Blusa Soft Feminina",
    preco: "R$ 79,90",
    imagem: "/imagens/produto3.jpg",
    descricao: "Blusa delicada com toque sofisticado."
  }
];

export default function Loja() {
  return (
    <>
      <Header />

      <main className="loja">
        <h1>Nossa Coleção</h1>
        <p className="subtitle">Escolha sua peça favorita da ZAFIRA</p>

        <div className="productGrid">
          {produtos.map((produto) => (
            <ProductCard key={produto.id} produto={produto} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}