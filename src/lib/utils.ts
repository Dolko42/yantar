import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from "axios";
import { createUserData } from "../../types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleSignUp = async (data: createUserData) => {
  const apiEndpoint = `https://backend.yantar.yazero.io/frontend/create-user`;

  try {
    const response = await axios.post(apiEndpoint, data, {
      headers: {
        Authorization: `Bearer ${data.api_key}`,
      },
    });

    console.log("User created on backend:", response.data);
    // Handle successful API response
  } catch (error) {
    console.error("Error creating user on backend:", error);
    // Handle API request error
  }
};
