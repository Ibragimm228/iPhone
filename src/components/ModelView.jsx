import { Html, OrbitControls, PerspectiveCamera, View } from "@react-three/drei"
import * as THREE from 'three'
import Lights from './Lights';
import Loader from './Loader';
import IPhone from './IPhone';
import { Suspense } from "react";

const ModelView = ({ index, groupRef, gsapType, controlRef, setRotationState, size, item }) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}
    >
      {/* Improved ambient light intensity for better overall illumination */}
      <ambientLight intensity={0.5} />

      {/* Adjusted camera position for better viewing angle */}
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />

      <Lights />

      <OrbitControls 
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.5} // Smoother rotation speed
        minPolarAngle={Math.PI / 2.5} // Limit vertical rotation
        maxPolarAngle={Math.PI / 1.5}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      /> 

      {/* Fixed template literal syntax error in name prop */}
      <group ref={groupRef} name={index === 1 ? 'small' : 'large'} position={[0, 0, 0]}>
        <Suspense fallback={<Loader />}>
          <IPhone 
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
            // Added rotation for better initial view
            rotation={[0, -Math.PI / 4, 0]}
          />
        </Suspense>
      </group>
    </View>
  )
}

export default ModelView