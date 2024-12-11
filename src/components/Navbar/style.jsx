import styled from "styled-components";

const Navbar1 = styled.nav`
  background-color: grey;
  width: 100%;
  height: 80px;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
`;

const Navbar5 = styled.div`
  width: 1440px;
  height: 80px;
  margin: auto;
  display: grid;
  grid-template-columns: 200px 500px 120px;
  grid-template-rows: 40px;
  align-content: center;
  justify-content: space-between;
`;

const Navbar2 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Navbar3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Input = styled.input`
  width: 450px;
  height: 40px;
  border-radius: 50px;
  border: none;
`;

const Navbar4 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 30px;

  height: 30px;
  border-radius: 30px;
  border: none;
`;
export { Navbar1, Navbar2, Navbar3, Input, Navbar4, Button, Navbar5 };
