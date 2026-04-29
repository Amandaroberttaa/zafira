import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />

      <main className="home">

        <section className="hero">

          <h1>ZAFIRA</h1>

          <p className="heroText">
            Elegância, estilo e sofisticação para mulheres que sabem o seu valor ✨
          </p>

          <div className="heroButtons">
            <a href="/loja" className="btnPrimary">
              Ver coleção
            </a>

            <a href="#whatsapp" className="btnSecondary">
              Falar no WhatsApp
            </a>
          </div>
        </section>

        <section className="about">
          <h2>Sobre a ZAFIRA</h2>

          <p>
            A ZAFIRA nasceu para valorizar a beleza feminina com peças modernas,
            elegantes e cheias de personalidade.
          </p>
        </section>

        <section id="whatsapp">
          <WhatsAppButton />
        </section>

      </main>

      <Footer />
    </>
  );
}