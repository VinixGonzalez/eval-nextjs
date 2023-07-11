import React from "react";

export const SkeletonProfileView: React.FC = () => {
  return (
    <div role="status" className="bg-lightPurple p-12 rounded-xl max-w-xl">
      <div className="flex w-full justify-between mb-10">
        <div className="h-5 bg-white rounded-full w-48 animate-pulse"></div>
        <div className="bg-white rounded-full w-24 h-24 animate-pulse"></div>
      </div>
      <div className="h-2 bg-white rounded-full w-14 mb-2.5 animate-pulse"></div>
      <div className="h-6 bg-white rounded-full w-full mb-8 animate-pulse"></div>

      <div className="h-2 bg-white rounded-full w-14 mb-2.5 animate-pulse"></div>
      <div className="h-6 bg-white rounded-full w-full mb-8 animate-pulse"></div>

      <div className="h-2 bg-white rounded-full w-14 mb-2.5 animate-pulse"></div>
      <div className="h-6 bg-white rounded-full w-full mb-16 animate-pulse"></div>

      <div className="h-2 bg-white rounded-full w-52 mb-5 animate-pulse"></div>
      <div className="h-8 bg-white rounded-full w-44 animate-pulse"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
