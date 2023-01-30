import styled from '@emotion/styled';

const Result = ({ result }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    result;

  return (
    <div>
      <p>
        Preço: <span>{PRICE}</span>
      </p>
      <p>
        Preço mais alto do dia: <span>{HIGHDAY}</span>
      </p>
      <p>
        Preço mais baixo do dia: <span>{LOWDAY}</span>
      </p>
      <p>
        Variação das últimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
      </p>
      <p>
        Última atualização: <span>{LASTUPDATE}</span>
      </p>
    </div>
  );
};

export default Result;
