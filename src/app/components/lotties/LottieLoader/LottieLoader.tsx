"use client";

import { Player, Controls } from "@lottiefiles/react-lottie-player";
import houseLoader from "@/../public/29110-load-house.json";
import React from "react";

export const LottieLoader: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Player
        autoplay
        loop
        src={houseLoader}
        style={{ height: "300px", width: "300px" }}
      >
        {/* <Controls visible={true} buttons={["play", "repeat", "frame", "debug"]} /> */}
      </Player>
    </div>
  );
};
