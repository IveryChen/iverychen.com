// import React, {Suspense, useRef, useEffect, useState } from 'react';
// import * as THREE from 'three';
// import { Canvas, useLoader, useFrame } from '@react-three/fiber';
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
// import { ShaderMaterial } from 'three';
// import { Environment, OrbitControls, Mesh, Preload, useGLTF } from '@react-three/drei';
import Card from './Card';
import React from 'react';
import jsonData from '../data';
import images from '../imageImports'; 
import { Link } from 'react-router-dom';

// const ChromeShader = {
//   uniforms: {
//     envMap: { value: null },
//     roughness: { value: 0.0 },
//     metalness: { value: 1.0 }
//   },
//   vertexShader: `
//     varying vec3 vReflect;
//     void main() {
//       vec4 worldPosition = modelMatrix * vec4(position, 1.0);
//       vec4 mvPosition = viewMatrix * worldPosition;
//       vec3 cameraToVertex = normalize(worldPosition.xyz - cameraPosition);
//       vec3 worldNormal = normalize(normalMatrix * normal);
//       vReflect = reflect(cameraToVertex, worldNormal);
//       gl_Position = projectionMatrix * mvPosition;
//     }
//   `,

//   fragmentShader: `
//     uniform samplerCube envMap;
//     uniform float roughness;
//     uniform float metalness;
//     varying vec3 vReflect;
//     void main() {
//       vec3 envColor = textureCube(envMap, vReflect).rgb;
//       gl_FragColor = vec4(envColor, 1.0);
//     }
//   `
// };

// const Model = ({ objPath, envMap, position }) => {
//   const modelRef = useRef();

//   useEffect(() => {
//     console.log("Loading OBJ file from:", process.env.PUBLIC_URL + objPath);
//     const loader = new OBJLoader();
//     loader.load(
//       process.env.PUBLIC_URL + objPath,
//       (obj) => {
//         if (obj.children && obj.children.length > 0) {
//           console.log("OBJ file loaded successfully:", objPath);

//           const standardMaterial = new THREE.MeshStandardMaterial({
//             color: 'white', // Change this to match the cube's color if needed
//             metalness: 1.0,
//             roughness: 0.0,
//             envMapIntensity: 1.0
//           });


//           const chromeMaterial = new ShaderMaterial({
//             uniforms: {
//               ...ChromeShader.uniforms,
//               envMap: { value: envMap }
//             },
//             vertexShader: ChromeShader.vertexShader,
//             fragmentShader: ChromeShader.fragmentShader
//           });

//           obj.traverse((child) => {
//             if (child.isMesh) {
//               child.material = standardMaterial;
//               child.material.needsUpdate = true;
//             }
//           });

//           modelRef.current = obj;
//         } else {
//           console.log("No children found in OBJ file:", objPath);
//         }
//       },
//       (xhr) => {
//         console.log((xhr.loaded / xhr.total * 100) + '% loaded');
//       },
//       (error) => {
//         console.error('Error loading OBJ file:', error);
//       }
//     );
//   }, [objPath, envMap]);

//   return modelRef.current ? <primitive object={modelRef.current} scale={10} position={position} /> : null;
// };

const MainPage = () => {

  // const envMapPath = 'my-3d-site/src/assets/cubemap/';
  // const envMap = new THREE.CubeTextureLoader().setPath(envMapPath).load([
  //   'px.jpg', 'nx.jpg',
  //   'py.jpg', 'ny.jpg',
  //   'pz.jpg', 'nz.jpg'
  // ]);

  return (
    <div className="main-page">
      <div className="intro">
        <div className="intro-container">
          <div className="graphic-container">
            <img src={images.lookIvery} alt="Balloon rendering of Look Ivery"></img>
          </div>
          <div className="graphic-text-container">
            <img src={images.intro} alt="Intro image"></img>
          </div>
          {/* <img src={images.lookiveryintro} alt="lookivery in custom balloon render"></img> */}
          {/* <img src={images.lookiveryintro} alt="lookivery in custom balloon render"></img> */}
        </div>
       
      </div>

      <div className="filter-bar">
        <div id="selected-work">SELECTED WORK</div>
      </div>
      
      <div className="cards">
        {jsonData.map((item, index) => (
          <Link to={`/project/${item.path}`} key={item.id}>
          <Card
            key={index}
            path={item.path}
            image={images[item.image]} 
            eventName={item.eventName}
            description={item.description}
            categories={item.categories}
          />
          </Link>
        ))}
      </div>

      {/* <Canvas className="canvas-container"> */}
        {/* <ambientLight intensity={0.5} /> */}
        {/* <directionalLight position={[10, 10, 5]} intensity={1.5} /> */}
        {/* <Model objPath="lookivery_highres.obj" envMap={envMap} position={[3, 0, 0]}/> */}
        {/* <Model objPath="Easter_bunny.obj" envMap={envMap} position={[3, 0, 0]}/> */}

        {/* <mesh position={[2, 0, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </mesh> */}
        {/* <OrbitControls /> */}
        {/* <Environment preset="sunset" /> */}
        {/* <Suspense> */}
        {/* <Cars/> */}
        {/* </Suspense> */}
        {/* <Preload all /> */}
      {/* </Canvas> */}
    </div>
  );
};

export default MainPage;
