import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { TopSection } from "../topSection";
import { Earth } from "../earth";
import { Loader } from "@react-three/drei";

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function Home() {
  return (
    <CanvasContainer>
      <TopSection />
      <Canvas style={{ backgroundColor: "black" }}>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
      <Loader />
    </CanvasContainer>
  );
}

export default Home;
