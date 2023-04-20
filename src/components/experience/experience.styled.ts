import styled from "styled-components";

const pxToRem = (size: number) => `${size / 16}rem`;

const TextWrapTitle = styled.div`
  font-weight: 300;

  font-size: ${pxToRem(17)};
`;

export { TextWrapTitle };
