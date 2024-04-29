import React from "react";
import Input from "./Input";
import { CtaDropdown } from "./CtaDropdown";

type NewAdProps = {};

const NewAd: React.FC<NewAdProps> = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-2 mt-6">
      <div className="w-full lg:w-1/3 p-4 border-skin-base border rounded-lg">
        <div>
          <p className="text-xl text-skin-base mb-1">Headline</p>
          <p className="text-skin-muted text-sm mb-3">
            Tell your potential customers about your product or service.
          </p>
          <Input height="3rem" />
          <p className="text-sm text-right text-skin-invisible">0/40</p>
        </div>
        <div className="mt-3">
          <p className="text-xl text-skin-base mb-1">Link</p>
          <p className="text-skin-muted text-sm mb-3">
            This is where you want to drive traffic.
          </p>
          <Input height="3rem" />
        </div>
        <div className="mt-3">
          <p className="text-xl text-skin-base mb-3">CTA</p>
          <CtaDropdown />
        </div>
        <div className="flex flex-col gap-2 mt-6">
          <button className="bg-skin-base text-white w-full text-md md:w-auto py-2 px-12 font-medium rounded-md 3xl:text-lg">
            Create and run
          </button>
          <button className="bg-skin-subtle text-skin-muted w-full text-md md:w-auto py-2 px-12 font-medium rounded-md 3xl:text-lg">
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
            <p className="mt-1 max-w-[28ch] text-lg mb-2">
              Wide selection of exclusive Pokémon cards now available!
            </p>
            <a href="#" className="text-skin-base">
              Shop now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewAd;
