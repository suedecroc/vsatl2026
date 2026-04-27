"use client";

import { useEffect } from "react";

export default function AfterHoursRedirect() {
  useEffect(() => {
    window.location.replace("/#after-hours");
  }, []);
  return null;
}
