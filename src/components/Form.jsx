import styled from '@emotion/styled';

import useSelect from '../hooks/useSelect';

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

const Form = () => {
  const [coin, SelectCoins] = useSelect('Selecionar Moeda', coins);
  // const [SelectCrypto] = useSelect('Selecionar Cripto moeda');

  return (
    <form>
      <SelectCoins />
      {/* <SelectCrypto /> */}
      <InputSubmit type="submit" value="cotar" />
    </form>
  );
};

export default Form;
