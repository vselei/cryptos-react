import styled from '@emotion/styled';
import { useState } from 'react';

const Label = styled.label`
  color: #fff;
  display: block;
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
`;

const Select = styled.select`
  width: 100%;
  font-size: 18px;
  padding: 14px;
  border-radius: 10px;
`;

const useSelect = (label, coins) => {
  const [state, setState] = useState('');

  const SelectData = () => (
    <>
      <Label>{label}</Label>
      <Select value={state} onChange={e => setState(e.target.value)}>
        <option value="">Selecione</option>
        {coins.map(opt => (
          <option key={opt.id} value={opt.id}>
            {opt.name}
          </option>
        ))}
      </Select>
    </>
  );

  return [state, SelectData];
};

export default useSelect;
