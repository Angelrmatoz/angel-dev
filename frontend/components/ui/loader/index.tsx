import React from "react";
import { LoaderOne } from "@/components/ui/loader";

// Exportar un wrapper para que otros componentes solo importen desde '@/components/ui/loader'
export function LoaderOneDemo() {
  return <LoaderOne />;
}

export default LoaderOneDemo;

