import {
  AIDetector,
  type ImageDetectionResult,
} from "@annapurna12/ai-detector";
import { useState } from "react";

const detector = new AIDetector({
  runtime: "wasm",
  provenance: true,
});

export function useDetector() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ImageDetectionResult | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  return {
    loading,
    result,
    imageSrc,
    detectImage,
    resetData,
  };

  function resetData() {
    setLoading(false);
    setResult(null);
    setImageSrc(null);
  }

  async function detectImage(file: File) {
    setResult(null);
    setLoading(true);
    setImageSrc(URL.createObjectURL(file));
    const buffer = await file.arrayBuffer();
    const result = await detector.detectImage(buffer);
    setResult(result);
    setLoading(false);
    return result;
  }
}
