"use client";

import { useEffect } from "react";

export default function DayRedirect() {
  useEffect(() => {
    window.location.replace("/#day");
  }, []);
  return null;
}
