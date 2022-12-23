import React from "react";
import styled from "styled-components";

const TopSectionContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #001f612d;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 99;
`;

const Logo = styled.h1`
  margin: 0;
  margin-top: 15%;
  color: #8ad0ff;
  font-weight: 700;
  font-size: 70px;
`;

const Slogan = styled.h4`
  margin: 0;
  color: #e7e7e7;
  font-weight: 500;
  font-size: 30px;
  margin-top: 10px;
`;

const Paragraph = styled.h4`
  margin: 0;
  color: #cacaca;
  font-weight: 400;
  font-size: 16px;
  margin-top: 1em;
  line-height: 1.5;
  max-width: 40%;
  text-align: center;
`;

const Play = styled.button`
  outline: none;
  border: none;
  background-color: #8ad0ff;
  color: #000;
  font-size: 14px;
  font-weight: 700;
  border-radius: 8px;
  padding: 8px 2em;
  margin-top: 3em;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 400ms ease-in-out;

  &:hover {
    background-color: transparent;
    border: 2px solid #8ad0ff;
    color: #fff;
  }
`;

const Author = styled.p`
  color: #cacaca;
  font-weight: 800;
  font-size: 12px;
  margin-top: 1em;
`;

export function TopSection() {
  return (
    <TopSectionContainer>
      <Logo>THE EARTH</Logo>
      <Slogan>Our Little Big Planet</Slogan>
      <Paragraph>
        Earth, our home planet, is a world unlike any other. The third planet
        from the sun, Earth is the only place in the known universe confirmed to
        host life. With a radius of 3,959 miles, Earth is the fifth largest
        planet in our solar system, and it's the only one known for sure to have
        liquid water on its surface.
      </Paragraph>
      <Play>Play With It</Play>
      <Author>~By Niraj</Author>
    </TopSectionContainer>
  );
}
