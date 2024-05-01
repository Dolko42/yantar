"use client";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import type { userDataResponse } from "../../../types";

const ApiKey: React.FC = () => {
  const [copySuccess, setCopySuccess] = useState(false);
  const [userData, setUserData] = useState<userDataResponse | null>(null);
  const { user } = useUser();

  const apiKey =
    "l237BH87edldGLAgbwdgulbfabi6vt168r2I518REV2157ve1I2715VEk15VRE2";

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          const response = await getUserInfo(apiKey, user.id);
          if (response) {
            const userDataResponse: userDataResponse = {
              id: response.id,
              created_at: response.created_at,
              email: response.email,
              credits: response.credits,
              api_key: response.api_key,
              username: response.username,
              auth_id: response.auth_id,
            };
            setUserData(userDataResponse);
          }
          setUserData(response);
        } catch (error) {
          console.error("Error fetching user:", error);
          // Optionally handle error state here
        }
      }
    };

    fetchUserData();
  }, [user]);

  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 1500); // Reset copy success message after 1.5 seconds
      })
      .catch((error) => {
        console.error("Error copying text to clipboard:", error);
      });
  };

  return (
    <>
      {userData ? (
        <span
          onClick={() => handleCopyToClipboard(userData.api_key)}
          className="font-semibold"
        >
          {userData.api_key}
          {copySuccess && (
            <span className="text-green-600 ml-2 text-sm">Copied!</span>
          )}
        </span>
      ) : (
        <p>Loading user data...</p>
      )}
    </>
  );
};
export default ApiKey;
