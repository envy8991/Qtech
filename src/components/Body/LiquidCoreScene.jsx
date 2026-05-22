import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { liquidFragmentShader, liquidVertexShader } from '../../shaders/liquidCoreShader';

function LiquidCore({ status = 'idle' }) {
  const meshRef = useRef();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uStatus: { value: 0 },
      uColorA: { value: new THREE.Color('#00e7ff') },
      uColorB: { value: new THREE.Color('#f8feff') },
    }),
    [],
  );

  useFrame((_, delta) => {
    uniforms.uTime.value += delta;
    const map = { idle: 0, thinking: 1, processing: 2 };
    uniforms.uStatus.value = map[status] ?? 0;

    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.16;
      const targetScaleY = status === 'thinking' ? 1.25 : 1;
      meshRef.current.scale.y = THREE.MathUtils.lerp(meshRef.current.scale.y, targetScaleY, 0.08);
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.05, 32]} />
      <shaderMaterial uniforms={uniforms} vertexShader={liquidVertexShader} fragmentShader={liquidFragmentShader} />
    </mesh>
  );
}

export function LiquidCoreScene({ status = 'idle' }) {
  return (
    <Canvas camera={{ position: [0, 0, 3.8], fov: 45 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: false }}>
      <color attach="background" args={['#070b1a']} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[2, 2, 3]} intensity={1.25} color="#d9fcff" />
      <pointLight position={[-2, -1, 2]} intensity={0.45} color="#00d9ff" />
      <LiquidCore status={status} />
    </Canvas>
  );
}
