"use client";

import React, { ChangeEvent, useState } from "react";
import Input from "./Input";
import { CtaDropdown } from "./CtaDropdown";

type NewAdProps = {};

const NewAd: React.FC<NewAdProps> = () => {
  const [headlineValue, setHeadlineValue] = useState<string>("");
  const [linkValue, setLinkValue] = useState<string>("");
  const [isValidLink, setIsValidLink] = useState<boolean>(true);
  const [ctaValue, setCtaValue] = useState<string>("shop-now");

  const handleHeadlineChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;

    if (inputValue.length <= 60) {
      setHeadlineValue(inputValue);
    } else {
      setHeadlineValue(inputValue.slice(0, 60));
    }
  };

  const handleLinkChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;
    setLinkValue(inputValue);

    const urlRegex = /^(https?:\/\/)?([\w.]+)\.([a-z]{2,})(\/[\w .-]*)*\/?$/i;
    const isValid = urlRegex.test(inputValue);

    setIsValidLink(isValid);
  };

  const handleCtaChange = (value: string) => {
    setCtaValue(value);
  };

  const handleSubmit = () => {
    if (isValidLink) {
      console.log("Headline:", headlineValue);
      console.log("Link is valid:", linkValue);
      console.log("Selected CTA:", ctaValue);
    } else {
      console.log("Invalid link:", linkValue);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-2 mt-6">
      <div className="w-full lg:w-1/3 p-4 border-skin-base border rounded-lg">
        <div>
          <p className="text-xl text-skin-base mb-1">Headline</p>
          <p className="text-skin-muted text-sm mb-3">
            Tell your potential customers about your product or service.
          </p>
          <Input
            height="3rem"
            placeholder="Enter headline"
            value={headlineValue}
            onChange={handleHeadlineChange}
          />
          <p className="text-sm text-right text-skin-invisible">
            {headlineValue.length}/60
          </p>
        </div>
        <div className="mt-3">
          <p className="text-xl text-skin-base mb-1">Link</p>
          <p className="text-skin-muted text-sm mb-3">
            This is where you want to drive traffic.
          </p>
          <Input
            height="3rem"
            placeholder="Enter link"
            value={linkValue}
            onChange={handleLinkChange}
          />
        </div>
        <div className="mt-3">
          <p className="text-xl text-skin-base mb-3">CTA</p>
          <CtaDropdown onChange={handleCtaChange} />
        </div>
        <div className="flex flex-col gap-2 mt-6">
          <button
            onClick={handleSubmit}
            className="bg-skin-base text-white w-full text-md md:w-auto py-2 px-12 font-medium rounded-md 3xl:text-lg"
          >
            Create and run
          </button>
          <button
            onClick={handleSubmit}
            className="bg-skin-subtle text-skin-muted w-full text-md md:w-auto py-2 px-12 font-medium rounded-md 3xl:text-lg"
          >
            Save as draft
          </button>
        </div>
      </div>
      <div className="flex flex-col w-full lg:w-2/3 bg-white p-4 border-skin-base border rounded-lg">
        <p className="text-xl text-skin-base mb-1">Preview</p>
        <div className="flex items-center justify-center w-full grow pb-7">
          <div className="p-3 bg-gray-100 h-min border border-gray-200 rounded-lg pr-8">
            <span className="px-3 py-[2px] bg-white text-gray-400 text-[10px] font-medium rounded">
              Sponsored
            </span>
            <p className="mt-1 max-w-[28ch] text-lg mb-2 break-words">
              {headlineValue}
            </p>
            {isValidLink && (
              <a href={linkValue} target="_blank" className="text-skin-base">
                {ctaValue}
              </a>
            )}
            {!isValidLink && (
              <span className="text-red-500">
                Invalid link. Please enter a valid URL.
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewAd;
