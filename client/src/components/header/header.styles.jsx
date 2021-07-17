import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  max-height: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
  background: white;

  @media screen and (max-width: 800px) {
    height: 60px;
    margin-bottom: 10px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 800px) {
    width: 15%;
    padding: 0;
  }
`;

export const OptionsContainer = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 15px 10px;
  cursor: pointer;
`;
