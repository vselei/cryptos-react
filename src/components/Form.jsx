import styled from '@emotion/styled';

import useSelect from '../hooks/useSelect';

import { coins } from '../data/coins';
import { useEffect, useState } from 'react';

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

const Form = () => {
  const [cryptoCoins, setCryptoCoins] = useState([]);

  const [coin, SelectCoins] = useSelect('Selecionar Moeda', coins);
  const [cryptos, SelectCrypto] = useSelect(
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

  return (
    <form>
      <SelectCoins />
      <SelectCrypto />
      <InputSubmit type="submit" value="cotar" />
    </form>
  );
};

export default Form;
