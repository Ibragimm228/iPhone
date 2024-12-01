import { Environment, Lightformer } from "@react-three/drei";
import { memo } from "react";

const Lights = () => {
  return (
    <group name="lights">
      <Environment resolution={512} blur={0.8}>
        <group>
          <Lightformer 
            form="rect"
            intensity={8}
            position={[-1, 0, -10]}
            scale={[10, 10, 1]}
            color="#495057"
          />
          <Lightformer
            form="rect" 
            intensity={8}
            position={[-10, 2, 1]}
            scale={[10, 10, 1]}
            rotation-y={Math.PI / 2}
            color="#f8f9fa"
          />
          <Lightformer
            form="rect"
            intensity={8} 
            position={[10, 0, 1]}
            scale={[10, 10, 1]}
            rotation-y={Math.PI / 2}
            color="#f8f9fa"
          />
        </group>
      </Environment>

      <spotLight
        position={[-2, 10, 5]}
        angle={0.15}
        penumbra={1}
        decay={0.5}
        distance={50}
        intensity={Math.PI * 0.3}
        color="#f8f9fa"
        castShadow
      />

      <spotLight 
        position={[0, -25, 10]}
        angle={0.15}
        penumbra={1}
        decay={0.5}
        distance={50}
        intensity={Math.PI * 0.3}
        color="#f8f9fa"
        castShadow
      />

      <spotLight
        position={[0, 15, 5]} 
        angle={0.25}
        penumbra={1}
        decay={0.5}
        distance={50}
        intensity={Math.PI * 2.5}
        color="#ffffff"
        castShadow
      />

      <ambientLight intensity={0.2} />
    </group>
  );
};

export default memo(Lights);
