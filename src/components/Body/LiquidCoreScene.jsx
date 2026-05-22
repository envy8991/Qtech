import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { liquidFragmentShader, liquidVertexShader } from '../../shaders/liquidCoreShader';

function LiquidCore({ status }) {
  const meshRef = useRef();
  const materialRef = useRef();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uStatus: { value: 0 },
      uColorA: { value: new THREE.Color('#00e7ff') },
      uColorB: { value: new THREE.Color('#f8feff') },
    }),
    [],
  );

  useFrame((state, delta) => {
    uniforms.uTime.value += delta;
    const map = { idle: 0, thinking: 1, processing: 2 };
    uniforms.uStatus.value = map[status] ?? 0;
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
    }
    if (meshRef.current && status === 'thinking') {
      meshRef.current.scale.y = THREE.MathUtils.lerp(meshRef.current.scale.y, 1.25, 0.08);
    } else if (meshRef.current) {
      meshRef.current.scale.y = THREE.MathUtils.lerp(meshRef.current.scale.y, 1, 0.08);
    }
    if (materialRef.current) {
      materialRef.current.needsUpdate = false;
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.05, 64]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={liquidVertexShader}
        fragmentShader={liquidFragmentShader}
      />
    </mesh>
  );
}

export function LiquidCoreScene({ status }) {
  return (
    <Canvas camera={{ position: [0, 0, 3.8], fov: 45 }} dpr={[1, 1.75]}>
      <ambientLight intensity={0.2} />
      <directionalLight position={[2, 2, 3]} intensity={1.1} color="#d9fcff" />
      <LiquidCore status={status} />
      <Environment preset="city" />
      <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.25} />
    </Canvas>
  );
}
