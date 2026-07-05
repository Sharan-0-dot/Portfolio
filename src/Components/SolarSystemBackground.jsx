import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, useTexture } from "@react-three/drei";
import { Suspense, useRef, useEffect, useState, useMemo } from "react";
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

function Moon() {
  const [colorMap, displacementMap] = useTexture([
    MOON_COLOR_URL,
    MOON_DISPLACEMENT_URL,
  ]);

  const spinRef = useRef();
  const driftRef = useRef();

  useEffect(() => {
    colorMap.colorSpace = THREE.SRGBColorSpace;
    colorMap.anisotropy = 8;
    colorMap.needsUpdate = true;
  }, [colorMap]);

  useFrame((state, delta) => {
    if (spinRef.current) spinRef.current.rotation.y += delta * 0.015;
    if (driftRef.current) {
      const t = state.clock.elapsedTime * 0.03;
      driftRef.current.position.x = 1.1 + Math.sin(t) * 0.35;
      driftRef.current.position.y = -0.2 + Math.cos(t * 0.7) * 0.15;
    }
  });

  return (
    <group ref={driftRef} position={[1.1, -0.2, 0]}>
      <mesh ref={spinRef}>
        <sphereGeometry args={[2.3, 256, 256]} />
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

function Scene() {
  return (
    <>
      <directionalLight position={[-8, 4, 8]} intensity={4.5} color="#ffffff" />
      <directionalLight position={[6, -2, -6]} intensity={0.15} color="#6FA8FF" />
      <ambientLight intensity={0.005} />

      <Suspense fallback={null}>
        <Moon />
      </Suspense>

      <Stars radius={100} depth={60} count={5000} factor={3} fade speed={0.1} />
    </>
  );
}

function StaticMobileBackground() {
  const dots = useMemo(
    () =>
      Array.from({ length: 40 }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        delay: Math.random() * 4,
        duration: Math.random() * 3 + 2,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden">
      
      <div
        className="absolute rounded-full"
        style={{
          top: "-10%",
          right: "-15%",
          width: "60vw",
          height: "60vw",
          maxWidth: 420,
          maxHeight: 420,
          background:
            "radial-gradient(circle at 35% 35%, rgba(228,233,242,0.35), rgba(111,168,255,0.12) 45%, transparent 70%)",
          filter: "blur(2px)",
        }}
      />
      
      {dots.map((d) => (
        <span
          key={d.id}
          className="absolute rounded-full bg-white"
          style={{
            top: `${d.top}%`,
            left: `${d.left}%`,
            width: d.size,
            height: d.size,
            opacity: 0.6,
            animation: `twinkle ${d.duration}s ease-in-out ${d.delay}s infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.9; }
        }
      `}</style>
    </div>
  );
}

export default function SolarSystemBackground() {
  const isMobile = useIsMobile();

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none bg-[#020305]">
      {isMobile ? (
        <StaticMobileBackground />
      ) : (
        <Canvas
          camera={{ position: [0, 0, 7], fov: 32 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
          onCreated={({ gl }) => gl.setClearColor("#020305", 1)}
        >
          <Scene />
        </Canvas>
      )}

      <div className="absolute inset-0 [background:radial-gradient(ellipse_at_center,transparent_40%,rgba(2,3,5,0.7)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#020305]/40 via-[#020305]/70 to-[#020305]/95" />
    </div>
  );
}