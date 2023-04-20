import styled from "styled-components";

const pxToRem = (size: number) => `${size / 16}rem`;

const Input = styled.input`
  font-weight: 300;
width:200
  font-size: ${pxToRem(17)};
  border-width: 0 0 2px;
  margin-bottom: ${pxToRem(56)};
  @media (max-width: 767px) {
    margin-bottom: ${pxToRem(30)};
  }
  @media (min-width: 768px) {
    width: ${pxToRem(350)};
  }
  ::placeholder {
    color: #2f2e41bf;
  }
`;
const ContactUsTitle = styled.div`
  font-weight: 700;
  font-size: 36px;
  color: black;
  @media (max-width: 767px) {
    font-size: ${pxToRem(20)};
  }
`;
const PostButton = styled.button`
  width: ${pxToRem(120)};
  height: ${pxToRem(45)};
  color: white;
  font-weight: 500;
  font-size: ${pxToRem(20)};
  background: #2f2e41;
  border-radius: 9.62162px;
  @media (max-width: 767px) {
    width: ${pxToRem(80)};
    height: ${pxToRem(20)};
    font-size: ${pxToRem(14)};
    margin-top: ${pxToRem(5)};
  }
`;
const Container = styled.button`
  width: ${pxToRem(120)};
  height: ${pxToRem(45)};
  color: white;
  font-weight: 500;
  font-size: ${pxToRem(20)};
  background: #2f2e41;
  border-radius: 9.62162px;
  @media (max-width: 767px) {
    width: ${pxToRem(80)};
    height: ${pxToRem(20)};
    font-size: ${pxToRem(14)};
    margin-top: ${pxToRem(5)};
  }
`;
export { Input, ContactUsTitle, PostButton, Container };
