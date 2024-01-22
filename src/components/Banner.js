import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
  // Definizione degli stati del componente

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web designer", "UX/UI Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  // Questo è un effetto collaterale che cambierà ogni volta che cambierà o text o delta, le due variabili che passo tra parentesi quadre
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

  // Questa è la funzione 'tick' che gestisce l'animazione dinamica del testo
  const tick = () => {
    let i = loopNum % toRotate.length; //Calcolo col modulo un indice, che rimane all'interno del range delle posizioni disponibili all'interno dell'Array 'toRotate'
    let fullText = toRotate[i]; // Questo è il testo completo da visualizzare
    // Testo visualizzato aggiornato, in base a se si stanno o no cancellando i caratteri, di conseguenza aggiunge/toglie caratteri
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText); //Settagio del testo. 

    // Caso in cui il testo è vuoto
    if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    }
    // Questo è il caso in cui il testo è completo
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") { // questa è in fase di cancellazione, ma il testo vuoto
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    }

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2); // Se sta cancellando, il tempo dimezza (tempo delta) per rendere la cancellazione più rapida
    } else {
      setIndex((prevIndex) => prevIndex + 1); //Sennò viene incrementato l'indice al prossimo elemento dell'array toRotate
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my portfolio!</span>
            <h1>
              {"Hi I am Connie, "}
              <span className="wrap">{text}</span>
            </h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem ipsum about</p>
            <button onClick={() => console.log("connect")}>
              Let's connect
              <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
