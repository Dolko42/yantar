"use client";
import React, { useState } from "react";

type APIKeyProps = {
  apiKey: string;
};

const APIKey: React.FC<APIKeyProps> = ({ apiKey }) => {
  const [copySuccess, setCopySuccess] = useState(false);

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
      <span
        onClick={() => handleCopyToClipboard(apiKey)}
        className="font-semibold"
      >
        {apiKey}
      </span>
      {copySuccess && (
        <span className="text-green-600 ml-2 text-sm">Copied!</span>
      )}
    </>
  );
};
export default APIKey;
