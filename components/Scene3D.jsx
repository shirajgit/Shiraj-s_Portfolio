// components/Scene3D.jsx
// Real 3D hero background — animated distorted gold "core" + particle field,
// gently reacting to the cursor. Built on react-three-fiber + drei.
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Icosahedron } from "@react-three/drei";
import { useRef, useMemo, Suspense } from "react";
import * as THREE from "three";

/* 🟡 The centerpiece — a molten, distorting gold core */
function Core() {
  const solid = useRef(null);
  const wire = useRef(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // slow idle spin
    if (solid.current) {
      solid.current.rotation.y = t * 0.12;
      // ease toward the pointer for a "looking at you" feel
      solid.current.rotation.x = THREE.MathUtils.lerp(
        solid.current.rotation.x,
        state.pointer.y * 0.35,
        0.04
      );
    }
    if (wire.current) {
      wire.current.rotation.y = -t * 0.08;
      wire.current.rotation.z = t * 0.05;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.5} floatIntensity={1.1}>
      {/* solid distorted body */}
      <Icosahedron ref={solid} args={[1.55, 12]}>
        <MeshDistortMaterial
          color="#f59e0b"
          emissive="#b45309"
          emissiveIntensity={0.35}
          roughness={0.18}
          metalness={0.85}
          distort={0.42}
          speed={1.8}
        />
      </Icosahedron>

      {/* faint tech wireframe shell around it */}
      <Icosahedron ref={wire} args={[1.85, 2]}>
        <meshBasicMaterial
          color="#fbbf24"
          wireframe
          transparent
          opacity={0.12}
        />
      </Icosahedron>
    </Float>
  );
}

/* ✨ Drifting particle field */
function Particles({ count = 140 }) {
  const ref = useRef(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.025;
      // subtle parallax toward the cursor
      ref.current.position.x = state.pointer.x * 0.4;
      ref.current.position.y = state.pointer.y * 0.4;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color="#fde68a"
        transparent
        opacity={0.65}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        {/* lighting tuned for the gold core */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 4, 3]} intensity={2.2} color="#fbbf24" />
        <pointLight position={[-5, -2, -3]} intensity={40} color="#f97316" />
        <pointLight position={[5, 3, 2]} intensity={25} color="#fde68a" />

        <Core />
        <Particles />
      </Suspense>
    </Canvas>
  );
}
