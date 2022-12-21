import logo from './logo.svg';
import './App.css';
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { useRef } from 'react';
import { TextureLoader } from 'three';
import earthImg from './assests/earth.jpg';

function Box() {
  const earthRef = useRef();

  useFrame(() => {
    earthRef.current.rotation.y += 0.004;
    earthRef.current.rotation.x += 0.004;
  });

  const earthMap = useLoader(TextureLoader, earthImg);

  return (
    <group>
      <mesh ref={earthRef} rotation-x={Math.PI * 0.25} rotation-y={Math.PI * 0.25}>
        <sphereBufferGeometry /> 
        <meshStandardMaterial map={earthMap} />
      </mesh>
    </group>
  );
}

function App() {
  return (
    <div className="App">
      <Canvas>
        <OrbitControls />
        <Stars />
        {/* <ambientLight intensity={0.5} /> */}
        <directionalLight intensity={0.5} />
        <spotLight 
          position={[10, 15, 10]}
          angle={0.3} 
        />
        <Box />
      </Canvas>
    </div>
  );
}

export default App;
