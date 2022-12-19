import logo from './logo.svg';
import './App.css';
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { useRef } from 'react';
import { TextureLoader } from 'three';
import sunImg from './assests/sun.jpg';
import mercuryImg from './assests/mercury.jpg';
import venusImg from './assests/venus.jpg';
import earthImg from './assests/earth.jpg';
import marsImg from './assests/mars.jpg';
import jupiterImg from './assests/jupiter.jpg';
import neptuneImg from './assests/neptune.jpg';
import saturnImg from './assests/saturn.jpg';
import uranusImg from './assests/uranus.jpg';
import plutoImg from './assests/pluto.jpg';

function Box() {
  const boxRef = useRef();
  const mercuryRef = useRef();
  const venusRef = useRef();
  const earthRef = useRef();
  const marsRef = useRef();
  const jupiterRef = useRef();
  const saturnRef = useRef();
  const uranusRef = useRef();
  const neptuneRef = useRef();
  const plutoRef = useRef();

  useFrame(() => {
    boxRef.current.rotation.y += 0.004;
    boxRef.current.rotation.x += 0.004;
    mercuryRef.current.rotation.y += 0.004;
    mercuryRef.current.rotation.x += 0.004;
    venusRef.current.rotation.y += 0.004;
    venusRef.current.rotation.x += 0.004;
    earthRef.current.rotation.y += 0.004;
    earthRef.current.rotation.x += 0.004;
    marsRef.current.rotation.y += 0.004;
    marsRef.current.rotation.x += 0.004;
    jupiterRef.current.rotation.y += 0.004;
    jupiterRef.current.rotation.x += 0.004;
    saturnRef.current.rotation.y += 0.004;
    saturnRef.current.rotation.x += 0.004;
    uranusRef.current.rotation.y += 0.004;
    uranusRef.current.rotation.x += 0.004;
    neptuneRef.current.rotation.y += 0.004;
    neptuneRef.current.rotation.x += 0.004;
    plutoRef.current.rotation.y += 0.004;
    plutoRef.current.rotation.x += 0.004;
  });

  const sunMap = useLoader(TextureLoader, sunImg);
  const mercuryMap = useLoader(TextureLoader, mercuryImg);
  const venusMap = useLoader(TextureLoader, venusImg);
  const earthMap = useLoader(TextureLoader, earthImg);
  const marsMap = useLoader(TextureLoader, marsImg);
  const jupiterMap = useLoader(TextureLoader, jupiterImg);
  const neptuneMap = useLoader(TextureLoader, neptuneImg);
  const saturnMap = useLoader(TextureLoader, saturnImg);
  const uranusMap = useLoader(TextureLoader, uranusImg);
  const plutoMap = useLoader(TextureLoader, plutoImg);

  return (
    <group>
        <mesh ref={boxRef} rotation-x={Math.PI * 0.25} rotation-y={Math.PI * 0.25}>
        <sphereBufferGeometry /> 
        <meshStandardMaterial map={sunMap} />
        {/* <sphereBufferGeometry /> 
        <meshStandardMaterial color="hotPink" /> */}
      </mesh>
      <mesh ref={mercuryRef} position={[0, 0, Math.PI * 0.9]} rotation-x={Math.PI * 0.25} rotation-y={Math.PI * 0.25}>
        <sphereBufferGeometry /> 
        <meshStandardMaterial map={mercuryMap} />
      </mesh>
      <mesh ref={venusRef} position={[0, 0, 6]} rotation-x={Math.PI * 0.25} rotation-y={Math.PI * 0.25}>
        <sphereBufferGeometry /> 
        <meshStandardMaterial map={venusMap} />
      </mesh>
      <mesh ref={earthRef} position={[0, 0, 9]} rotation-x={Math.PI * 0.25} rotation-y={Math.PI * 0.25}>
        <sphereBufferGeometry /> 
        <meshStandardMaterial map={earthMap} />
      </mesh>
      <mesh ref={marsRef} position={[0, 0, 12]} rotation-x={Math.PI * 0.25} rotation-y={Math.PI * 0.25}>
        <sphereBufferGeometry /> 
        <meshStandardMaterial map={marsMap} />
      </mesh>
      <mesh ref={jupiterRef} position={[0, 0, 15]} rotation-x={Math.PI * 0.25} rotation-y={Math.PI * 0.25}>
        <sphereBufferGeometry /> 
        <meshStandardMaterial map={jupiterMap} />
      </mesh>
      <mesh ref={saturnRef} position={[0, 0, 18]} rotation-x={Math.PI * 0.25} rotation-y={Math.PI * 0.25}>
        <sphereBufferGeometry /> 
        <meshStandardMaterial map={neptuneMap} />
      </mesh>
      <mesh ref={uranusRef} position={[0, 0, 21]} rotation-x={Math.PI * 0.25} rotation-y={Math.PI * 0.25}>
        <sphereBufferGeometry /> 
        <meshStandardMaterial map={saturnMap} />
      </mesh>
      <mesh ref={neptuneRef} position={[0, 0, 24]} rotation-x={Math.PI * 0.25} rotation-y={Math.PI * 0.25}>
        <sphereBufferGeometry /> 
        <meshStandardMaterial map={uranusMap} />
      </mesh>
      <mesh ref={plutoRef} position={[0, 0, 27]} rotation-x={Math.PI * 0.25} rotation-y={Math.PI * 0.25}>
        <sphereBufferGeometry /> 
        <meshStandardMaterial map={plutoMap} />
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
