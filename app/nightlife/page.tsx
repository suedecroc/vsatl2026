"use client";

import { useEffect } from "react";

export default function NightlifeRedirect() {
  useEffect(() => {
    window.location.replace("/#nightlife");
  }, []);
  return null;
}
