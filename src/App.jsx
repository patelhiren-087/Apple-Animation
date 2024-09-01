import React from "react";
import { Canvas } from "@react-three/fiber";
import "./style.css";
import { Environment, ScrollControls } from "@react-three/drei";
import MacContainer from "./MacContainer";

function App() {
  return (
    <div className="w-full h-screen bg-zinc-950">
      <div className="navbar gap-10 pt-5 pb-3 flex absolute top-0 left-1/2 line -translate-x-1/2">
        {["iphone", "ios","ipad", "services", "mac", "products","iphone", "ios","ipad", "services", "mac", "products"].map((e) => (
          <a href="" className="text-white font-[500] text-sm capitalize">{e}</a>
        ))}
      </div>
      <div className="absolute text-white top-20 left-1/2 -translate-x-1/2 font-[Helvetica_Now_Display] flex flex-col items-center gap-2">
        <h3 className="masked text-7xl tracking-tight font-[700]">
          Macbook Piro
        </h3>
        <h5 className="masked font-semibold">Oh So Pro!</h5>
      </div>
      <Canvas camera={{ fov: 10, position: [0, -10, 220] }}>
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/studio_small_09_2k.hdr",
          ]}
        />
        <ScrollControls pages={[3]}>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
}

export default App;
