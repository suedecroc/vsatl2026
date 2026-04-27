"use client";

import { useEffect } from "react";

export default function GoldenHourRedirect() {
  useEffect(() => {
    window.location.replace("/#golden-hour");
  }, []);
  return null;
}
