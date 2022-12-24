import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "../earth";
import { Link } from "react-router-dom";
import { Loader } from "@react-three/drei";

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function Play() {
  return (
    <CanvasContainer>
      <Link
        to="/"
        style={{
          position: "absolute",
          color: "white",
          top: "15px",
          left: "15px",
          fontWeight: 600,
          zIndex: 99,
        }}
      >
        ← Go Back
      </Link>
      <Canvas style={{ backgroundColor: "black" }}>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
      <Loader />
    </CanvasContainer>
  );
}

export default Play;
