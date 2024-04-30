import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from "axios";
import { userData } from "../../types";
import { UserResource } from "@clerk/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleSignUp = async (user: UserResource) => {
  const apiKey =
    "l237BH87edldGLAgbwdgulbfabi6vt168r2I518REV2157ve1I2715VEk15VRE2";

  if (user) {
    const email = user.primaryEmailAddress?.emailAddress || "";

    const userData: userData = {
      api_key: apiKey,
      email: email,
      session_id: user.id,
    };

    const apiEndpoint = `https://backend.yantar.yazero.io/frontend/create-user`;

    try {
      const response = await axios.post(apiEndpoint, userData, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });

      console.log("User created on backend:", response.data);
      // Handle successful API response
    } catch (error) {
      console.error("Error creating user on backend:", error);
      // Handle API request error
    }
  }
};
