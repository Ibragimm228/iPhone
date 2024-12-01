import { Html } from '@react-three/drei';
import React from 'react';

const Loader = () => {
  return (
    <Html center>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black/50">
        <div className="w-[10vw] h-[10vw] rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md animate-spin">
          <div className="text-white font-medium">
            Loading...
          </div>
        </div>
      </div>
    </Html>
  );
};

export default Loader;