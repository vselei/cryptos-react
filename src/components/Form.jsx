import { useEffect, useState } from 'react';

import styled from '@emotion/styled';

import useSelect from '../hooks/useSelect';
import Error from './Error';
import { coins } from '../data/coins';

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 30px;

  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;

const Form = ({ setCoins }) => {
  const [cryptoCoins, setCryptoCoins] = useState([]);
  const [error, setError] = useState(false);

  const [coin, SelectCoins] = useSelect('Selecionar Moeda', coins);
  const [crypto, SelectCrypto] = useSelect(
    'Selecionar Cripto moeda',
    cryptoCoins
  );

  useEffect(() => {
    const fetching = async () => {
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
      const response = await fetch(url);
      const result = await response.json();

      const cryptos = result.Data.map(coin => {
        const crypto = {
          id: coin.CoinInfo.Name,
          name: coin.CoinInfo.FullName
        };

        return crypto;
      });

      setCryptoCoins(cryptos);
    };

    fetching();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    if ([coin, crypto].includes('')) {
      setError(true);
      return;
    }

    setError(false);
    setCoins({
      coin,
      crypto
    });
  };

  return (
    <>
      {error && <Error>Todos os campos são obrigatórios</Error>}
      <form onSubmit={handleSubmit}>
        <SelectCoins />
        <SelectCrypto />
        <InputSubmit type="submit" value="cotar" />
      </form>
    </>
  );
};

export default Form;
