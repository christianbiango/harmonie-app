"use client";
import { useEffect } from "react";

export default function AxeptioConsent() {
  useEffect(() => {
    const onReady = () => {
      window.axeptioSDK?.on("cookies:complete", (choices: any) => {
        if (choices["google-analytics"]) {
          // Exemple : charger Google Analytics si accepté
          console.log("Consentement GA OK");
        }
      });
    };

    if (window.axeptioSDK) {
      onReady();
    } else {
      window.addEventListener("axeptio_ready", onReady);
    }

    return () => {
      window.removeEventListener("axeptio_ready", onReady);
    };
  }, []);

  return null;
}
