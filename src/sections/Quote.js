import React from "react";
import styled, { keyframes } from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--dark);
  color: var(--white);
`;
const moveUp = keyframes`
100%{
  transform:translateY(0);
}
`;

const Text = styled.p`
  width: 50%;
  font-size: var(--fontlg);
  position: relative;
  height: var(--fontmd);
  overflow: hidden;
  span {
    position: absolute;
    transform: translateY(3rem);
    animation-name: ${moveUp};
    animation-duration: 2.5s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    animation-delay: ${(props) => props.delay};
    font-family: var(--fontL);
    background-image: linear-gradient(-45deg, var(--gradient));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .author {
    width: 100%;
    text-align: end;
    background-image: linear-gradient(-180deg, var(--gradient));
  }
`;

const Quote = () => {
  return (
    <Section>
      <TextContainer>
        <Text delay="0s">
          <span>"When the Mac first came out,</span>
        </Text>
        <Text delay="0.2s">
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;Newsweek asked me what I thought of it.
          </span>
        </Text>
        <Text delay="0.4s">
          <span>&nbsp;&nbsp;&nbsp;&nbsp;I said: Well,</span>
        </Text>
        <Text delay="0.6s">
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;it's the first personal computer worth
            criticizing.
          </span>
        </Text>
        <Text delay="0.8s">
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;So at the end of the presentation,
          </span>
        </Text>
        <Text delay="1s">
          <span>&nbsp;&nbsp;&nbsp;&nbsp;Steve came up to me and said:</span>
        </Text>
        <Text delay="1.2s">
          <span>&nbsp;&nbsp;&nbsp;&nbsp;Is the iPhone worth criticizing?</span>
        </Text>
        <Text delay="1.4s">
          <span>&nbsp;&nbsp;&nbsp;&nbsp;And I said:</span>
        </Text>
        <Text delay="1.6s">
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;Make the screen five inches by eight inches,
          </span>
        </Text>
        <Text delay="1.8s">
          <span>&nbsp;&nbsp;&nbsp;&nbsp;and you'll rule the world."</span>
        </Text>
        <Text delay="2s">
          <span className="author">― Alex Kay</span>
        </Text>
      </TextContainer>
    </Section>
  );
};

export default Quote;
