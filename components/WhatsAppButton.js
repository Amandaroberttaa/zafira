export default function WhatsAppButton({ produto }) {
  const mensagemRecife = produto
    ? `Olá, sou de Recife e vim pelo site da ZAFIRA. Tenho interesse no produto: ${produto}`
    : "Olá, sou de Recife e vim pelo site da ZAFIRA.";

  const mensagemJoaoPessoa = produto
    ? `Olá, sou de João Pessoa e vim pelo site da ZAFIRA. Tenho interesse no produto: ${produto}`
    : "Olá, sou de João Pessoa e vim pelo site da ZAFIRA.";

  return (
    <div className="whatsappBox">
      <h2>Fale com a ZAFIRA</h2>
      <p>Escolha sua cidade para atendimento:</p>

      <div className="whatsappButtons">
        <a
          href={`https://wa.me/5581999999999?text=${encodeURIComponent(mensagemRecife)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsappBtn"
        >
          WhatsApp Recife
        </a>

        <a
          href={`https://wa.me/5583999999999?text=${encodeURIComponent(mensagemJoaoPessoa)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsappBtn"
        >
          WhatsApp João Pessoa
        </a>
      </div>
    </div>
  );
}