"use client";

import React from "react";

export default function ErrorPage({
  reset,
  error,
}: {
  reset: () => void;
  error: Error;
}) {
  return <div>ErrorPage</div>;
}
