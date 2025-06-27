"use client";

import { env } from "@/config/env";
import { Turnstile } from "@marsidev/react-turnstile";

type TurnstileWidgetProps = {
  onVerify: (token: string) => void; // Callback to send the validated token,
  setIsSubmitting?: (isSubmitting: boolean) => void;
  automaticRequest?: boolean;
};

export default function TurnstileWidget({
  onVerify,
  setIsSubmitting,
  automaticRequest,
}: TurnstileWidgetProps) {
  if (automaticRequest && setIsSubmitting) setIsSubmitting(true);
  return (
    <Turnstile
      siteKey={env.CLOUDFLARE.NEXT_PUBLIC_TURNSTILE_SITE_KEY as string}
      onSuccess={(token: string) => onVerify(token)}
      options={{
        size: "invisible",
        theme: "auto", // Theme (auto, light ou dark)
      }}
    />
  );
}
