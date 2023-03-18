import React from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Model3 from "../components/Scene3";
import { AdaptiveDpr, AdaptiveEvents, Environment } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useContext } from "react";
import { ColorContext } from "./../context/ColorContext";
import { useEffect } from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 1;

  background-color: var(--white);
  overflow: hidden;
`;
const Section = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 1;

  background-color: "#9BB5CE";
`;
const Phone = styled.div`
  width: 100%;
  height: 70%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
  cursor: grab;
`;

const Colors = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  left: 35%;
  top: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 64em) {
    left: 10%;
  }
`;

const Color = styled.li`
  list-style: none;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;

  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0.5rem 0;

  border: 1px solid var(--dark);
`;
const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-size: var(--fontxl);
  padding: 0.3rem;
`;

const SubTitle = styled.h2`
  font-size: var(--fontmd);
  font-family: var(--fontR);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
`;

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0;
  padding: 0.4rem 1rem;
  border-radius: 50px;

  border: none;
  outline: none;

  background-color: var(--blue);
  color: var(--white);
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
const BtnLink = styled.a`
  color: var(--blue);
  text-decoration: none;
  margin-left: 1.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

const IndicatorText = styled.div`
  font-size: var(--fontsm);
  position: absolute;
  top: 1rem;
`;

const PricingSection = () => {
  const sectionRef = useRef(null);

  const { currentColor, changeColorContext } = useContext(ColorContext);

  useEffect(() => {
    sectionRef.current.style.backgroundColor = `rgba(${currentColor.rgbColor},0.4)`;
  }, [currentColor]);

  let updateColor = (color, text, rgbColor) => {
    const colorObj = {
      color,
      text,
      rgbColor,
    };
    changeColorContext(colorObj);
  };

  return (
    <Container>
      <Section ref={sectionRef}>
        <Phone>
          <IndicatorText>360&deg; &#x27F2; </IndicatorText>
          <Canvas camera={{ fov: 14 }}>
            <ambientLight intensity={1} />
            <directionalLight intensity={0.4} />
            <Suspense fallback={null}>
              <Model3 />
            </Suspense>

            <Environment preset="night" />
            <AdaptiveDpr pixelated />
            <AdaptiveEvents />
            <OrbitControls enableZoom={false} />
          </Canvas>

          <Colors>
            <Color
              color="#6209D4"
              onClick={() =>
                updateColor("#6209D4", "French Violet", "98, 9, 212")
              }
            />
            <Color
              color="#08C6CD"
              onClick={() =>
                updateColor("#08C6CD", "Turquoise Surf", "8, 198, 205")
              }
            />
            <Color
              color="#E136A7"
              onClick={() =>
                updateColor("#E136A7", "Frostbite", "225, 54, 167")
              }
            />
            <Color
              color="#FFEB3B"
              onClick={() => updateColor("#FFEB3B", "Gold", "255, 235, 59")}
            />
            <Color
              color="#A50011"
              onClick={() => updateColor("#A50011", "Red", "165, 0, 17")}
            />
            <Color
              color="#292929"
              onClick={() => updateColor("#292929", "Rich Black", "41, 41, 41")}
            />
          </Colors>
        </Phone>

        <Details>
          <SubTitle>iPhone</SubTitle>
          <Title>13 Pro Max</Title>
          <SubTitle>From $1099*</SubTitle>
          <ButtonContainer>
            <Btn>Buy</Btn>
            <BtnLink href="#">Learn More &#x2192;</BtnLink>
          </ButtonContainer>
        </Details>
      </Section>
    </Container>
  );
};

export default PricingSection;
