import React, { Suspense } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Model from "../components/Scene";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: transparent;
`;
const PhoneModel = () => {
  return (
    <Container>
      <Canvas camera={{ fov: 20 }}>
        <ambientLight intensity={2.25} />
        <directionalLight intensity={0.4} />
        <Suspense fallback={null}> 
          <Model scale={1.77} />
        </Suspense>
        <Environment preset="night" />
        {/* <OrbitControls/> */}
      </Canvas>
    </Container>
  );
};

export default PhoneModel;
