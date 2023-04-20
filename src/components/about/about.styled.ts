import styled from "styled-components";

const pxToRem = (size: number) => `${size / 16}rem`;

const TextWrap4 = styled.h4`
  font-size: ${pxToRem(24)};
  color: black;
`;
const TextWrapAbout = styled.h4`
  font-family: "Spartan";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: #000c24;
`;

export { TextWrap4, TextWrapAbout };
