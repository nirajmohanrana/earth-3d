import "../../App.css";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { TopSection } from "../topSection";
import { Earth } from "../earth";

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function Home() {
  return (
    <CanvasContainer>
      <TopSection />
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
}

export default Home;
