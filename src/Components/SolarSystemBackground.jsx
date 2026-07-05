import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, useTexture } from "@react-three/drei";
import { Suspense, useRef, useEffect, useState } from "react";
import * as THREE from "three";

const MOON_COLOR_URL = "/textures/color_map.jpg";
const MOON_DISPLACEMENT_URL = "/textures/heatmap.jpg";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.matchMedia("(max-width: 768px)").matches : false
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return isMobile;
}

function Moon({ isMobile }) {
  const [colorMap, displacementMap] = useTexture([
    MOON_COLOR_URL,
    MOON_DISPLACEMENT_URL,
  ]);

  const spinRef = useRef();
  const driftRef = useRef();

  useEffect(() => {
    colorMap.colorSpace = THREE.SRGBColorSpace;
    colorMap.anisotropy = isMobile ? 1 : 8;
    colorMap.needsUpdate = true;
  }, [colorMap, isMobile]);

  useFrame((state, delta) => {
    if (spinRef.current) spinRef.current.rotation.y += delta * 0.015;
    if (driftRef.current) {
      const t = state.clock.elapsedTime * 0.03;
      driftRef.current.position.x = 1.1 + Math.sin(t) * 0.35;
      driftRef.current.position.y = -0.2 + Math.cos(t * 0.7) * 0.15;
    }
  });

  const segments = isMobile ? 64 : 256;

  return (
    <group ref={driftRef} position={[1.1, -0.2, 0]}>
      <mesh ref={spinRef}>
        <sphereGeometry args={[2.3, segments, segments]} />
        <meshStandardMaterial
          map={colorMap}
          displacementMap={displacementMap}
          displacementScale={0.06}
          roughness={0.9}
          metalness={0.1}
        />
      </mesh>
    </group>
  );
}

function Scene({ isMobile }) {
  return (
    <>
      <directionalLight position={[-8, 4, 8]} intensity={4.5} color="#ffffff" />
      <directionalLight position={[6, -2, -6]} intensity={0.15} color="#6FA8FF" />
      <ambientLight intensity={0.005} />

      <Suspense fallback={null}>
        <Moon isMobile={isMobile} />
      </Suspense>

      <Stars
        radius={100}
        depth={60}
        count={isMobile ? 1500 : 5000}
        factor={3}
        fade
        speed={0.1}
      />
    </>
  );
}

export default function SolarSystemBackground() {
  const isMobile = useIsMobile();

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none bg-[#020305]">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 32 }}
        dpr={isMobile ? 1 : [1, 2]}
        gl={{ antialias: !isMobile, alpha: true, powerPreference: "low-power" }}
        onCreated={({ gl }) => gl.setClearColor("#020305", 1)}
      >
        <Scene isMobile={isMobile} />
      </Canvas>

      <div className="absolute inset-0 [background:radial-gradient(ellipse_at_center,transparent_40%,rgba(2,3,5,0.7)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#020305]/40 via-[#020305]/70 to-[#020305]/95" />
    </div>
  );
}