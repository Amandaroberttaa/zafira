export default function handler(req, res) {
  const produtos = [
    {
      id: 1,
      nome: "Vestido Elegance Nude",
      preco: "R$ 129,90",
      imagem: "/imagens/produto1.jpg"
    },
    {
      id: 2,
      nome: "Conjunto Rosé",
      preco: "R$ 159,90",
      imagem: "/imagens/produto2.jpg"
    },
    {
      id: 3,
      nome: "Blusa Soft Feminina",
      preco: "R$ 79,90",
      imagem: "/imagens/produto3.jpg"
    }
  ];

  res.status(200).json(produtos);
}