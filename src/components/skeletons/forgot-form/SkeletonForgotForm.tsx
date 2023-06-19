import React from "react";
import { LogoEval } from "../../icons/ready-to-use";

export const SkeletonForgotForm: React.FC = () => {
  return (
    <div className="flex flex-col gap-12 items-center justify-center">
      <LogoEval />
      <div role="status" className="bg-lightPurple p-12 rounded min-w-[450px]">
        <div className="h-5 bg-white rounded-full w-48 mb-5 animate-pulse"></div>
        <div className="h-2 bg-white rounded-full max-w-[360px] mb-2.5 animate-pulse"></div>
        <div className="h-2 bg-white rounded-full w-48 mb-2.5 animate-pulse"></div>
        <div className="h-2 bg-white rounded-full max-w-[330px] mb-10 animate-pulse"></div>
        <div className="h-8 bg-white rounded-full w-full mb-5 animate-pulse"></div>
        <div className="h-8 bg-white rounded-full w-full mb-10 animate-pulse"></div>
        <div className="h-2 bg-white rounded-full max-w-[300px] mb-2.5 animate-pulse"></div>
        <div className="h-2 bg-white rounded-full max-w-[360px] mb-2.5 animate-pulse"></div>
        <div className="h-2 bg-white rounded-full max-w-[360px] mb-2.5 animate-pulse"></div>
        <div className="h-2 bg-white rounded-full max-w-[360px] mb-2.5 animate-pulse"></div>
        <div className="h-2 bg-white rounded-full max-w-[360px] mb-2.5 animate-pulse"></div>
        <div className="h-2 bg-white rounded-full max-w-[360px] mb-2.5 animate-pulse"></div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
