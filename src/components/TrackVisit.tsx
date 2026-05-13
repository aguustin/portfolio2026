"use client";

import { useEffect } from "react";

export function TrackVisit() {
  useEffect(() => {
    fetch("/api/track", { method: "POST" }).catch(() => {});
  }, []);
  return null;
}
