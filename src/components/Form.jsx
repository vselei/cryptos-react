import styled from '@emotion/styled';

import useSelectCoins from '../hooks/useSelectCoins';

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

  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;

const Form = () => {
  const [SelectCoins] = useSelectCoins();

  SelectCoins();

  return (
    <form>
      <InputSubmit type="submit" value="cotar" />
    </form>
  );
};

export default Form;
