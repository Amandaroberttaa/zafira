import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";

const produtos = [
  {
    id: "1",
    nome: "Vestido Elegance Nude",
    preco: "R$ 129,90",
    imagem: "/imagens/produto1.jpg",
    descricao: "Vestido feminino elegante, ideal para ocasiões especiais."
  },
  {
    id: "2",
    nome: "Conjunto Rosé",
    preco: "R$ 159,90",
    imagem: "/imagens/produto2.jpg",
    descricao: "Conjunto moderno e confortável para o dia a dia."
  },
  {
    id: "3",
    nome: "Blusa Soft Feminina",
    preco: "R$ 79,90",
    imagem: "/imagens/produto3.jpg",
    descricao: "Blusa delicada com toque sofisticado."
  }
];

export default function Produto({ produto }) {
  if (!produto) {
    return <h1>Produto não encontrado</h1>;
  }

  return (
    <>
      <Header />

      <main className="productPage">
        <img src={produto.imagem} alt={produto.nome} className="productImageLarge" />

        <div className="productInfo">
          <h1>{produto.nome}</h1>
          <p>{produto.descricao}</p>
          <strong>{produto.preco}</strong>

          <button className="btnPrimary">Comprar agora</button>

          <WhatsAppButton produto={produto.nome} />
        </div>
      </main>

      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const produto = produtos.find((item) => item.id === id);

  return {
    props: {
      produto: produto || null
    }
  };
}