import { Dispatch, SetStateAction } from "react";

type ResetTurnstileProps = {
  setTurnstileToken: Dispatch<SetStateAction<string | null>>;
  setTurnstileKey: Dispatch<SetStateAction<number>>;
};

export const resetTurnstile = ({
  setTurnstileToken,
  setTurnstileKey,
}: ResetTurnstileProps) => {
  setTurnstileToken(null);
  setTurnstileKey(Date.now());
};

export const verifyTurnstileToken = async (token: string): Promise<boolean> => {
  try {
    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          response: token,
          secret: process.env.TURNSTILE_SECRET_KEY,
        }),
      }
    );

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error("Error verifying turnstile token:", error);
    return false;
  }
};
