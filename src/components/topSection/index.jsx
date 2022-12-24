import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import car from "../../assets/images/car.png";
import chair from "../../assets/images/chair.png";
import shoe from "../../assets/images/shoe.png";
import portal from "../../assets/images/portal.png";

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
  margin-top: 10%;
  color: #8ad0ff;
  font-weight: 700;
  font-size: 60px;
`;

const Slogan = styled.h4`
  margin: 0;
  color: #e7e7e7;
  font-weight: 500;
  font-size: 20px;
  margin-top: 10px;
`;

const Paragraph = styled.h4`
  margin: 0;
  color: #cacaca;
  font-weight: 400;
  font-size: 14px;
  margin-top: 1em;
  line-height: 1.5;
  max-width: 40%;
  text-align: center;
`;

const Play = styled.button`
  background-color: #8ad0ff;
  color: #005f9e;
  font-size: 14px;
  font-weight: 700;
  border-radius: 8px;
  text-decoration: none;
  padding: 8px 2em;
  margin-top: 2em;
  cursor: pointer;
  border: 2px solid #005f9e;
  transition: all 400ms ease-in-out;

  &:hover {
    background-color: transparent;
    border: 2px solid #8ad0ff;
    color: #8ad0ff;
    scale: 1.1;
  }
`;

const Author = styled.p`
  color: #cacaca;
  font-weight: 800;
  font-size: 12px;
  margin-top: 1em;
`;

const OtherSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OtherSectionButtonsContainer = styled.div`
  width: 300px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 4px;
  align-items: center;
  justify-items: center;
`;

const OtherHead = styled.h4`
  margin: 0;
  color: #e7e7e7;
  font-weight: 1000;
  font-size: 13px;
  margin-top: 2em;
  animation: color-change ease-in-out 5s infinite;
  @keyframes color-change {
    0% {
      color: #ffcf67;
    }
    25% {
      color: #e661c9;
    }
    50% {
      color: #e04949;
    }
    75% {
      color: #bd592a;
    }
  }
`;

const Chair = styled.button`
  margin-top: 1em;
  background: url(${chair}) center;
  background-size: cover;
  width: 50px;
  height: 50px;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid #ffcf67;
  transition: all 500ms ease-in-out;

  &:hover {
    background-color: transparent;
    border: 2px solid #ff7b00;
    scale: 1.3;
  }
`;

const Car = styled.button`
  margin-top: 1em;
  background: url(${car}) center;
  background-size: cover;
  width: 50px;
  height: 50px;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid #ff00c8;
  transition: all 500ms ease-in-out;

  &:hover {
    background-color: transparent;
    border: 2px solid #ffffff;
    scale: 1.3;
  }
`;

const Shoe = styled.button`
  margin-top: 1em;
  background: url(${shoe}) center;
  background-size: cover;
  width: 50px;
  height: 50px;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid #b61414;
  transition: all 500ms ease-in-out;

  &:hover {
    background-color: transparent;
    border: 2px solid #148888;
    scale: 1.3;
  }
`;

const Portal = styled.button`
  margin-top: 1em;
  background: url(${portal}) center;
  background-size: cover;
  width: 50px;
  height: 50px;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid #a53400;
  transition: all 500ms ease-in-out;

  &:hover {
    background-color: transparent;
    border: 2px solid #e29b00;
    scale: 1.3;
  }
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
      <Link to="/play">
        <Play>Play With It</Play>
      </Link>
      <OtherSectionContainer>
        <OtherHead>Other Three Js Projects</OtherHead>
        <OtherSectionButtonsContainer>
          <Link to="/chair">
            <Chair />
          </Link>
          <Link to="/car">
            <Car />
          </Link>
          <Link to="/car">
            <Shoe />
          </Link>
          <Link to="/car">
            <Portal />
          </Link>
        </OtherSectionButtonsContainer>
      </OtherSectionContainer>
      <Author>~By Niraj</Author>
    </TopSectionContainer>
  );
}
