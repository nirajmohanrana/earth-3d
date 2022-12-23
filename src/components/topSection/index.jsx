import React from "react";
import styled from "styled-components";

const TopSectionContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #1756dd30;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15%;
  z-index: 99;
`;

const Logo = styled.h1`
  margin: 0;
  color: #fff;
  font-weight: 700;
  font-size: 70px;
`;

const Slogan = styled.h4`
  margin: 0;
  color: #fff;
  font-weight: 500;
  font-size: 30px;
  margin-top: 10px;
`;

const Paragraph = styled.h4`
  margin: 0;
  color: #fff;
  font-weight: 400;
  font-size: 10px;
  margin-top: 1em;
  line-height: 1.5;
`;

export function TopSection() {
  return (
    <TopSectionContainer>
      <Logo>THE EARTH</Logo>
      <Slogan>Our Little Big Planet</Slogan>
    </TopSectionContainer>
  );
}
