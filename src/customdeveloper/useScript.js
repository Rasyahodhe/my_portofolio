import { useEffect } from "react";

const useScript = (src, crossOrigin = "anomymous") => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = src;
    script.crossOrigin = crossOrigin;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [src, crossOrigin]);
};
