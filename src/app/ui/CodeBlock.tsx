"use client";

import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface CodeBlockProps {
  code: string;
  language: string;
  copy: boolean;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language, copy }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // hide message after 2 seconds
    } catch (err) {
      alert("Failed to copy code.");
    }
  };

  return (
    <div className="relative bg-skin-subtle text-white p-4 mt-3 rounded-md">
      {copy && (
        <>
          <button
            onClick={copyToClipboard}
            className="absolute top-6 right-6 bg-skin-base hover:bg-blue-700 text-white py-1 px-2 rounded"
          >
            Copy
          </button>
          <>
            {copied && (
              <div className="absolute top-14 right-6 bg-green-500 text-white py-1 px-2 rounded transition-opacity duration-500">
                Copied!
              </div>
            )}
          </>
        </>
      )}
      <SyntaxHighlighter language={language} style={docco}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
