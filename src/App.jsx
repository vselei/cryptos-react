import styled from '@emotion/styled';

import Form from './components/Form';

import CryptoImg from './img/cryptos.png';


const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`;

const App = () => {
  return (
    <Container>
      <Image src={CryptoImg} alt="Cripto moedas" />
      <div>
        <Heading>Cotação das Cripto Moedas Atualmente</Heading>
        <Form />
      </div>
    </Container>
  );
};

export default App;
