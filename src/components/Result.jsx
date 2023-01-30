import styled from '@emotion/styled';

const Container = styled.div`
  color: #fff;
  font-family: 'Lato', sans-serif;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`;

const Image = styled.img`
  display: block;
  width: 120px;
`;

const Text = styled.p`
  font-size: 18px;

  span {
    font-weight: 700;
  }
`;

const Price = styled.p`
  font-size: 24px;

  span {
    font-weight: 700;
  }
`;

const Result = ({ result }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    result;

  return (
    <Container>
      <Image src={`https://cryptocompare.com${IMAGEURL}`} alt="Cripto moeda" />
      <div>
        <Price>
          Preço: <span>{PRICE}</span>
        </Price>
        <Text>
          Preço mais alto do dia: <span>{HIGHDAY}</span>
        </Text>
        <Text>
          Preço mais baixo do dia: <span>{LOWDAY}</span>
        </Text>
        <Text>
          Variação das últimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
        </Text>
        <Text>
          Última atualização: <span>{LASTUPDATE}</span>
        </Text>
      </div>
    </Container>
  );
};

export default Result;
