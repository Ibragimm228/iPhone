import * as THREE from 'three';
import React, { useEffect, useRef, useMemo } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

function Model(props) {
  // Load model and materials
  const { nodes, materials } = useGLTF("/models/scene.glb");
  
  // Load and memoize texture
  const texture = useTexture(props.item.img);
  
  // Define excluded materials that shouldn't change color
  const excludedMaterials = useMemo(() => [
    "zFdeDaGNRwzccye",
    "ujsvqBWRMnqdwPx", 
    "hUlRcbieVuIiOXG",
    "jlzuBkUzuJqgiAK",
    "xNrofRCqOXXHVZt"
  ], []);

  // Update materials when props change
  useEffect(() => {
    Object.entries(materials).forEach(([key, material]) => {
      if (!excludedMaterials.includes(key)) {
        material.color = new THREE.Color(props.item.color[0]);
      }
      material.needsUpdate = true;
    });
  }, [materials, props.item, excludedMaterials]);

  // Memoize scale value
  const scale = useMemo(() => 0.01, []);

  // Common mesh props
  const commonProps = useMemo(() => ({
    castShadow: true,
    receiveShadow: true,
    scale
  }), [scale]);

  return (
    <group {...props} dispose={null}>
      {/* Main body parts */}
      <mesh
        {...commonProps}
        geometry={nodes.ttmRoLdJipiIOmf.geometry}
        material={materials.hUlRcbieVuIiOXG}
      />
      <mesh
        {...commonProps}
        geometry={nodes.DjsDkGiopeiEJZK.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        {...commonProps}
        geometry={nodes.buRWvyqhBBgcJFo.geometry}
        material={materials.PaletteMaterial002}
      />

      {/* Screen and display */}
      <mesh
        {...commonProps}
        geometry={nodes.xXDHkMplTIDAXLN.geometry}
        material={materials.pIJKfZsazmcpEiU}
      >
        <meshStandardMaterial 
          roughness={1} 
          map={texture}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Camera and sensors */}
      <mesh
        {...commonProps}
        geometry={nodes.MrMmlCAsAxJpYqQ_0.geometry}
        material={materials.dxCVrUCvYhjVxqy}
      />
      <mesh
        {...commonProps}
        geometry={nodes.wqbHSzWaUxBCwxY_0.geometry}
        material={materials.MHFGNLrDQbTNima}
      />

      {/* Frame and buttons */}
      <mesh
        {...commonProps}
        geometry={nodes.QvGDcbDApaGssma.geometry}
        material={materials.kUhjpatHUvkBwfM}
      />
      <mesh
        {...commonProps}
        geometry={nodes.vFwJFNASGvEHWhs.geometry}
        material={materials.RJoymvEsaIItifI}
      />
      <mesh
        {...commonProps}
        geometry={nodes.evAxFwhaQUwXuua.geometry}
        material={materials.KSIxMqttXxxmOYl}
      />

      {/* Internal components */}
      <mesh
        {...commonProps}
        geometry={nodes.USxQiqZgxHbRvqB.geometry}
        material={materials.mcPrzcBUcdqUybC}
      />
      <mesh
        {...commonProps}
        geometry={nodes.TvgBVmqNmSrFVfW.geometry}
        material={materials.pIhYLPqiSQOZTjn}
      />
      <mesh
        {...commonProps}
        geometry={nodes.GuYJryuYunhpphO.geometry}
        material={materials.eShKpuMNVJTRrgg}
      />

      {/* Additional details */}
      <mesh
        {...commonProps}
        geometry={nodes.pvdHknDTGDzVpwc.geometry}
        material={materials.xdyiJLYTYRfJffH}
      />
      <mesh
        {...commonProps}
        geometry={nodes.CfghdUoyzvwzIum.geometry}
        material={materials.jpGaQNgTtEGkTfo}
      />
      <mesh
        {...commonProps}
        geometry={nodes.DjdhycfQYjKMDyn.geometry}
        material={materials.ujsvqBWRMnqdwPx}
      />
      <mesh
        {...commonProps}
        geometry={nodes.usFLmqcyrnltBUr.geometry}
        material={materials.sxNzrmuTqVeaXdg}
      />
      <mesh
        {...commonProps}
        geometry={nodes.vELORlCJixqPHsZ.geometry}
        material={materials.zFdeDaGNRwzccye}
      />
      <mesh
        {...commonProps}
        geometry={nodes.EbQGKrWAqhBHiMv.geometry}
        material={materials.TBLSREBUyLMVtJa}
      />
      <mesh
        {...commonProps}
        geometry={nodes.EddVrWkqZTlvmci.geometry}
        material={materials.xNrofRCqOXXHVZt}
      />
      <mesh
        {...commonProps}
        geometry={nodes.KSWlaxBcnPDpFCs.geometry}
        material={materials.yQQySPTfbEJufve}
      />
      <mesh
        {...commonProps}
        geometry={nodes.TakBsdEjEytCAMK.geometry}
        material={materials.PaletteMaterial003}
      />
      <mesh
        {...commonProps}
        geometry={nodes.IykfmVvLplTsTEW.geometry}
        material={materials.PaletteMaterial004}
      />
      <mesh
        {...commonProps}
        geometry={nodes.wLfSXtbwRlBrwof.geometry}
        material={materials.oZRkkORNzkufnGD}
      />
      <mesh
        {...commonProps}
        geometry={nodes.WJwwVjsahIXbJpU.geometry}
        material={materials.yhcAXNGcJWCqtIS}
      />
      <mesh
        {...commonProps}
        geometry={nodes.YfrJNXgMvGOAfzz.geometry}
        material={materials.bCgzXjHOanGdTFV}
      />
      <mesh
        {...commonProps}
        geometry={nodes.DCLCbjzqejuvsqH.geometry}
        material={materials.vhaEJjZoqGtyLdo}
      />
      <mesh
        {...commonProps}
        geometry={nodes.CdalkzDVnwgdEhS.geometry}
        material={materials.jlzuBkUzuJqgiAK}
      />
      <mesh
        {...commonProps}
        geometry={nodes.NtjcIgolNGgYlCg.geometry}
        material={materials.PpwUTnTFZJXxCoE}
      />
      <mesh
        {...commonProps}
        geometry={nodes.pXBNoLiaMwsDHRF.geometry}
        material={materials.yiDkEwDSyEhavuP}
      />
      <mesh
        {...commonProps}
        geometry={nodes.IkoiNqATMVoZFKD.geometry}
        material={materials.hiVunnLeAHkwGEo}
      />
      <mesh
        {...commonProps}
        geometry={nodes.rqgRAGHOwnuBypi.geometry}
        material={materials.HGhEhpqSBZRnjHC}
      />
    </group>
  );
}

// Memoize the component
const MemoizedModel = React.memo(Model);

export default MemoizedModel;

// Preload model
useGLTF.preload("/models/scene.glb");
